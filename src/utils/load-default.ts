export function loadImage(path: string = '') {
  return path ? loadAssets(path) : loadAssetsImages('noimg.webp')
}

export function loadAssets(path: string) {
  const absPath = `../assets/${path}`
  return new URL(absPath, import.meta.url).href
}
export function loadAssetsImages(path: string) {
  return loadAssets(`images/${path}`)
}
