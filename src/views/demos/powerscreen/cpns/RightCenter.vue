<script setup lang="ts">
import type { EChartsOption } from 'echarts'
import type { IBarData } from './options/types'
import { getBarOption } from './options/bar.option'

interface IProps {
  data: IBarData[]
}

const props = defineProps<IProps>()
const option = computed<EChartsOption>(() => getBarOption(props.data))
</script>

<template>
  <div class="screen-right-center w-full h-315px mt-6">
    <div class="inner  w-full h-full">
      <BaseChart :option="option" />
    </div>
  </div>
</template>

<style scoped>
.screen-right-center {
  background: url('@/assets/images/bg_right_center.svg') no-repeat;
  background-size: contain;
}
</style>
