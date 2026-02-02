<script setup lang="ts">
import { getPowerScreenData } from '@/services/powerscreen'
import { chargingPileData, chargingStatisticsData, chargingTop4Data, dataAnalysisData, exceptionMonitoringData, processMonitoringData } from './config/home-data'
import CenterBottom from './cpns/CenterBottom.vue'
import CenterTop from './cpns/CenterTop.vue'
import LeftBottom from './cpns/LeftBottom.vue'
import LeftTop from './cpns/LeftTop.vue'
import RightBottom from './cpns/RightBottom.vue'
import RightCenter from './cpns/RightCenter.vue'
import RightTop from './cpns/RightTop.vue'

// todo: 可以配置title， cover，直接通过store得到demo的信息不需要每次都在home/data.ts里面写入

const chargingPile = ref<any>(chargingPileData)
const processMonitoring = ref<any>(processMonitoringData)
const chargingStatistics = ref<any>(chargingStatisticsData)
const dataAnalysis = ref<any>(dataAnalysisData)
const chargingTop4 = ref(chargingTop4Data)
const exceptionMonitoring = ref(exceptionMonitoringData)
const percentage = ref(0)

getPowerScreenData().then((res) => {
  chargingPile.value = res.chargingPile.data
  processMonitoring.value = res.processMonitoring.data
  chargingStatistics.value = res.chargingStatistics.data
  dataAnalysis.value = res.dataAnalysis.data
  exceptionMonitoring.value = res.exceptionMonitoring.data

  chargingTop4.value = res.chargingTop4.data
  percentage.value = res.chargingTop4.totalPercentage
})
</script>

<template>
  <div class="wrapper flex flex-col">
    <header class="screen-header w-full h-56px" />
    <main class="screen-main flex flex-1  w-full px-6 box-border">
      <div class="screen-left w-526px">
        <LeftTop :data="chargingPile" />
        <LeftBottom :data="processMonitoring" />
      </div>
      <div class="screen-center flex-1  flex flex-col h-full box-border mx-4">
        <CenterTop />
        <CenterBottom :data="dataAnalysis" />
      </div>
      <div class="screen-right w509px">
        <RightTop :panel-items="chargingTop4" :percentage="percentage" />
        <RightCenter :data="chargingStatistics" />
        <RightBottom :move-points="exceptionMonitoring" />
      </div>
    </main>
  </div>
</template>

<style scoped>
.wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background: url('@/assets/images/bg.png') no-repeat;
  background-size: cover;
}

.screen-header {
    background: url('@/assets/images/bg_header.svg') no-repeat;
    background-size: cover;
    margin: 20px 0 30px;
}
</style>
