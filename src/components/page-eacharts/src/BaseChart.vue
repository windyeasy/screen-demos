<script lang="ts" setup>
import type { EChartsOption } from 'echarts'
import useEcharts from './composables/useEcharts'

interface IProps {
  width?: string | number
  height?: string | number
  option: EChartsOption
}

const props = defineProps<IProps>()

const chartRef = ref<HTMLDivElement>()
const chart = ref<echarts.ECharts | null>(null)

// echarts
onMounted(() => {
  const { echartInstance } = useEcharts(chartRef.value!)
  // 赋值用于通过组件获取
  chart.value = echartInstance
  watchEffect(() => {
    if (echartInstance)
      echartInstance.setOption(props.option)
  })
})

// style
function numberToPx(value: number | string | undefined) {
  if (typeof value === 'number')
    return `${value}px`

  return value
}

const style = computed(() => {
  return {
    width: numberToPx(props.width) || '100%',
    height: numberToPx(props.height) || '100%',
  }
})

defineExpose({
  getEchatsInstance() {
    return chart.value
  },
})
</script>

<template>
  <div ref="chartRef" :style="style" />
</template>
