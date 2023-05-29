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
useScroll(contentContainerRef, {
  throttle: 200,
  onStop() {
    router.replace({ hash: nextHashStore.nextHash })
  },
})
</script>

<template>
  <div class="article-layout relative">
    <ContentDoc v-slot="{ doc }">
      <div class="absolute left-0 top-0 hidden w-48 sm:block" />
      <div ref="contentContainerRef" class="absolute inset-0 h-full scroll-py-2 scrollbar-primary">
        <ContentRenderer class="mx-auto px-8 py-4 prose prose-slate dark:prose-invert" :value="doc" />
      </div>
      <div class="absolute right-0 top-0 hidden w-64 flex-col py-8 md:flex">
        <a v-for="link in doc?.body?.toc?.links" :key="link.id" class="overflow-hidden text-ellipsis px-2 py-1" :href="`#${link.id}`" @click.prevent="scrollSmooth(link.id)">
          <span class="relative inline-block after:content-['']" after="absolute inset-y-0 left-0 w-0 transition-all hover:(border-b-2 w-full) border-slate-500">{{ link.text }}</span>
        </a>
      </div>
    </ContentDoc>
  </div>
</template>

<style lang="scss" scoped>
.article-layout {
  height: calc(100vh - 4rem);
}
</style>
