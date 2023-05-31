<script setup lang="ts">
const dayjs = useDayjs()
</script>

<template>
  <div class="h-full overflow-x-hidden scrollbar-primary">
    <div class="relative h-full w-screen flex items-center justify-center">
      <div class="md:3/5 mt-4 w-9/10 flex justify-center overflow-hidden rounded-xl bg-slate-200 drop-shadow-lg transition-transform lg:w-192 sm:w-4/5 hover:scale-[1.01] dark:bg-slate-700">
        <NuxtImg class="hidden sm:block sm:w-1/2" src="/images/homePersonal.jpg" sizes="sm:40vw md:288 lg:384" format="webp" />
        <div class="p-2 prose sm:w-1/2 lg:p-8 md:p-6 sm:p-4">
          <div class="text-center text-xl font-semibold">
            文侯
          </div>
          <ul class="h-8 flex justify-center !list-none sm:gap-1 !p-0">
            <NuxtLink to="https://github.com/liting-yes" target="__black">
              <li class="m-0 h-8 w-8 p-0 hover:bg-slate-300 btn-container dark:hover:bg-slate-600">
                <span class="i-line-md:github-loop" />
              </li>
            </NuxtLink>
            <NuxtLink to="https://juejin.cn/user/2217072231984919" target="__black">
              <li class="m-0 h-8 w-8 p-0 hover:bg-slate-300 btn-container dark:hover:bg-slate-600">
                <span class="i-tabler:brand-juejin" />
              </li>
            </NuxtLink>
            <NuxtLink to="https://space.bilibili.com/472116791" target="__black">
              <li class="m-0 h-8 w-8 p-0 hover:bg-slate-300 btn-container dark:hover:bg-slate-600">
                <span class="i-custom:blibli" />
              </li>
            </NuxtLink>
            <NuxtLink to="https://twitter.com/liting_yes" target="__black">
              <li class="m-0 h-8 w-8 p-0 hover:bg-slate-300 btn-container dark:hover:bg-slate-600">
                <span class="i-line-md:twitter" />
              </li>
            </NuxtLink>
            <UTooltip text="2972188187">
              <li class="m-0 h-8 w-8 p-0 hover:bg-slate-300 btn-container dark:hover:bg-slate-600">
                <span class="i-ri:qq-line" />
              </li>
            </UTooltip>
          </ul>
          <p>
            中国湖南邵阳人，毕业于山东大学（2019级本科）
          </p>
          <p>当前主要学习方向为前端开发，包括但不限于前端工程化、数据可视化、Rust，业余也在学习后端开发和UI设计</p>
          <p>不善言辞但渴望爱情的单身狗 🐶</p>
        </div>
      </div>
    </div>
    <ul class="mx-auto mb-8 w-full px-2 py-4 md:w-6xl">
      <ContentList v-slot="{ list }">
        <li v-for="article in list" :key="article._path" class="h-32 flex items-center justify-between border-b-1 py-4 first:border-t-1">
          <div class="flex flex-col justify-center">
            <span v-if="article.postDate" class="font-bold">{{ dayjs(article.postDate).format('dddd YYYY-MM-DD') }}</span>
            <span class="text-slate-500">约{{ Math.ceil(article.totalCount) }}字</span>
            <span class="text-slate-500">阅读耗时{{ Math.ceil(article.readMinutes) }}分钟</span>
          </div>
          <div class="flex flex-1 flex-col justify-center gap-2 px-16">
            <h2 class="overflow-hidden text-ellipsis text-xl font-bold">
              {{ article.title }}
            </h2>
            <p class="overflow-hidden text-ellipsis text-lg text-slate-500">
              {{ article.description }}
            </p>
          </div>
          <NuxtLink class="flex items-center text-slate-500 hover:text-slate-950 dark:hover:text-slate-50" :to="article._path">
            <span class="">跳转阅读</span>
            <span class="i-ic:round-keyboard-arrow-right text-xl" />
          </NuxtLink>
        </li>
      </ContentList>
    </ul>
  </div>
</template>
