<script setup lang="ts">
import type { EChartsOption } from 'echarts'
import * as echarts from 'echarts'
import BaseChart from './BaseChart.vue'

import { mapYunnameNames, YunanOutlineJSON, YunnanJSON } from './data'

echarts.registerMap('yunnan', YunnanJSON)
echarts.registerMap('yunnanOutline', YunanOutlineJSON)
const option = computed<EChartsOption>(() => {
  return {
    geo: {
      type: 'map', // 系列图是 地图(创建一个地理坐标系统, 用来展示数据 )
      map: 'yunnanOutline',
      layoutCenter: ['50%', '50%'], // 中心点位置
      layoutSize: '90%',
      itemStyle: {
        areaColor: 'transparent',
        borderColor: '#10bef6',
        borderWidth: 4,
        shadowColor: '#10bef6', // 阴影颜色
        shadowBlur: 6, // 阴影模糊半径
        shadowOffsetX: 0, // X 方向偏移
        shadowOffsetY: 0,
      },
      emphasis: {
        itemStyle: {
          areaColor: 'transparent',
        },
        label: {
          color: 'white',
        },
      },

    },
    grid: {
      left: 0,
      right: 0,
      top: 0,
    },
    series: [
      {
        type: 'map', // 系列图是 地图(创建一个地理坐标系统, 用来展示数据 )
        map: 'yunnan',
        layoutCenter: ['50%', '50%'], // 中心点位置
        layoutSize: '90%',
        itemStyle: {
          areaColor: '#042a73',
          borderColor: '#22a0ec',
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
        label: {
          show: true,
          color: 'white',
          formatter(params) {
            const newName = mapYunnameNames[params.name]
            if (newName) {
              return newName
            }
            return params.name
          },
        },
        emphasis: {
          itemStyle: {
            areaColor: '#00c2ff',
          },

          label: {
            color: 'white',
          },
        },
        select: {
          itemStyle: {
            areaColor: '#0075ff',
          },

          label: {
            color: 'white',
          },
        },
      },

    ],
  }
})
</script>

<template>
  <div class="map-echart w-full h-full">
    <div class="rotateX w-full h-full">
      <BaseChart :option="option" />
    </div>
  </div>
</template>

<style scoped>
  /* .map-echart {
     perspective: 500px;
     transform: rotate(5deg);
     position: relative;
     top: -60px;
  }
  .rotateX {
    transform: rotateX(45deg);
  } */
</style>
