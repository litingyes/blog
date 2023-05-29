<script setup lang="ts">
defineProps<{ id?: string }>()
const heading = 2
const { anchorLinks } = useRuntimeConfig().public.content
const generate = anchorLinks?.depth >= heading && !anchorLinks?.exclude.includes(heading)

const nextHashStore = useNextHash()
function scrollSmooth(id: string) {
  nextHashStore.setNextHash(`#${id}`)
  document?.querySelector(`#${id}`)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
}
</script>

<template>
  <h2 :id="id">
    <a v-if="id && generate" :href="`#${id}`" @click.prevent="scrollSmooth(id)">
      <slot />
    </a>
    <slot v-else />
  </h2>
</template>
