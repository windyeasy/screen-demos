<script setup lang="ts">
import type { IRoomOccupancyStatus } from '../config/types'
import { BorderBox9 } from '@kjgl77/datav-vue3'

defineProps<{
  data: IRoomOccupancyStatus
}>()

const activeIndex = ref(1)
</script>

<template>
  <ScreenPanel2 title="宿舍入住情况">
    <div class="flex flex-col h-full">
      <div class="top flex flex-col">
        <BorderBox9 class="flex-1">
          <div class="inner-top p-6 flex">
            <CountContentItem :title="data.occupancyTitle" :number="data.studentNumber" />
            <CountContentItem :title="data.occupancyTitle" :number="data.studentNumber" />
            <CountContentItem :title="data.occupancyTitle" :number="data.studentNumber" />
          </div>
        </BorderBox9>
        <div class="rooms  flex mt-6">
          <template v-for="item in data.roomsList" :key="item">
            <div class="room-item flex-1 flex flex-col justify-center items-center">
              <div class="icon w-100px h-100px">
                <img class="w-full h-full" src="@/assets/images/room-cover.png">
              </div>
              <div class="title  text-center text-white mt-2">
                {{ item }}
              </div>
            </div>
          </template>
        </div>
      </div>
      <div class="bottom flex-1 box-border pb-4 flex mt-8">
        <div class="bottom-left w-40% flex flex-col">
          <Countcard :title="data.schoolOccTitle" unit="人" :number="data.schoolOccNumber" />
          <div class="mt-8" />
          <Countcard :title="data.roomReTitle" unit="个" :number="data.roomReNumber" />
        </div>
        <div class="bottom-right  flex justify-center flex-col flex-1 ml-6">
          <div class="warning-title mb-6  text-white text-center text-xl">
            实时预警
          </div>
          <div class="content flex justify-between items-center">
            <img w-140px h-140px src="@/assets/images/warning-cover.png">
            <div class="warning-list flex-1">
              <template v-for="(item, index) in data.earlyWarning" :key="index">
                <div class="warning-item text-center text-lg py-2" :class="{ active: activeIndex === index }" :style="{ color: item.color }">
                  {{ item.name }}
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </ScreenPanel2>
</template>

<style scoped>
.active {
  font-size: 24px;
}
</style>
