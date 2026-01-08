// asrv/api/post.ts
import { defineApiConfig, Mock, mock, mockString } from 'asrv'

export default defineApiConfig({
  enrollmentscreen: mockString({
    transactionStatus: {
      'data|4': [{
        'id|+1': 1,
        'title|+1': ['现场缴费', '照片采集', '宿舍确认', '班级确认'],
        'processedNumber': '@integer(0, 300)',
        'notProcessedNumber': '@integer(0, 300)',
      }],
    },

    // 各院系报道学生对比
    reportComparison: {
      data: {
        // 今日报道
        'todayReportNumber': '@integer(0, 2000)',
        // 已报道
        'reportedNumber': '@integer(0, 10000)',
        // 各系报道对比
        'allMajorsReportComparison|6': [
          {
            'id|+1': 1,
            'majorName|+1': [
              '软件工程',
              '电器自动化',
              '化学工程',
              '工业分析',
              '人文艺术',
              '商务英语',
            ],
            'peopleNumber': '@integer(0, 5000)',
          },
        ],
      },
    },
    // 现场报名对比
    enrollmentComparison: {
      'data|2': [{
        'id|+1': 1,
        'name|+1': [
          '现场报名',
          '线上报名',
        ],
        'pepleNumber': '@integer(0, 1000)',
        'color|+1': [
          '#0bd4e6',
          '#fe8d00',
        ],
      }],
    },

    // 宿舍入住情况
    roomOccupancyStatus: {
      data: {
        'occupancyTitle': '入住学生',
        'studentNumber': '@integer(0, 5000)',
        'bedTotalTitle': '床位总数',
        'bedTotalNumber': '@integer(0, 5000)',
        'remainingBedTitle': '剩余床位',
        'remainingBedNumber': '@integer(0, 5000)',
        'roomsList': Array.from({ length: 5 }, (_, index) => {
          return `${index + 1}号宿舍楼`
        }),
        'schoolOccTitle': '住校人数',
        'schoolOccNumber': '@integer(0, 5000)',
        'roomReTitle': '宿舍床位剩余量',
        'roomReNumber': '@integer(0, 5000)',
        'earlyWarning|3': [{
          // better-mock，fork通过状态设置信息
          state: '@integer(0, 2)',
          color() {
            const stateMapColor = [
              '#274faf',
              '#f4c23b',
              '#8bd8ad',
            ]
            const index = this.state as any
            return stateMapColor[index]
          },
          name() {
            const number = Mock.Random.integer(1, 5)
            const stateTexts = ['紧张', '已住满', '拥挤']
            const index = this.state as any
            const text = stateTexts[index]
            return `${number}号宿舍楼床位${text}`
          },
        }],
      },
    },
    // 报名人数统计
    registrationStatistics: {
      'data|7': [
        {
          'id|+1': 1,
          date() {
            const number = this.id as any
            return `9-${number}`
          },
          'peopleNumber': '@integer(0, 700)',
        },
      ],
    },
    // 新生男女比例
    maleToFemaleRatio: {
      'data|5': [
        {
          'id|+1': 1,
          date() {
            const number = this.id as any
            return `07-${number + 4}`
          },
          'maleNumber': '@integer(0, 30)',
          'femaleNumber': '@integer(0, 30)',
        },
      ],
    },
  }),
})
