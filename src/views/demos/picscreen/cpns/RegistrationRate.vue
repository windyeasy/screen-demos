<script setup lang="ts">
import type { EChartsOption } from 'echarts'

const props = defineProps<{
  data: any[]
}>()

function getOption(data: any[]): EChartsOption {
  const xData: string[] = []
  const valueData: number[] = []
  const lineData: number[] = []
  data.forEach((item) => {
    xData.push(item.year)
    valueData.push(item.number)
    lineData.push(item.percent)
  })

  return {
    grid: {
      left: 50,
      right: 50,
      // bottom: 40,
      top: 80,
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

    yAxis: [
      {
        name: '单位(个)',
        nameTextStyle: {
          color: '#a1a6b2',
          padding: [0, 0, 10, -16],
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
      {
        position: 'right',
        type: 'value',
        nameTextStyle: {
          color: '#a1a6b2',
          padding: [0, 0, 10, -16],
        },

        axisLabel: { // 坐标轴刻度标签
          show: true,
          color: '#a1a6b2',
          fontSize: 12,
          formatter: '{value}%',
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
    ],

    series: [
      {

        data: valueData,
        type: 'bar',
        barWidth: 18,
        yAxisIndex: 0,
        name: '企业数',

        itemStyle: {
          color: '#8abd54',
          borderRadius: [8, 8, 0, 0],

        },
      },
      {
        data: lineData,
        type: 'line',
        smooth: true,

        // 可以配合legend使用
        name: '注册率',
        // 对应使用的yAxis项
        yAxisIndex: 1,
        itemStyle: {
          color: '#0398bd',
          borderRadius: [8, 8, 0, 0],
        },
      },
    ],
    legend: [{
      top: 10,
      left: '40%',
      data: ['企业数'],
      icon: 'rect',
      textStyle: {
        color: '#fff',
      },
    }, {
      top: 10,
      left: '54%',
      data: ['注册率'],
      textStyle: {
        color: '#fff',
      },
    }],
  }
}

const option = computed<EChartsOption>(() => {
  return getOption(props.data)
})
</script>

<template>
  <ScreenPanel title="全市当地注册率">
    <BaseChart :option="option" />
  </ScreenPanel>
</template>
