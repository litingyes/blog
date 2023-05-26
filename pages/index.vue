<script setup lang="ts">
</script>

<template>
  <div id="page-index" class="flex items-center justify-center w-screen h-full relative">
    <div class="flex justify-center sm:w-4/5 md:3/5 overflow-hidden bg-slate-200 hover:scale-[1.01] transition-transform drop-shadow-lg dark:bg-slate-700 rounded-xl lg:w-192 w-9/10">
      <NuxtImg class="w-1/2" src="/images/homePersonal.jpg" sizes="sm:40vw md:288 lg:384" />
      <div class="w-1/2 lg:p-8 md:p-6 sm:p-4 p-2 prose">
        <div class="text-center font-semibold text-xl">
          文侯
        </div>
        <ul class="flex justify-center !list-none !p-0 h-8 sm:gap-1">
          <NuxtLink to="https://github.com/liting-yes" target="__black">
            <li class="btn-container h-8 w-8 p-0 m-0 hover:bg-slate-300 dark:hover:bg-slate-600">
              <span class="i-line-md:github-loop" />
            </li>
          </NuxtLink>
          <NuxtLink to="https://juejin.cn/user/2217072231984919" target="__black">
            <li class="btn-container h-8 w-8 p-0 m-0 hover:bg-slate-300 dark:hover:bg-slate-600">
              <span class="i-tabler:brand-juejin" />
            </li>
          </NuxtLink>
          <NuxtLink to="https://space.bilibili.com/472116791" target="__black">
            <li class="btn-container h-8 w-8 p-0 m-0 hover:bg-slate-300 dark:hover:bg-slate-600">
              <span class="i-custom:blibli" />
            </li>
          </NuxtLink>
          <NuxtLink to="https://twitter.com/liting_yes" target="__black">
            <li class="btn-container h-8 w-8 p-0 m-0 hover:bg-slate-300 dark:hover:bg-slate-600">
              <span class="i-ri:twitter-line" />
            </li>
          </NuxtLink>
          <UTooltip text="2972188187">
            <li class="btn-container h-8 w-8 p-0 m-0 hover:bg-slate-300 dark:hover:bg-slate-600">
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
