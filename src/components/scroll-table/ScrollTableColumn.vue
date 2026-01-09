<script setup lang="ts">
defineProps<{
  prop: string
  label: string
  width: string | number
}>()
</script>

<template>
  <div class="scroll-table-column">
    <slot />
  </div>
</template>
