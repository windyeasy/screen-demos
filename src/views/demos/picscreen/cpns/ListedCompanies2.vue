<script setup lang="ts">
import type { EChartsOption } from 'echarts'

const props = defineProps<{
  data: any[]
}>()

function getOption(data: any[]): EChartsOption {
  const xData: string[] = []
  const valueData: number[] = []
  let total = 0
  data.forEach((item) => {
    xData.push(item.city)
    valueData.push(item.number)
    total += item.number
  })

  return {
    grid: {
      left: 50,
      right: 50,
    },
    title: {
      text: `500强企业数:{totalStyle|${total}}家`,
      right: '10%',
      textStyle: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'normal',
        rich: {
          totalStyle: {
            fontSize: 26,
            color: '#f3d032',
            width: 36,
            align: 'center',
            fontWeight: 'bold',
          },
        },
      },
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
    },
    yAxis: {
      name: '单位(个)',
      min: 0, // 最小值
      max: 10, // 最大值
      interval: 2,
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
        type: 'bar',
        barWidth: 20,
        itemStyle: {
          color: '#f3d032',
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
  <ScreenPanel title="入驻世界500强企业数量">
    <BaseChart :option="option" />
  </ScreenPanel>
</template>
