<script setup lang="ts">
import useScreenScale from '@/composables/useScreenScale'
import LeftTop from './cpns/LeftTop.vue'

// todo: 可以配置title， cover，直接通过store得到demo的信息不需要每次都在home/data.ts里面写入
useScreenScale()
</script>

<template>
  <div class="wrapper flex flex-col">
    <header class="screen-header w-full h-56px" />
    <main class="screen-main grid grid-cols-7 gap-4 flex-1  w-full">
      <div class="screen-left col-span-2 pl-3">
        <LeftTop />
      </div>
      <div class="screen-center col-span-3 bg-pink">
        center
      </div>
      <div class="screen-right col-span-2 bg-blue">
        right
      </div>
    </main>
  </div>
</template>

<style scoped>
.wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background: url('@/assets/images/bg.png') no-repeat;
  background-size: cover;
}

.screen-header {
    background: url('@/assets/images/bg_header.svg') no-repeat;
    background-size: cover;
    margin: 20px 0 30px;
}
</style>
