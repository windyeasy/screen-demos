<script setup lang="ts">
import { BorderBox10 } from '@kjgl77/datav-vue3'

withDefaults(defineProps<{
  title: string
  align?: 'left' | 'center' | 'right'
}>(), {
  align: 'center',
})
</script>

<template>
  <BorderBox10>
    <div class="screen-panel-inner box-border p-4 flex flex-col w-full h-full ">
      <div class="title text-xl text-white" :style="{ textAlign: align }">
        {{ title }}
      </div>
      <div class="content flex-1 mt-2 box-border">
        <slot />
      </div>
    </div>
  </BorderBox10>
</template>
