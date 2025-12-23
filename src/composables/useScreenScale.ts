import { bigScreenScale } from '@/utils/screen'

export default function useScreenScale(targetWidth = 1920, targetHeight = 1080, targetRatio = 16 / 9) {
  let cancelChangeEvent: Function | null = null
  onMounted(() => {
    cancelChangeEvent = bigScreenScale(targetWidth, targetHeight, targetRatio)
  })
  onUnmounted(() => {
    cancelChangeEvent && cancelChangeEvent()
  })
}
