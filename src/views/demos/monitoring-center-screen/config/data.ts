import type { ISendAndReceiveInfo, ITaskUpdateInfo, ITodayInfo, ITodayWorkInfo, IWarehouseRecAndDisRatio } from './types'
import { getRandomInt } from '@/utils/logic'

// 平台收发总量
const months = [
  '一月',
  '二月',
  '三月',
  '四月',
  '五月',
  '六月',
  '七月',
  '八月',
  '九月',
  '十月',
  '十一月',
  '十二月',
]
export const sendAndReceiveInfoData: ISendAndReceiveInfo = {
  sendAndReceiveTotal: getRandomInt(1000000, 10000000),
  totalPeopleNumber: getRandomInt(0, 1000),
  sendAndReceiveTrend: months.map(item => ({
    number: getRandomInt(0, 120),
    month: item,
  })),
}

function getTodayInfo(): ITodayInfo {
  const inProgress = getRandomInt(0, 200)
  const outOfStock = getRandomInt(0, 200)
  return {
    total: inProgress + outOfStock,
    inProgress,
    outOfStock,
  }
}

// 实时作业动态
export const taskUpdateInfoData: ITaskUpdateInfo = {
  todayInboundInfo: getTodayInfo(),
  todayOutboundInfo: getTodayInfo(),
  inboundAndOutboundInfos: [],
}

// 各仓库月收发占比
export const warehouseRecAndDisRatioData: IWarehouseRecAndDisRatio[] = months.map((item, index) => {
  return {
    id: index + 1,
    month: item,
    total1: getRandomInt(0, 100),
    total2: getRandomInt(0, 100),
    total3: getRandomInt(0, 100),
  }
})

// 各个仓库今日作业信息
export const todayWorkInfoData: ITodayWorkInfo = {
  totalInventory: getRandomInt(0, 1000),
  todayReceivedAndShipped: getRandomInt(0, 1000),
  todayWorkNumber: getRandomInt(0, 10000),
}
