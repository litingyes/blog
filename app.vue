<script setup lang="ts">
const colorMode = useColorMode()

function switchTheme(e: MouseEvent) {
  const isDark = colorMode.value === 'dark'

  // @ts-expect-error startViewTransition 是新的API
  if (!document?.startViewTransition) {
    colorMode.value = (isDark ? 'light' : 'dark')
    return
  }

  // @ts-expect-error startViewTransition 是新的API
  const transition = document?.startViewTransition(async () => {
    colorMode.value = (isDark ? 'light' : 'dark')
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
        clipPath: isDark ? clipPath : [...clipPath].reverse(),
      },
      {
        duration: 500,
        easing: 'ease-in',
        pseudoElement: isDark ? '::view-transition-new(root)' : '::view-transition-old(root)',
      },
    )
  })
}
</script>

<template>
  <div class="default-layout w-screen h-screen bg-slate-50 dark:bg-slate-800">
    <nav class="h-16 border-solid border-gray-1 flex justify-end items-center px-8 border-b-2">
      <span v-show="$colorMode.value === 'light'" class="text-2xl cursor-pointer i-ic:outline-light-mode" @click="switchTheme" />
      <span v-show="$colorMode.value === 'dark'" class="text-2xl cursor-pointer i-ic:outline-dark-mode" @click="switchTheme" />
    </nav>
    <main>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </main>
  </div>
</template>
