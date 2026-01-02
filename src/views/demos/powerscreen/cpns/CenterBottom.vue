<script setup lang="ts">

  const props = defineProps<{
    data: any[]
  }>()

</script>

<template>
  <div class="screen-center-bottom box-border w-full h-198px mb-16">
    <div class="center-inner box-border pt-6 h-full items-center w-full flex">
      <template v-for="item in data" :key="item.id">
        <div class="inner-item flex-1 items-end  flex justify-between box-border px-10">
          <div class="item-left">
            <div class="title text-white text-sm">
              {{ item.title }}
            </div>
            <div class="count mt-2 flex c-[#1e8fde] items-end">
              <div class="total-number  text-36px font-bold flex">
               <Countup :value="item.totalNum" />
              </div>
              <div class="unit text-sm pb-1">
                {{ item.unit }}
              </div>
            </div>
          </div>
          <div class="item-right flex text-sm" :style="{ color: item.isUp ? '#37a73f' : '#c70013' }">
            <div class="icon">
              <svg width="20" height="20">
                <template v-if="item.isUp">
                  <use href="#spr-up" width="20" height="20" />
                </template>
                <template v-else>
                  <use href="#spr-down" width="20" height="20" />
                </template>
              </svg>
            </div>
            <div class="percentage pb-2 flex">
              <Countup :value="item.percentage" :options="{
                duration: 3
              }" />
              <span class="unit">%</span>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped>
.screen-center-bottom {
  background: url('@/assets/images/bg_bottom.svg') no-repeat;
  background-size: contain;
}
</style>
