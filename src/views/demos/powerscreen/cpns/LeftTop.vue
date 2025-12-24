<script setup lang="ts">
import type { EChartsOption } from 'echarts'
import type { IPieData } from './options/types'
import { getPieOption } from './options/pie.option'

interface IProps {
  data: IPieData[]
}

const props = defineProps<IProps>()
const option = computed<EChartsOption>(() => getPieOption(props.data))
</script>

<template>
  <div class="screen-left-top w-full h-460px">
    <div class="inner  w-full h-full">
      <BaseChart :option="option" />
    </div>
  </div>
</template>

<style scoped>
.screen-left-top {
  background: url('@/assets/images/bg_left-top.svg') no-repeat;
  background-size: cover;

}
</style>
