<script setup lang="ts">
defineProps<{
  percent: number
  color: string
}>()
</script>

<template>
  <div class="percentage flex items-center">
    <div class="progress-wrapper ml-2 h-20px w-[100px] flex items-center">
      <div class="progress h-10px" :style="{ width: `${percent}%`, backgroundColor: color }" />
    </div>
    <div class="text text-sm text-[#6f84ad] ml-2">
      {{ percent }}%
    </div>
  </div>
</template>

<style lang="scss" scoped>
.progress-wrapper {
  border: 2px solid #0475fa;
  padding: 2px;
  box-sizing: border-box;
}
</style>
