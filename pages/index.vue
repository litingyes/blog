import { NuxtPicture } from '../.nuxt/components';
<script setup lang="ts">
</script>

<template>
  <div id="page-index" class="relative h-full w-screen flex items-center justify-center overflow-y-auto">
    <div class="md:3/5 mt-4 w-9/10 flex justify-center overflow-hidden rounded-xl bg-slate-200 drop-shadow-lg transition-transform lg:w-192 sm:w-4/5 hover:scale-[1.01] dark:bg-slate-700">
      <NuxtPicture class="hidden sm:block sm:w-1/2" src="/images/homePersonal.jpg" sizes="sm:40vw md:288 lg:384" format="webp" />
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
              <span class="i-ri:twitter-line" />
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
</template>
