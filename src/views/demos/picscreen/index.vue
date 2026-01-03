<script setup lang="ts">
import { areaRatioData, listedCompanies2Data, listedCompaniesData, registrationRateData, vacancyRateData } from './config/picscreen-data'
import AreaRatio from './cpns/AreaRatio.vue'
import ListedCompanies2 from './cpns/ListedCompanies2.vue'
import ListedCompanies from './cpns/ListedCompanies.vue'
import RegistrationRate from './cpns/RegistrationRate.vue'
import VacanyRate from './cpns/VacanyRate.vue'

const vacancyRate = ref<any[]>(vacancyRateData)
const listedCompanies = ref<any[]>(listedCompaniesData)
const listedCompanies2 = ref<any[]>(listedCompanies2Data)
const registrationRate = ref<any[]>(registrationRateData)
const areaRatio = ref<any[]>(areaRatioData)
</script>

<template>
  <div class="wrapper flex flex-col">
    <ScreenHeader title="上海摄网大数据统计" />
    <main class="screen-main flex flex-col  flex-1 mt-6 w-full px-6 box-border">
      <div class="main-top flex  w-full flex-1 ">
        <div class="main-top-left flex-1 h-full">
          <VacanyRate :data="vacancyRate" />
        </div>
        <div class="main-top-center flex-1 h-full">
          <ListedCompanies :data="listedCompanies" />
        </div>
        <div class="main-top-right flex-1 h-full">
          <RegistrationRate :data="registrationRate" />
        </div>
      </div>
      <div class="main-bottom flex  flex-1 mt-8 mb-10">
        <div class="main-bottom-left flex-1 h-full">
          <ListedCompanies2 :data="listedCompanies2" />
        </div>
        <div class="main-bottom-right flex-1 h-full">
          <AreaRatio :data="areaRatio" />
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
