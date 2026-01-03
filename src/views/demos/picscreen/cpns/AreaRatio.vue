<script setup lang="ts">
import type { EChartsOption } from 'echarts'

const props = defineProps<{
  data: any[]
}>()

function getOption(data: any[]): EChartsOption {
  const xData: string[] = []
  const valueData: any[] = []

  data.forEach((item) => {
    xData.push(item.city)
    valueData.push({
      value: item.percent,
      itemStyle: {
        color: item.color,
      },
    })
  })

  return {
    grid: {
      left: 50,
      right: 50,
    },
    xAxis: {
      type: 'category',
      data: xData,
      axisLabel: { // 坐标轴刻度标签
        show: true,
        color: '#fff',
        fontSize: 10,
        align: 'center',
      },
      axisTick: {
        show: false,
      },
      splitLine: { // 坐标轴分割线
        show: true,
        lineStyle: {
          color: 'rgba(255, 255, 255, 0.3)',
        },
      },
    },
    yAxis: {
      name: '单位(%)',
      min: 0, // 最小值
      max: 100, // 最大值
      interval: 20,
      nameTextStyle: {
        color: '#a1a6b2',
        padding: [0, 0, 10, 0],
      },
      type: 'value',
      axisLabel: { // 坐标轴刻度标签
        show: true,
        color: '#a1a6b2',
        fontSize: 12,
      },
      splitLine: { // 坐标轴分割线
        show: true,
        lineStyle: {
          color: 'rgba(255, 255, 255, 0.3)',
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
        type: 'bar',
        barWidth: 30,

      },

    ],
  }
}

const option = computed<EChartsOption>(() => {
  return getOption(props.data)
})
</script>

<template>
  <ScreenPanel title="全市写字楼租售面积比">
    <BaseChart :option="option" />
  </ScreenPanel>
</template>
