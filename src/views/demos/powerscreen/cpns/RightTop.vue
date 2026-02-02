<script setup lang="ts">
interface PanelItem {
  id: number | string
  name: string
  percentage: string
}
const props = defineProps<{
  panelItems: PanelItem[]
  percentage: number
}>()

const colors = ['#209393', '#1a54a5', '#85caf0', '#f5b64a', '#ee792e']

const newItems = computed(() => {
  return props.panelItems.map((item, index) => {
    index = index % colors.length
    return {
      ...item,
      color: colors[index],
    }
  })
})
</script>

<template>
  <div class="screen-right-top w-full h-316px flex ">
    <div class="right-top-left w-[60%] h-full">
      <WaterBar :percentage="percentage" water-color="#00c6ff" :size="190" />
    </div>

    <div class="right-top-right flex-1 h-full flex items-center pl-[30px]">
      <div class="legend">
        <template v-for="(item, index) in newItems" :key="index">
          <div class="legend-item flex items-center my-4">
            <div class="item-symbol w-[10px] h-[10px] rounded-[50%]" :style="{ backgroundColor: item.color }" />
            <div class="item-content flex font-size-[18px]">
              <div class="item-content-left white  mx-[10px] text-white">
                {{ item.name }}
              </div>
              <div class="item-content-right font-bold c-[#0cd2ea]">
                {{ item.percentage }}
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped>
.screen-right-top {
  background: url('@/assets/images/bg_right_top.svg') no-repeat;
  background-size: contain;
}
</style>
