<script setup lang="ts">
import type { IEnrollmentComparison, IMaleToFemaleRatio, IRegistrationStatistics, IReportComparison, IRoomOccupancyStatus, ITransactionStatus } from './config/types'
import { getEnrollmentscreenData } from '@/services/enrollmentscreen'
import { enrollmentComparisonData, maleToFemaleRatioData, registrationStatisticsData, reportComparisonData, roomOccupancyStatusData, transactionStatusData } from './config/data'
import LeftBottom from './cpns/LeftBottom.vue'
import RegistrationStatistics from './cpns/RegistrationStatistics.vue'
import ReportComparison from './cpns/ReportComparison.vue'
import RoomOccupancyStatus from './cpns/RoomOccupancyStatus.vue'
import TransactionStatus from './cpns/TransactionStatus.vue'

const transactionStatus = ref<ITransactionStatus[]>(transactionStatusData)
const reportComparison = ref<IReportComparison>(reportComparisonData)
const enrollmentComparison = ref<IEnrollmentComparison[]>(enrollmentComparisonData)
const roomOccupancyStatus = ref<IRoomOccupancyStatus>(roomOccupancyStatusData)
const registrationStatistics = ref<IRegistrationStatistics[]>(registrationStatisticsData)
const maleToFemaleRatio = ref<IMaleToFemaleRatio[]>(maleToFemaleRatioData)

getEnrollmentscreenData().then((res) => {
  transactionStatus.value = res.transactionStatus.data
  reportComparison.value = res.reportComparison.data
  enrollmentComparison.value = res.enrollmentComparison.data
  roomOccupancyStatus.value = res.roomOccupancyStatus.data
  registrationStatistics.value = res.registrationStatistics.data
  maleToFemaleRatio.value = res.maleToFemaleRatio.data
})
</script>

<template>
  <div class="wrapper flex flex-col">
    <header class="title text-[28px] py-5 text-center  text-white">
      校园招生报名数据中心
    </header>
    <main class="screen-main grid grid-cols-7 gap-5  flex-1 pb-5 w-full px-5 box-border">
      <div class="main-left col-span-4 grid grid-rows-3 gap-5 h-full">
        <div class="row-span-1 w-full">
          <TransactionStatus :data="transactionStatus" />
        </div>
        <div class="row-span-1 w-full">
          <ReportComparison :data="reportComparison" />
        </div>
        <div class="row-span-1 w-full">
          <LeftBottom :data1="enrollmentComparison" :data2="maleToFemaleRatio" />
        </div>
      </div>
      <div class="main-right col-span-3 grid grid-rows-3 gap-6 h-full">
        <div class="row-span-2">
          <RoomOccupancyStatus :data="roomOccupancyStatus" />
        </div>
        <div class="row-span-1">
          <RegistrationStatistics :data="registrationStatistics" />
        </div>
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
