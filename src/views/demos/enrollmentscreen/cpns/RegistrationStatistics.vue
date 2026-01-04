<script setup lang="ts">
import type { EChartsOption } from 'echarts'
import type { IRegistrationStatistics } from '../config/types'

const props = defineProps<{
  data: IRegistrationStatistics[]
}>()

function getOption(data: IRegistrationStatistics[]): EChartsOption {
  const xData: string[] = []
  const valueData: number[] = []

  data.forEach((item) => {
    xData.push(item.date)
    valueData.push(item.peopleNumber)
  })

  return {
    grid: {
      top: 30,
      left: 10,
      right: 20,
      bottom: 0,
    },
    xAxis: {
      type: 'category',
      data: xData,
      axisLine: { // 坐标轴轴线
        show: true,
        lineStyle: {
          color: 'white',
        },

      },
      axisLabel: { // 坐标轴刻度标签
        show: true,
        color: '#fff',
        fontSize: 10,
        align: 'center',
      },

      axisTick: {
        show: true,
        lineStyle: {
          color: '#fff',

        },
      },
    },
    yAxis: {
      nameTextStyle: {
        color: '#fff',
        padding: [0, 0, 10, 0],
      },
      type: 'value',
      axisLabel: { // 坐标轴刻度标签
        show: true,
        color: '#fff',
        fontSize: 12,
      },
      splitLine: { // 坐标轴分割线
        show: true,
        lineStyle: {
          color: '#051b49',
        },
      },
      // 条纹背景，偶数格和奇数格使用不同颜色
      splitArea: {
        show: true,
        areaStyle: {
          color: ['rgba(0, 0, 0, 0)', 'rgba(255, 255, 255, 0.02)'], // 偶数格 / 奇数格颜色交替
        },
      },
    },
    series: [
      {
        data: valueData,
        type: 'line',
        smooth: true,
        itemStyle: {
          color: '#00f2fe',
        },
      },
    ],
  }
}

const option = computed(() => {
  return getOption(props.data)
})
</script>

<template>
  <ScreenPanel2 title="报名人数统计">
    <BaseChart :option="option" />
  </ScreenPanel2>
</template>
