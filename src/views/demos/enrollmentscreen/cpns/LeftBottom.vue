<script setup lang="ts">
import type { EChartsOption } from 'echarts'
import type { IEnrollmentComparison, IMaleToFemaleRatio } from '../config/types'

const props = defineProps<{
  data1: IEnrollmentComparison[] // 现场报名对比
  data2: IMaleToFemaleRatio[] // 男女比例
}>()

function getOption1(data: IEnrollmentComparison[]): EChartsOption {
  return {
    tooltip: {
      trigger: 'item',
    },
    legend: {
      top: '5%',
      width: 100,
      left: 'left',
      itemGap: 10,
      itemWidth: 10,
      itemHeight: 10,
      textStyle: {
        color: '#fff',
      },
    },
    series: [
      {
        name: '现场报名对比',
        type: 'pie',
        radius: ['40%', '70%'],
        label: {
          show: true,
          position: 'outer',
          color: '#fff',
          formatter: '{b}: {c}',
        },
        labelLine: {
          show: true,
        },
        data: data.map((item) => {
          return {
            value: item.pepleNumber,
            name: item.name,
            itemStyle: {
              color: item.color,
            },
          }
        }),
      },
    ],
  }
}

const option1 = computed(() => {
  return getOption1(props.data1)
})

function getOption2(data: IMaleToFemaleRatio[]): EChartsOption {
  const maleData: number[] = []
  const femaleData: number[] = []
  const xData: string[] = []
  data.forEach((item) => {
    maleData.push(item.maleNumber)
    femaleData.push(item.femaleNumber)
    xData.push(item.date)
  })
  return {
    grid: {
      bottom: 10,
    },
    legend: {
      width: 100,
      top: 10,
      itemGap: 10,
      itemWidth: 16,
      itemHeight: 16,
      textStyle: {
        color: '#fff',
      },
    },
    xAxis:
      {
        type: 'category',
        axisLabel: { // 坐标轴刻度标签
          show: true,
          color: '#fff',
          fontSize: 10,
          align: 'center',
        },
        data: xData,
        axisTick: {
          show: false,
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

    },
    series: [
      {
        name: '男',
        type: 'bar',
        barWidth: 15,
        label: {
          show: true,
          color: '#fff',
          position: 'outside',
        },
        labelLine: {
          show: true,
        },
        itemStyle: {
          color: '#33c6e4',
        },
        data: maleData,
      },
      {
        name: '女',
        smooth: true,
        type: 'line',
        itemStyle: {
          color: '#e88d55',
        },
        label: {
          show: true,
          color: '#fff',
        },
        labelLine: {
          show: true,
        },
        data: femaleData,
      },
    ],
  }
}

const option2 = computed(() => {
  return getOption2(props.data2)
})
</script>

<template>
  <div class="left-botttom grid grid-cols-2 gap-5 h-full">
    <ScreenPanel2 title="现场报名对比">
      <BaseChart :option="option1" />
    </ScreenPanel2>
    <ScreenPanel2 title="新生男女比例">
      <BaseChart :option="option2" />
    </ScreenPanel2>
  </div>
</template>
