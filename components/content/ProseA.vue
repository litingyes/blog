<script setup lang="ts">
defineProps({
  href: {
    type: String,
    default: '',
  },
  target: {
    type: String,
    default: '__blank',
    required: false,
  },
})
</script>

<template>
  <NuxtLink :href="href" :target="target">
    <slot />
  </NuxtLink>
</template>
