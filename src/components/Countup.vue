<script setup lang="ts">
import { CountUp } from 'countup.js'
import type {CountUpOptions} from "countup.js"

const props = defineProps<{
  value?: number,
  options?: CountUpOptions
}>()

const countRef = ref<HTMLSpanElement>()
onMounted(() => {
  watchEffect(() => {
    const value =  props.value || 0
    new CountUp(countRef.value!, value, {
      decimalPlaces: 1,
      duration: 2.5,
      useGrouping: true,
      ...props.options
    }).start()
  })
})
</script>

<template>
  <span ref="countRef">
    {{ value }}
  </span>
</template>
