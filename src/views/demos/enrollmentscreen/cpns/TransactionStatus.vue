<script setup lang="ts">
import type { ITransactionStatus } from '../config/types'

defineProps<{
  data: ITransactionStatus[]
}>()

function getWaterPer(value1: number, value2: number) {
  const total = value1 + value2
  return Math.floor(total / value1)
}
</script>

<template>
  <ScreenPanel2 title="各环节办理情况">
    <div class="flex">
      <template v-for="item in data" :key="item.id">
        <div class="comparison-item flex-1">
          <div class="percent flex flex-col items-center h-60%">
            <div class="water-wrapper h-100px  w-100px">
              <WaterBar water-color="#61c6ce" :percentage="getWaterPer(item.processedNumber, item.notProcessedNumber)" :size="100" />
            </div>
            <div class="percent-title text-white py-2 text-sm">
              {{ item.title }}
            </div>
          </div>
          <ShowCountItem
            title1="已办理"
            :number1="item.processedNumber"
            title2="待办理"
            :number2="item.notProcessedNumber"
          />
        </div>
      </template>
    </div>
  </ScreenPanel2>
</template>
