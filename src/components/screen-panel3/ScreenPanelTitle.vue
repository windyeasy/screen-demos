<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div class="title flex">
    <div class="title-left flex-1 flex items-center">
      <div class="i-carbon:chevron-right text-#05beff" />
      <div class="title-text text-white text-lg pl-2">
        {{ title }}
      </div>
    </div>
    <div class="title-right flex-1">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .title-text {
    position: relative;
    display: flex;
    padding-bottom: 10px;
    box-sizing: border-box;

    &::after {
      position: absolute;
      content: '';
      width: 100%;
      height: 2px;
      padding-right: 20px;
      background:  linear-gradient(to right, #162c51 1%, #05beff 98%);
      bottom: 0;
    }
  }
</style>
