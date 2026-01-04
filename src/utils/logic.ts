/**
 * 通过范围随机整数
 * @param min 最小的整数
 * @param max 最大正数
 * @returns 随机数值
 */
export function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

/**
 * 数组中的随机出的某一项
 * @param array 数组
 * @returns 数组中的随机出的某一项
 */
export function radomArrayItem(array: any[]): string {
  const index = getRandomInt(0, array.length - 1)
  return array[index]
}
