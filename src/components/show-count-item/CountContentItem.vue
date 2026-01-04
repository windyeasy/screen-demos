<script setup lang="ts">
defineProps<{
  title: string
  number: number | string
}>()
</script>

<template>
  <div class="count-content-item h-full  flex-1 text-white text-sm flex flex-col justify-center items-center">
    <div class="sub-title">
      {{ title }}
    </div>
    <div class="number text-[#92da94] text-xl font-bold">
      {{ number }}
    </div>
  </div>
</template>
