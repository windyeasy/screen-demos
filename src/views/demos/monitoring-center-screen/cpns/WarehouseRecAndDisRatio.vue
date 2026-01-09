<script setup lang="ts">
import type { EChartsOption } from 'echarts'
import type { IWarehouseRecAndDisRatio } from '../config/types'

const props = defineProps<{
  data: IWarehouseRecAndDisRatio[]
}>()
function getOption(data: IWarehouseRecAndDisRatio[]): EChartsOption {
  const yData: (string | number)[] = []
  const valueData: number[] = []
  const valueData2: number[] = []
  const valueData3: number[] = []
  data.forEach((item) => {
    yData.push(item.month)
    valueData.push(item.total1)
    valueData2.push(item.total2)
    valueData3.push(item.total3)
  })

  return {
    grid: {
      bottom: 20,
    },

    xAxis: {
      type: 'value',
      splitLine: { // 坐标轴分割线
        show: false,
      },
      axisLabel: { // 坐标轴刻度标签
        show: true,
        color: '#fff',
        fontSize: 12,
      },
    },
    yAxis: {
      type: 'category',
      data: yData,
      splitLine: { // 坐标轴分割线
        show: false,
      },
      axisLabel: { // 坐标轴刻度标签
        show: true,
        color: '#fff',
        fontSize: 12,
      },
      axisTick: {
        show: false,
      },
      axisLine: { // 坐标轴轴线
        show: false,
      },
    },
    legend: {
      top: '5%',
      left: 'center',
      icon: 'rect',
      itemGap: 10,
      itemWidth: 16,
      itemHeight: 16,
      textStyle: {
        color: '#fff',
      },
    },
    series: [
      {
        // 大理宝象库
        data: valueData,
        name: '大理宝象库',
        type: 'bar',
        barWidth: 15,
        stack: 'total',
        itemStyle: {
          color: '#0274fe',
        },
      },
      {
        // 大理粮油库
        type: 'bar',
        name: '大理粮油库',
        data: valueData2, // 背景的统一最大值
        stack: 'total',
        barWidth: 15,
        itemStyle: {
          color: '#0159fe', // 背景填充透明
        },
      },
      {
        // 王家营库
        type: 'bar',
        name: '王家营库',
        data: valueData3, // 背景的统一最大值
        stack: 'total',
        barWidth: 15,
        itemStyle: {
          color: '#00c6fb', // 背景填充透明
        },
      },
    ],
  }
}
const option = computed<EChartsOption>(() => {
  return getOption(props.data)
})
</script>

<template>
  <ScreenPanel3 title="各仓库月收发量占比">
    <BaseChart :option="option" />
  </ScreenPanel3>
</template>
