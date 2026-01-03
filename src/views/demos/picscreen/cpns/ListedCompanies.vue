<script setup lang="ts">
import type { EChartsOption } from 'echarts'

const props = defineProps<{
  data: any[]
}>()

function getOption(data: any[]): EChartsOption {
  const yData: string[] = []
  const valueData: any[] = []
  const valueData2: any[] = []
  data.forEach((item) => {
    yData.push(item.city)
    valueData.push({
      value: item.number,
      itemStyle: {
        color: item.color,
      },
    })
    valueData2.push({
      value: 100,
      itemStyle: {
        color: 'transparent', // 背景填充透明
        borderColor: item.color,
      },
    })
  })

  return {
    grid: {
      top: 20,
      bottom: 20,
      left: 60,
      right: 60,
    },
    xAxis: {
      type: 'value',
      splitLine: { // 坐标轴分割线
        show: false,
      },
      axisLabel: { // 坐标轴刻度标签
        show: false,
        color: '#fff',
        fontSize: 12,
      },
    },
    yAxis: [{
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
    }, {
      type: 'category',
      data: valueData,

      position: 'right',
      splitLine: { // 坐标轴分割线
        show: false,
      },

      axisLabel: { // 坐标轴刻度标签
        show: true,
        fontSize: 12,
        formatter: '{value}个',
        color: '#3ca0c6',
      },
      axisTick: {
        show: false,
      },
      axisLine: { // 坐标轴轴线
        show: false,
      },

    }],
    series: [
      {
        data: valueData,
        type: 'bar',
        barWidth: 15,
        itemStyle: {
          borderRadius: 10,
          color: '#5891f6',
        },
      },
      {
      // 背景框
        type: 'bar',
        data: valueData2, // 背景的统一最大值
        barGap: '-100%', // 背景和实际柱子重叠
        barWidth: 15,
        itemStyle: {
          color: 'transparent', // 背景填充透明
          borderColor: '#5891f6', // 边框颜色
          borderWidth: 2,
          borderRadius: 5, // 圆角
        },
        silent: true, // 背景柱子不响应鼠标
      },
    ],
  }
}

const option = computed<EChartsOption>(() => {
  return getOption(props.data)
})
</script>

<template>
  <ScreenPanel title="入驻上市企业数量">
    <BaseChart :option="option" />
  </ScreenPanel>
</template>
