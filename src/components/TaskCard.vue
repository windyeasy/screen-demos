<script setup lang="ts">
const props = withDefaults(defineProps<{
  icon: string
  title: string
  subTitle1?: string
  subTitle2?: string
  total: number
  unit: string
  taskNumber1: number
  taskNumber2: number
  color?: string
}>(), {
  color: '#0376fa',
  subTitle1: '作业中',
  subTitle2: '待出库',
})

function getPercent(value: number) {
  return +((value / props.total) * 100).toFixed(1)
}
</script>

<template>
  <div class="total-card flex">
    <div class="card-left mr-2" :style="{ color }" w-20px h-20px>
      <div :class="icon" inline-block />
    </div>
    <div class="total-right">
      <div class="title text-white font-bold text-left">
        {{ title }}
      </div>
      <div class="count mt-3 flex lh-[1] items-end" :style="{ color }">
        <div class="count-number text-[30px] font-bold">
          {{ total }}
        </div>
        <div class="unit text-sm ml-2">
          {{ unit }}
        </div>
      </div>
      <div class="total-right-item flex mt-3 lh-[1] items-center">
        <div class="item-text text-sm text-[#bbc3da]">
          {{ subTitle1 }}：
        </div>
        <div class="number text-[#40ba78] text-lg font-bold ml-2">
          {{ taskNumber1 }}
        </div>
        <!-- 百分比组件 -->
        <Percentage :percent="getPercent(taskNumber1)" color="#40ba78" />
      </div>
      <div class="total-right-item flex mt-3 lh-[1] items-center">
        <div class="item-text text-sm text-[#bbc3da]">
          {{ subTitle2 }}：
        </div>
        <div class="number text-[#ea8b1c] text-lg font-bold ml-2">
          {{ taskNumber2 }}
        </div>
        <!-- 百分比组件 -->
        <Percentage :percent="getPercent(taskNumber2)" color="#ea8b1c" />
      </div>
    </div>
  </div>
</template>
