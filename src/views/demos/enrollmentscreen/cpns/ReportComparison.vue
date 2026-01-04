<script setup lang="ts">
import type { EChartsOption } from 'echarts'
import type { IAllMajorsRC, IReportComparison } from '../config/types'
import Countcard from '@/components/Countcard.vue'

const props = defineProps<{
  data: IReportComparison
}>()

function getOption(data: IAllMajorsRC[]): EChartsOption {
  const xData: string[] = []
  const valueData: number[] = []

  data.forEach((item) => {
    xData.push(item.majorName)
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
        type: 'bar',
        barWidth: 20,
        label: {
          show: true,
          position: 'top',
          color: '#fff',
        },
        itemStyle: {
          color: {
            // 渐变
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: '#00f2fe',
              },
              {
                offset: 1,
                color: '#1e97ff',
              },
            ],
          },
        },
      },
    ],
  }
}
const option = computed(() => {
  return getOption(props.data.allMajorsReportComparison)
})
</script>

<template>
  <ScreenPanel2 title="各系学院报道学生对比" align="left">
    <div class="inner w-full  flex">
      <div class="left w-60%">
        <BaseChart :option="option" />
      </div>
      <div class="right flex flex-col flex-1">
        <Countcard title="今日已报到" unit="人" :number="data.todayReportNumber" />
        <div class="pt-4" />
        <Countcard title="当前批次已报到" unit="人" :number="data.reportedNumber" />
      </div>
    </div>
  </ScreenPanel2>
</template>
