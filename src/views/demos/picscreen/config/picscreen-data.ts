/**
 * 通过范围随机整数
 * @param min 最小的整数
 * @param max 最大正数
 * @returns 随机数值
 */
function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

// 全市写字楼空置率分析
export const vacancyRateData = Array.from({ length: 6 }).map((_, index) => {
  return {
    id: index + 1,
    year: `201${2 + index}年`,
    value: getRandomInt(0, 100),
  }
})

const cities = [
  '静安区',
  '黄埔区',
  '徐汇区',
  '浦东新区',
  '普陀区',
  '闸北区',
  '闵行区',
  '宝山区',
  '松江区',
  '奉贤区',
  '嘉定区',
]

export function radomArrayItem(array: string[]): string {
  const index = getRandomInt(0, array.length - 1)
  return array[index]
}

const colors = [
  '#00E5FF', // 低
  '#00CFFF',
  '#00B8FF',
  '#00A2FF',
  '#3FD6A6',
  '#FFD666',
  '#FF9C6E',
  '#FF6B6B',
]
// 入住上市企业数量
export const listedCompaniesData = cities.map((item, index) => {
  return {
    id: index + 1,
    city: item,
    color: colors[index],
    // 入住上市企业
    number: getRandomInt(0, 100),
    // 入住企业数量
    totalNumber: 100,
  }
})

// 入驻世界500强企业数量
export const listedCompanies2Data = cities.map((item, index) => {
  return {
    id: index + 1,
    city: item,
    number: getRandomInt(1, 10),
  }
})

// 全市当地注册率
export const registrationRateData = Array.from({ length: 6 }).map((_, index) => {
  return {
    id: index + 1,
    year: `201${3 + index}年`,
    number: getRandomInt(1, 500),
    percent: getRandomInt(0, 100),
  }
})

// 全市写字楼租售面积比
export const areaRatioData = cities.map((item, index) => {
  return {
    id: index + 1,
    city: item,
    color: colors[index],
    // 每个城市的百分比
    percent: getRandomInt(0, 100),
  }
})
