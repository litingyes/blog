<script lang="ts" setup>
import consola from 'consola'

interface Props {
  code?: string
  language?: string | null
  filename?: string | null
  highlights?: number[]
  meta?: string | null
}

const props = withDefaults(defineProps<Props>(), {
  code: '',
  language: null,
  filename: null,
  highlights: () => [],
  meta: null,
})

const proseCodeRef = ref()
const isHover = useElementHover(proseCodeRef)

const toast = useToast()
const { copy, copied } = useClipboard({ source: props.code, legacy: true })
function copyCode() {
  try {
    copy(props.code)
  }
 catch (e) {
    consola.error(e)
    toast.add({ title: '代码复制失败' })
    return
  }
  toast.add({ title: '代码复制成功', timeout: 2000 })
}
</script>

<template>
  <div ref="proseCodeRef" class="relative border-1 border-slate-200 rounded-lg border-solid transition dark:shadow-slate-900 hover:shadow-lg">
    <div class="absolute right-4 top-2 text-lg text-slate-500">
      <span v-show="!isHover" class="">{{ props.language }}</span>
      <span v-show="isHover && !copied" class="i-fluent:copy-16-regular cursor-pointer hover:text-slate-900 dark:hover:text-slate-200" @click="copyCode" />
      <span v-show="isHover && copied" class="i-fluent:copy-16-filled" />
    </div>
    <slot />
  </div>
</template>

<style>
pre code .line {
  display: block;
  min-height: 1rem;
}
</style>
