import { throttle } from 'lodash'

export function bigScreenScale(targetWidth = 1920, targetHeight = 1080, targetRatio = 16 / 9) {
  // 缓存默认样式用于还原
  const originStyle = document.body.style
  const originWidth = originStyle.width
  const originHeight = originStyle.height
  const originTransform = originStyle.transform
  const originTransformOrigin = originStyle.transformOrigin
  const originPosition = originStyle.position
  const originLeft = originStyle.left

  // 设置body的高
  document.body.style.width = `${targetWidth}px`
  document.body.style.height = `${targetHeight}px`

  function changeBodyScale() {
    const currentWidth = document.documentElement.clientWidth || document.body.clientWidth
    const currentHeight = document.documentElement.clientHeight || document.body.clientWidth

    let scaleRatio = currentWidth / targetWidth

    // 当前缩放比例
    const currentRatio = currentWidth / currentHeight
    // 判断是否超宽屏幕
    if (currentRatio > targetRatio) {
      scaleRatio = currentHeight / targetHeight
    }

    // 缓存默认样式用于还原
    document.body.style.transform = `scale(${scaleRatio}) translateX(-50%)`
    document.body.style.transformOrigin = 'left top'
    document.body.style.width = `${targetWidth}px`
    document.body.style.height = `${targetHeight}px`
    document.body.style.position = 'absolute'
    document.body.style.left = '50%'
  }

  changeBodyScale()
  window.dispatchEvent(new Event('resize'))

  const throttleChangeBodyScale = throttle(changeBodyScale, 100)

  window.addEventListener('resize', throttleChangeBodyScale)
  // 返回取消释放函数释放
  return () => {
    document.body.style.transform = originTransform
    document.body.style.transformOrigin = originTransformOrigin
    document.body.style.width = originWidth
    document.body.style.height = originHeight
    document.body.style.position = originPosition
    document.body.style.left = originLeft

    window.removeEventListener('resize', throttleChangeBodyScale)
  }
}
