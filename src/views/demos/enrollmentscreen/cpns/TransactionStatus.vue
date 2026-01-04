<script setup lang="ts">
import type { ITransactionStatus } from '../config/types'
import { WaterLevelPond } from '@kjgl77/datav-vue3'

defineProps<{
  data: ITransactionStatus[]
}>()

function getWaterConfig(value1: number, value2: number) {
  const total = value1 + value2
  const newValue = Math.floor(total / value1)
  return {
    data: [newValue],
    shape: 'round',
  }
}
</script>

<template>
  <ScreenPanel2 title="各环节办理情况">
    <div class="flex">
      <template v-for="item in data" :key="item.id">
        <div class="comparison-item flex-1">
          <div class="percent flex flex-col items-center h-60%">
            <div class="water-wrapper w-36% flex-1">
              <WaterLevelPond :style="{ width: '100%', height: '100%' }" :config="getWaterConfig(item.processedNumber, item.notProcessedNumber)" />
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
