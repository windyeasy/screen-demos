<script setup lang="ts">
import type { EChartsOption } from 'echarts'
import type { ISendAndReceiveInfo, SendAndReceiveTrendItem } from '../config/types'

const props = defineProps<{
  data: ISendAndReceiveInfo
}>()
function getOption(data: SendAndReceiveTrendItem[]): EChartsOption {
  const xData: string[] = []
  const valueData: number[] = []

  data.forEach((item) => {
    xData.push(item.month)
    valueData.push(item.number)
  })

  return {
    grid: {
      left: 10,
      right: 20,
      bottom: 30,
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
      name: '万吨',
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
        barWidth: 15,
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
  return getOption(props.data.sendAndReceiveTrend)
})
</script>

<template>
  <ScreenPanel3 title="平台年收发总量">
    <div class="inner flex flex-col h-full box-border">
      <div class="total flex justify-end items-end lh-[1]">
        <div class="total-number text-[50px]  font-bold text-[#03c2fe] flex">
          <Countup :value="data.sendAndReceiveTotal" :options="{ decimalPlaces: 2 }" />
        </div>
        <div class="total-unit pl-3 text-sm lh-[1] text-#7088b4">
          吨
        </div>
      </div>
      <div class="total-people-number mt-6 text-left">
        <Countcard title="平台用户总人数" :number="data.totalPeopleNumber" unit="人" />
      </div>
      <div class="bottom mt-4  h-300px">
        <ScreenPanelTitle title="每月收发趋势" />
        <BaseChart :option="option" />
      </div>
    </div>
  </ScreenPanel3>
</template>
