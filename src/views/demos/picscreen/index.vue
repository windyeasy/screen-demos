<script setup lang="ts">
import useScreenScale from '@/composables/useScreenScale'

useScreenScale()
</script>

<template>
  <div class="wrapper flex flex-col">
    <ScreenHeader title="上海摄网大数据统计" />
    <main class="screen-main flex flex-col  flex-1 mt-6 w-full px-6 box-border">
      <div class="main-top flex  w-full flex-1 ">
        <div class="main-top-left flex-1 h-full">
          <ScreenPanel title="全市写字楼空置率分析" />
        </div>
        <div class="main-top-center flex-1 h-full">
          <ScreenPanel title="入住上市企业数量" />
        </div>
        <div class="main-top-right flex-1 h-full">
          <ScreenPanel title="全市当地注册率" />
        </div>
      </div>
      <div class="main-bottom flex  flex-1 mt-8 mb-10">
        <div class="main-bottom-left flex-1 h-full">
          <ScreenPanel title="入驻世界500强企业数量" />
        </div>
        <div class="main-bottom-right flex-1 h-full">
          <ScreenPanel title="全市写字楼租售面积比" />
        </div>
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
</style>
