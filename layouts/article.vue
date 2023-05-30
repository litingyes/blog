<script setup lang="ts">
const router = useRouter()
const nextHashStore = useNextHash()

function scrollSmooth(id: string) {
  nextHashStore.setNextHash(`#${id}`)
  document?.querySelector(`#${id}`)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
}

const contentContainerRef = ref()
const { y } = useScroll(contentContainerRef, {
  throttle: 200,
  behavior: 'smooth',
  onStop() {
    router.replace({ hash: nextHashStore.nextHash })
  },
})
const displayUpArrow = computed(() => (y.value >= 400))
function scrollToTop() {
  nextHashStore.setNextHash('')
  y.value = 0
}

const dayjs = useDayjs()
</script>

<template>
  <div class="article-layout relative">
    <ContentDoc v-slot="{ doc }">
      <div class="absolute left-0 top-0 hidden w-48 sm:block" />
      <div ref="contentContainerRef" class="absolute inset-0 h-screen scroll-py-2 pt-16 scrollbar-primary">
        <div class="mx-auto px-8 py-4 prose prose-slate dark:prose-invert">
          <h1>{{ doc.title ?? '暂无标题' }}</h1>
          <p v-if="doc.description" class="text-slate-600 dark:text-slate-400">
            {{ doc.description }}
          </p>
          <div class="flex items-center gap-4 text-slate-500">
            <div v-if="doc.postDate" class="flex items-center gap-1">
              <span class="i-mdi:date-range" />
              <span>{{ dayjs(doc.postDate).format('ddd YYYY-MM-DD') }}</span>
            </div>
            <div v-if="doc.totalCount" class="flex items-center gap-1">
              <span class="i-gridicons:stats" />
              <span>约{{ Math.ceil(doc.totalCount) }}字</span>
            </div>
            <div v-if="doc.readMinutes" class="flex items-center gap-1">
              <span class="i-mdi:clock-outline" />
              <span>耗时{{ Math.ceil(doc.readMinutes) }}分钟</span>
            </div>
          </div>
          <ContentRenderer :value="doc" />
        </div>
      </div>
      <div class="absolute bottom-0 right-0 top-16 hidden w-64 flex-col py-8 md:flex">
        <a v-for="link in doc?.body?.toc?.links" :key="link.id" class="overflow-hidden text-ellipsis px-2 py-1" :href="`#${link.id}`" @click.prevent="scrollSmooth(link.id)">
          <span class="relative inline-block after:content-['']" after="absolute inset-y-0 left-0 w-0 transition-all hover:(border-b-2 w-full) border-slate-500">{{ link.text }}</span>
        </a>
      </div>
      <Transition name="slide">
        <div v-show="displayUpArrow" class="fixed bottom-8 right-4 h-10 w-10 text-4xl md:right-72 btn-container" @click="scrollToTop">
          <span class="i-mingcute:arrow-up-fill" />
        </div>
      </Transition>
    </ContentDoc>
  </div>
</template>

<style lang="scss" scoped>
.article-layout {
  height: calc(100vh - 4rem);

  .slide-enter-active,
  .slide-leave-active  {
    transition: all 0.5s ease;
  }

  .slide-enter-from,
  .slide-leave-to {
    opacity: 0;
    transform: translateY(100px);
  }
}
</style>
