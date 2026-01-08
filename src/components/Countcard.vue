<script setup lang="ts">
import { BorderBox9 } from '@kjgl77/datav-vue3'

withDefaults(defineProps<{
  title: string
  unit?: string
  number: number | string
  algin?: 'left' | 'center' | 'right'
}>(), {
  algin: 'left',
})
</script>

<template>
  <BorderBox9 class="px-6 py-4 box-border pb-6    text-white text-sm">
    <div class="flex flex-col h-full">
      <div class="title flex-1" :style="{ textAlign: algin }">
        {{ title }}
      </div>
      <div class="count lh-[1] text-[#93e899] pt-3 text-[34px] font-bold flex justify-end items-end">
        <div class="number ">
          {{ number }}
        </div>
        <div v-if="unit" class="unit  text-sm pl-2">
          {{ unit }}
        </div>
      </div>
    </div>
  </BorderBox9>
</template>
