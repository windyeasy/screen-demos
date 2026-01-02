<script setup lang="ts">
import type { EChartsOption } from 'echarts'
import type { ILineData } from './options/types'
import { getLineOption } from './options/line.option'

interface IProps {
  data: ILineData[]
}

const props = defineProps<IProps>()
const option = computed<EChartsOption>(() => getLineOption(props.data))
</script>

<template>
  <div class="screen-left-bottom mt-10 w-full h-431px">
    <div class="inner  w-full h-full">
      <BaseChart :option="option" />
    </div>
  </div>
</template>

<style scoped>
.screen-left-bottom {
  background: url('@/assets/images/bg_left_bottom.svg') no-repeat;
  background-size: contain;
}
</style>
