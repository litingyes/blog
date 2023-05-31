<script setup lang="ts">
const tagColors = ['#ef4444', '#f97316', '#f59e0b', '#eab308', '#84cc16', '#22c55e', '#10b981', '#14b8a6', '#06b6d4', '#0ea5e9', '#3b82f6', '#6366f1', '#8b5cf6', '#a855f7', '#d946ef', '#ec4899', '#f43f5e']
const list = await queryContent().find()
const tagMap = computed(() => {
  const map = new Map()
  if (!list)
    return map
  list.forEach((article) => {
    const tags = article.tags
    if (!tags) {
      if (map.has('_')) {
        map.get('_').list.push(article)
      }
      else {
        const color = tagColors[Math.floor(Math.random() * tagColors.length)]
        map.set('_', { bgColor: color, list: [article] })
      }
    }
    else {
      tags.forEach((tag: string) => {
        if (map.has(tag)) {
          map.get(tag).list.push(article)
        }
        else {
          const color = tagColors[Math.floor(Math.random() * tagColors.length)]
          map.set(tag, { bgColor: color, list: [article] })
        }
      })
    }
  })
  return map
})

const currentKey = ref(null)
const displayList = computed(() => {
  if (!currentKey.value) {
    return list
  }
  else {
    return list.filter((article) => {
      if (currentKey.value === '_')
        return !article.tags
      else
        return article.tags.includes(currentKey.value)
    })
  }
})

const dayjs = useDayjs()
</script>

<template>
  <div class="h-full overflow-x-hidden pt-16 scrollbar-primary">
    <div class="mx-auto px-8 py-4 prose prose-slate dark:prose-invert">
      <ul class="flex flex-wrap list-none items-center gap-2">
        <li key="_all" class="cursor-pointer rounded-lg px-2 drop-shadow" :style="{ background: tagColors[0] }" @click="currentKey = null">
          <span>全部</span>
          <span>({{ list?.length }})</span>
        </li>
        <li v-for="key in tagMap?.keys()" :key="key" class="cursor-pointer rounded-lg px-2 mix-blend-hard-light shadow" :style="{ background: tagMap.get(key).bgColor }" @click="currentKey = key">
          <span>{{ key === '_' ? '其他' : key }}</span>
          <span>({{ tagMap.get(key).list.length }})</span>
        </li>
      </ul>
      <hr>
      <ul class="list-none">
        <li v-for="article in displayList" :key="article._path" class="flex items-center gap-1 rounded-lg p-4 transition hover:shadow-xl">
          <div class="m-0 flex flex-1 flex-col justify-center">
            <h2 class="m-0 overflow-hidden text-ellipsis text-xl font-bold">
              {{ article.title }}
            </h2>
            <p class="m-0 overflow-hidden text-ellipsis text-lg text-slate-500">
              {{ article.description }}
            </p>
          </div>
          <div class="m-0 w-32 flex flex-col items-end justify-center pr-1">
            <span class="text-slate-500">{{ dayjs(article.postDate).format('ddd YYYY-MM-DD') }}</span>
            <NuxtLink class="relative flex items-center text-slate-500 no-underline hover:text-slate-950 after:content-[''] hover:after:(w-full border-b-2) dark:hover:text-slate-50" after="absolute inset-y-0 left-0 w-0 transition-all  border-black dark:border-white" :to="article._path">
              <span>跳转阅读</span>
              <span class="i-ic:round-keyboard-arrow-right text-xl" />
            </NuxtLink>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
