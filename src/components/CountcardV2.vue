<script setup lang="ts">
defineProps<{
  count: number
  title: string
}>()
</script>

<template>
  <div class="count-card-v2 flex">
    <div class="icon w-[60px] h-[60px]">
      <slot />
    </div>
    <div class="count-info ml-2">
      <div class="count text-white text-xl font-bold">
        {{ count }}
      </div>
      <div class="title text-sm text-[#5d73a0] mt-2">
        {{ title }}
      </div>
    </div>
  </div>
</template>
