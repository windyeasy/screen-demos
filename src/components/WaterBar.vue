<script lang="ts" setup>
const props = defineProps<{
  percentage: number
  color?: string
  waterColor?: string
  size?: number
}>()

const count = ref(0)
const percentageCount = ref(0)

let timeId: NodeJS.Timeout | null = null
watch(() => props.percentage, () => {
  count.value = 0
  percentageCount.value = 0
  timeId = setInterval(() => {
    if (count.value >= props.percentage) {
      timeId && clearInterval(timeId)
      return
    }

    count.value++
    if (count.value <= 100) {
      percentageCount.value = count.value
    }
  }, 60)
}, {
  immediate: true,
})

const waterStyle = computed(() => {
  return {
    transform: `translate(0, ${100 - percentageCount.value}%)`,
    background: props.waterColor || '#4d6de3',
  }
})
</script>

<template>
  <div class="water-ball w-full h-full">
    <svg
      x="0px"
      y="0px"
      style="display: none"
    >
      <symbol id="wave">
        <path
          d="M420,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C514,6.5,518,4.7,528.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H420z"
        />
        <path
          d="M420,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C326,6.5,322,4.7,311.5,2.7C304.3,1.4,293.6-0.1,280,0c0,0,0,0,0,0v20H420z"
        />
        <path
          d="M140,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C234,6.5,238,4.7,248.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H140z"
        />
        <path
          d="M140,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C46,6.5,42,4.7,31.5,2.7C24.3,1.4,13.6-0.1,0,0c0,0,0,0,0,0l0,20H140z"
        />
      </symbol>
    </svg>
    <div class="water-ball-box" :style="{ width: `${props.size || 200}px`, height: `${props.size || 200}px` }">
      <div class="percent">
        <div id="count" class="percentNum">
          {{ count }}
        </div>
        <div class="percentB">
          %
        </div>
      </div>
      <div id="water" class="water" :style="waterStyle">
        <svg viewBox="0 0 560 20" class="water_wave water_wave_back">
          <use xlink:href="#wave" />
        </svg>
        <svg viewBox="0 0 560 20" class="water_wave water_wave_front" :fill="props.waterColor || '#4d6de3'">
          <use xlink:href="#wave" />
        </svg>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
div, svg, path {
  box-sizing: border-box;
  outline: none;
  &::before, &::after {
    box-sizing: border-box;
    outline: none;
  }
}

.water-ball {
  position: relative;
}

.water-ball-box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #020438;
  border-radius: 100%;
  overflow: hidden;
}
.water-ball-box .percent {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 3;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 64px;
}
.water-ball-box .water {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  transform: translate(0, 50%);

}
.water-ball-box .water_wave {
  width: 200%;
  position: absolute;
  bottom: 100%;
}
.water-ball-box .water_wave_back {
  right: 0;
  fill: #c7eeff;
  animation: toback 1.7s linear infinite;
}

@keyframes toback {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(50%);
  }
}

.water-ball-box .water_wave_front {
  left: 0;
  margin-bottom: -1px;
  animation: tofront 0.7s linear infinite;
}

@keyframes tofront {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }

}
</style>
