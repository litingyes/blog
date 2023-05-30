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
    colorMode.preference = (dark ? 'light' : 'dark')
    return
  }

  // @ts-expect-error startViewTransition 是新的API
  const transition = document?.startViewTransition(async () => {
    colorMode.preference = (dark ? 'light' : 'dark')
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
  <div class="nuxt-app h-screen w-screen bg-slate-50 text-slate-950 dark:bg-slate-800 dark:text-slate-50">
    <nav class="fixed z-10 h-16 w-full flex items-center justify-between border-b-2 border-gray-1 border-solid px-8 backdrop-blur-md dark:border-slate-700">
      <NuxtLink to="/">
        <span class="i-fa-solid:feather-alt text-2xl sm:text-3xl" />
      </NuxtLink>
      <div class="flex items-center gap-2">
        <NuxtLink class="h-9 w-9 btn-container" to="/rss.xml" target="__blank">
          <span class="i-ic:round-rss-feed text-2xl" />
        </NuxtLink>
        <div ref="themeIconRef" class="h-9 w-9 flex-col btn-container" @click="switchTheme">
          <TransitionGroup name="list">
            <span v-show="displayLightIcon" key="light" class="i-ic:outline-light-mode text-2xl" />
            <span v-show="!displayLightIcon" key="dark" class="i-ic:outline-dark-mode text-2xl" />
          </TransitionGroup>
        </div>
      </div>
    </nav>
    <main class="nuxt-app__main h-full">
      <NuxtLoadingIndicator />
      <NuxtPage />
      <UNotifications class="w-full sm:w-96" />
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
}
</style>
