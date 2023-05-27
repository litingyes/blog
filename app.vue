<script setup lang="ts">
const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')

const themeIconRef = ref()
const isHover = useElementHover(themeIconRef)
const displayLightIcon = computed(() => (isHover.value && isDark.value) || (!isHover.value && !isDark.value))

function switchTheme(e: MouseEvent) {
  const dark = unref(isDark)

  // @ts-expect-error startViewTransition 是新的API
  if (!document?.startViewTransition) {
    colorMode.value = (dark ? 'light' : 'dark')
    return
  }

  // @ts-expect-error startViewTransition 是新的API
  const transition = document?.startViewTransition(async () => {
    colorMode.value = (dark ? 'light' : 'dark')
    await nextTick()
  })
  const x = e.clientX
  const y = e.clientY
  const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))
  transition?.ready?.then(() => {
    const clipPath = [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${radius}px at ${x}px ${y}px)`,
          ]
    document?.documentElement?.animate(
      {
        clipPath: dark ? clipPath : [...clipPath].reverse(),
      },
      {
        duration: 500,
        easing: 'ease-in',
        pseudoElement: dark ? '::view-transition-new(root)' : '::view-transition-old(root)',
      },
    )
  })
}
</script>

<template>
  <div class="nuxt-app h-screen w-screen bg-slate-50 dark:bg-slate-800">
    <nav class="h-16 flex items-center justify-end border-b-2 border-gray-1 border-solid px-8 dark:border-slate-700">
      <div ref="themeIconRef" class="h-9 w-9 flex-col btn-container" @click="switchTheme">
        <Transition name="list">
          <span v-show="displayLightIcon" class="i-ic:outline-light-mode text-2xl" />
        </Transition>
        <Transition name="list">
          <span v-show="!displayLightIcon" class="i-ic:outline-dark-mode text-2xl" />
        </Transition>
      </div>
    </nav>
    <main class="nuxt-app__main overflow-y-auto">
      <NuxtPage />
    </main>
  </div>
</template>

<style lang="scss" scoped>
.nuxt-app {
  .list-enter-active,
  .list-leave-active {
    transition: all 0.3s ease;
  }
  .list-enter-from {
    opacity: 0;
    transform: translateY(-30px);
  }
  .list-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }

  &__main {
    height: calc(100vh - 4rem);
  }
}
</style>
