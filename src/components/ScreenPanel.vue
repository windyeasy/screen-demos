<script setup lang="ts">
import { BorderBox1 } from '@kjgl77/datav-vue3'

defineProps<{
  title: string
}>()
</script>

<template>
  <BorderBox1>
    <div class="screen-panel-inner box-border flex flex-col w-full h-full ">
      <div class="title flex pl-6 pt-7 font-bold justify-start w-full  c-[#0092d0]">
        <span class="title-icon" />
        <span class="text pl-5">{{ title }}</span>
      </div>
      <div class="content flex-1 m-4 box-border">
        <slot />
      </div>
    </div>
  </BorderBox1>
</template>

<style scoped>
  .title-icon {
    position: relative;
    &::before, &::after {
      position: absolute;
      content: '';
      width: 8px;
      height: 8px;
      border: 3px solid #00bde4;
    }
    &::before {
      border-left-color: transparent;
      border-bottom-color: transparent;
      transform: rotate(45deg);
      left: -10px;
      top: 2px;
    }
     &::after {
      border-left-color: transparent;
      border-bottom-color: transparent;
      transform: rotate(45deg);
      left: -3px;
      top: 2px;
    }
  }
</style>
