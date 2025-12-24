import type { EChartsInitOpts, EChartsOption } from 'echarts'
import * as echarts from 'echarts'
import { throttle } from 'lodash'

export default function useEcharts(el: HTMLElement, theme: string | null = null, option: EChartsInitOpts = {
  renderer: 'svg',
}) {
  const chart = echarts.init(el, theme, option)

  function resetSize() {
    chart.resize()
  }
  function setOption(option: EChartsOption) {
    chart.setOption(option)
  }

  const throttleResize = throttle(resetSize, 100)

  window.addEventListener('resize', throttleResize)

  onUnmounted(() => {
    window.removeEventListener('resize', throttleResize)
    chart.dispose()
  })

  return {
    echartInstance: chart,
    setOption,
    resetSize,
  }
}
