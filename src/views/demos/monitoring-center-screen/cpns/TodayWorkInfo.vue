<script setup lang="ts">
import type { ITodayWorkInfo } from '../config/types'

defineProps<{
  data: ITodayWorkInfo
}>()
</script>

<template>
  <div class="w-full h-full flex flex-col">
    <div class="top flex mt-6">
      <div class="inner-item flex-1 flex justify-center">
        <CountcardV2 title="今日库存量(万吨)" :count="data.totalInventory">
          <img src="@/assets/images/work-icon1.png" class="w-full h-full">
        </CountcardV2>
      </div>
      <div class="inner-item flex-1 flex justify-center">
        <CountcardV2 title="今日收发量(万吨)" :count="data.todayReceivedAndShipped">
          <img src="@/assets/images/work-icon2.png" class="w-full h-full">
        </CountcardV2>
      </div>
      <div class="inner-item flex-1 flex justify-center">
        <CountcardV2 title="今日作业车数(辆)" :count="data.todayWorkNumber">
          <img src="@/assets/images/work-icon3.png" class="w-full h-full">
        </CountcardV2>
      </div>
    </div>
    <div class="bottom flex-1 w-full">
      <MapEchart />
    </div>
  </div>
</template>
