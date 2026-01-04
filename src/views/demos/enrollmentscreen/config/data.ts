import type { IEnrollmentComparison, IMaleToFemaleRatio, IRegistrationStatistics, IReportComparison, IRoomOccupancyStatus, ITransactionStatus } from './types'
import { getRandomInt } from '@/utils/logic'

// 各环节办理情况
const businessNames = ['现场缴费', '照片采集', '宿舍确认', '班级确认']
export const transactionStatusData: ITransactionStatus[] = businessNames.map((item, index) => {
  return {
    id: index + 1,
    title: item,
    processedNumber: getRandomInt(0, 300),
    notProcessedNumber: getRandomInt(0, 300),
  }
})

// 各院系报道学生对比
const majors = [
  '软件工程',
  '电器自动化',
  '化学工程',
  '工业分析',
  '人文艺术',
  '商务英语',
]
export const reportComparisonData: IReportComparison = {
  // 今日报道
  todayReportNumber: getRandomInt(0, 2000),
  // 已报道
  reportedNumber: getRandomInt(0, 10000),
  // 各系报道对比
  allMajorsReportComparison: majors.map((item, index) => {
    return {
      id: index + 1,
      majorName: item,
      peopleNumber: getRandomInt(0, 5000),
    }
  }),

}

// 现场报名对比
export const enrollmentComparisonData: IEnrollmentComparison[] = [
  {
    id: 1,
    name: '现场报名',
    color: '#0bd4e6',
    pepleNumber: getRandomInt(0, 1000),
  },
  {
    id: 2,
    name: '线上报名',

    color: '#fe8d00',
    pepleNumber: getRandomInt(0, 1000),
  },
]

// 宿舍入住情况
const stateInfos = [
  {
    text: '紧张',
    color: '#274faf',
  },
  {
    text: '已住满',
    color: '#f4c23b',
  },
  {
    text: '拥挤',
    color: '#8bd8ad',
  },
]
export const roomOccupancyStatusData: IRoomOccupancyStatus = {
  occupancyTitle: '入住学生',
  studentNumber: getRandomInt(0, 5000),
  bedTotalTitle: '床位总数',
  bedTotalNumber: getRandomInt(0, 5000),
  remainingBedTitle: '剩余床位',
  remainingBedNumber: getRandomInt(0, 5000),
  // 宿舍列表
  roomsList: Array.from({ length: 5 }, (_, index) => {
    return `${index + 1}号宿舍楼`
  }),
  schoolOccTitle: '住校人数',
  schoolOccNumber: getRandomInt(0, 5000),
  roomReTitle: '宿舍床位剩余量',
  roomReNumber: getRandomInt(0, 5000),

  // 实时预警
  earlyWarning: Array.from({ length: 3 }, (_) => {
    // 0, 紧张 1, 已住满， 2, 拥挤
    const state = getRandomInt(0, 2)
    const info = stateInfos[state]
    return {
      name: `${getRandomInt(1, 5)}号宿舍楼床位${info.text}`,
      color: info.color,
      state,
    }
  }),
}

// 报名人数统计
export const registrationStatisticsData: IRegistrationStatistics[] = Array.from({ length: 7 }, (_, index) => {
  return {
    id: index + 1,
    date: `9-${index + 1}`,
    peopleNumber: getRandomInt(0, 700),
  }
})

// 新生男女比例
export const maleToFemaleRatioData: IMaleToFemaleRatio[] = Array.from({ length: 5 }, (_, index) => {
  return {
    id: index + 1,
    date: `07-2${index + 5}`,
    maleNumber: getRandomInt(0, 30),
    femaleNumber: getRandomInt(0, 30),
  }
})
