export function loadImage(path: string = '') {
  return path || loadAssetsImages('noimg.webp')
}

export function loadAssetsImages(path: string) {
  return new URL(`../assets/images/${path}`, import.meta.url).href
}
