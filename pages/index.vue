<script setup lang="ts">
</script>

<template>
  <div class="flex items-center justify-center h-full">
    <div class="flex justify-center overflow-hidden bg-slate-200 hover:scale-[1.01] transition-transform drop-shadow-lg dark:bg-slate-700 rounded-xl">
      <NuxtImg src="/images/homePersonal.jpg" sizes="sm:208 md:288 lg:384" />
      <div class="lg:w-96 lg:p-8 md:p-6 sm:w-56 sm:p-4 md:w-72 prose">
        <div class="text-center font-semibold text-xl">
          文侯
        </div>
        <ul class="!list-none flex justify-center !p-0 !m-0 gap-4 h-8">
          <li class="w-4 p-0 m-0">
            <NuxtLink to="https://github.com/liting-yes" target="__black">
              <span class="i-line-md:github-loop" />
            </NuxtLink>
          </li>
          <li class="w-4 p-0 m-0">
            <NuxtLink to="https://juejin.cn/user/2217072231984919" target="__black">
              <span class="i-tabler:brand-juejin" />
            </NuxtLink>
          </li>
          <li class="w-4 p-0 m-0">
            <NuxtLink to="https://space.bilibili.com/472116791" target="__black">
              <span class="i-custom:blibli" />
            </NuxtLink>
          </li>
          <li class="w-4 p-0 m-0">
            <NuxtLink to="https://twitter.com/liting_yes" target="__black">
              <span class="i-ri:twitter-line" />
            </NuxtLink>
          </li>
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
