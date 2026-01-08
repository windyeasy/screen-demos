import type { IDType } from '../../enrollmentscreen/config/types'

export interface SendAndReceiveTrendItem {
  month: string
  number: number
}

export interface ISendAndReceiveInfo {
  // 收发总量
  sendAndReceiveTotal: number
  // 总人数
  totalPeopleNumber: number
  // 收发趋势
  sendAndReceiveTrend: SendAndReceiveTrendItem[]
}

// 实时作业动态
export interface ITodayInfo {
  // 总量
  total: number
  // 作业中数量
  inProgress: number
  // 待出库
  outOfStock: number
}

export interface InboundAndOutboundInfo {
  type: 1 | 2 // 1 - 入，2-出
  date: string | number
  // 仓库
  storehouse: string
  // 发货单位
  shippingCompany: string
  // 订单号
  orderNumber: string
  // 车牌号
  licensePlateNumber: string
  // 物资类型名称
  materialTypeNumber: string
  // 重量
  weight: number
}

// 实时作业动态
export interface ITaskUpdateInfo {
  // 今日入库总量
  todayInboundInfo: ITodayInfo
  // 今日出库总量
  todayOutboundInfo: ITodayInfo
  // 出入库信息
  inboundAndOutboundInfos: InboundAndOutboundInfo[]
}

// 各仓库月收发占比
export interface IWarehouseReceivingAndDispatchRatio {
  id: IDType
  month: number | string
  // 大理宝象库数量
  total1: number
  // 大理粮油库
  total2: number
  // 王家营库
  total3: number
}

// 各个仓库今日作业信息
export interface TodayWorkInfo {
  // 今日库存量
  totalInventory: number
  // 今日收发量
  todayReceivedAndShipped: number
  // 今日作业
  todayWorkNumber: number
}
