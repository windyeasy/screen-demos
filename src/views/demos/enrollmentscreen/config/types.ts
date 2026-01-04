export type IDType = number | string
export interface ITransactionStatus {
  id: IDType
  title: string
  processedNumber: number
  notProcessedNumber: number
}

// 各院系报道学生对比
export interface IAllMajorsRC {
  id: IDType
  majorName: string
  peopleNumber: number
}

export interface IReportComparison {
  todayReportNumber: number
  // 已报道
  reportedNumber: number
  // 各系报道对比
  allMajorsReportComparison: IAllMajorsRC[]
}

// 现场报名对比
export interface IEnrollmentComparison {
  id: IDType
  name: string
  color: string
  pepleNumber: number
}

// 宿舍实时预警
export interface IEarlyWarning {
  name: string
  color: string
  state: number // // 0, 紧张 1, 已住满， 2, 拥挤
}
// 宿舍入住情况
export interface IRoomOccupancyStatus {
  // 入住学生
  occupancyTitle: string
  studentNumber: number
  // 床位总数
  bedTotalTitle: string
  bedTotalNumber: number
  // 剩余床位
  remainingBedTitle: string
  remainingBedNumber: number
  // 宿舍列表
  roomsList: string[]
  // 住校人数
  schoolOccTitle: string
  schoolOccNumber: number
  // 宿舍床位剩余量
  roomReTitle: string
  roomReNumber: number

  // 实时预警
  earlyWarning: IEarlyWarning[]
}

// 报名人数统计
export interface IRegistrationStatistics {
  id: IDType
  date: string
  peopleNumber: number
}

// 新生男女比例
export interface IMaleToFemaleRatio {
  id: IDType
  date: string
  maleNumber: number
  femaleNumber: number
}

