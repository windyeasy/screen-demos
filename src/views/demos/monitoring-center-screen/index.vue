<script setup lang="ts">
import type { ISendAndReceiveInfo, ITaskUpdateInfo, ITodayWorkInfo, IWarehouseRecAndDisRatio } from './config/types'
import { getMonitoringCenterScreenData } from '@/services/monitoring-center-screen'
import { sendAndReceiveInfoData, taskUpdateInfoData, todayWorkInfoData, warehouseRecAndDisRatioData } from './config/data'
import SendAndReceiveInfo from './cpns/SendAndReceiveInfo.vue'
import TodayUpdateInfo from './cpns/TodayUpdateInfo.vue'
import TodayWorkInfo from './cpns/TodayWorkInfo.vue'
import WarehouseRecAndDisRatio from './cpns/WarehouseRecAndDisRatio.vue'

const sendAndReceiveInfo = ref<ISendAndReceiveInfo>(sendAndReceiveInfoData)
const taskUpdateInfo = ref<ITaskUpdateInfo>(taskUpdateInfoData)
const todayWorkInfo = ref<ITodayWorkInfo>(todayWorkInfoData)
const warehouseRecAndDisRatio = ref<IWarehouseRecAndDisRatio[]>(warehouseRecAndDisRatioData)
getMonitoringCenterScreenData().then((res) => {
  sendAndReceiveInfo.value = res.sendAndReceiveInfo.data
  taskUpdateInfo.value = res.taskUpdateInfo.data
  todayWorkInfo.value = res.todayWorkInfo.data
  warehouseRecAndDisRatio.value = res.warehouseRecAndDisRatio.data
})
</script>

<template>
  <div class="wrapper flex flex-col">
    <ScreenHeader title="云仓数据只能监测中心" />
    <main class="screen-main  flex-1 mt-4 w-full px-6 pb-4 box-border grid grid-rows-3 gap-4">
      <div class="main-top row-span-2 grid grid-cols-7">
        <div class="col-span-2 h-full">
          <SendAndReceiveInfo :data="sendAndReceiveInfo" />
        </div>
        <div class="col-span-3 h-full">
          <TodayWorkInfo :data="todayWorkInfo" />
        </div>
        <div class="col-span-2 h-full">
          <WarehouseRecAndDisRatio :data="warehouseRecAndDisRatio" />
        </div>
      </div>
      <div class="main-bottom row-span-1 box-border">
        <TodayUpdateInfo :data="taskUpdateInfo" />
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
</style>
