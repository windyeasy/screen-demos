<script setup lang="ts">
import type { ScrollTableColumnProps } from './types'

const props = withDefaults(defineProps<{
  data: any[]
  columns: ScrollTableColumnProps[]
  height?: number | string
  headBackgroundColor?: string
  // 斑马条纹
  stripe?: boolean
  stripeColor1?: string
  stripeColor2?: string

}>(), {
  headBackgroundColor: 'transparent',
  stripeColor1: 'transparent',
  stripeColor2: '#091336',
})

function numberToPx(value?: string | number) {
  if (typeof value === 'number') {
    return `${value}px`
  }
  return value
}

function getStyle(item: ScrollTableColumnProps, isBody: boolean = true) {
  const style: any = {
    width: numberToPx(item.width),
    textAlign: item.align,
  }
  if (isBody) {
    style.color = item.color
  }
  return style
}

function getStripeBgColor(index: number) {
  if (props.stripe) {
    const number = index + 1
    return number % 2 ? props.stripeColor1 : props.stripeColor2
  }
  return 'transparent'
}

// 动画轮播
const newData = ref<any[]>([])
watchEffect(() => {
  newData.value = [...props.data, ...props.data]
})
const offsetY = ref(0)
const rowHeight = 34
const speed = 0.4
let rafId: null | number = null

const offsetMaxHeight = computed(() => {
  return rowHeight * props.data.length
})

function step() {
  offsetY.value += speed
  // 超过一行的高度
  if (offsetY.value >= offsetMaxHeight.value) {
    // 将第一行一到末尾
    offsetY.value = 0
    stopScroll()
    nextTick(() => {
      startScroll()
    })
  }
  else {
    rafId = requestAnimationFrame(step)
  }
}

function startScroll() {
  rafId = requestAnimationFrame(step)
}

function stopScroll() {
  rafId && cancelAnimationFrame(rafId)
}
onMounted(() => {
  startScroll()
})

onUnmounted(() => {
  stopScroll()
})
</script>

<template>
  <div
    class="scroll-table-wrapper text-sm box-border w-full overflow-hidden"
    :style="{ height: numberToPx(height) }"
  >
    <div class="move-inner box-border">
      <table class="scroll-table w-full">
        <thead class="scroll-table-head" :style="{ backgroundColor: headBackgroundColor }">
          <tr class="scroll-table-row ">
            <th
              v-for="column in columns"
              :key="column.prop"
              class="scroll-table-column box-border p2 px-0"
              :style="getStyle(column, false)"
            >
              {{ column.label }}
            </th>
          </tr>
        </thead>
        <tbody
          class="table-body"
          :style="{ transform: `translateY(-${offsetY}px)` }"
          @mouseenter="stopScroll"
          @mouseleave="startScroll"
        >
          <template v-for="(item, index) in newData" :key="item.id">
            <tr class="scroll-table-row" :style="{ background: getStripeBgColor(index) }">
              <td
                v-for="column in columns"
                :key="column.prop"
                class="scroll-table-column  box-border p2 px-0 lh-[1.2]"
                :style="getStyle(column)"
              >
                <slot :row="item" :name="column.slotName">
                  {{ item[column.prop] }}
                </slot>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
  thead {
    position: relative;
    z-index: 2;
  }
  tbody {
    display: block;
    will-change: transform;
    position: relative;
  }
table, thead, tbody, tr, td {
  border: 0;
  outline: none;
  border-collapse: collapse;  /* 合并边框 */
  border-spacing: 0;
}
tr {
  display: table;
  width: 100%;
  table-layout: fixed;
  height: 20px;
  line-height: 20px;
}

tbody tr:hover {
  background: rgb(255 255 255 / 10%) !important;
}
</style>
