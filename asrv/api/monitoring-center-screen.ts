// asrv/api/post.ts
import { defineApiConfig, Mock, mockString } from 'asrv'

function getTodayInfo() {
  const inProgress = Mock.Random.integer(0, 200)
  const outOfStock = Mock.Random.integer(0, 200)
  return {
    total: inProgress + outOfStock,
    inProgress,
    outOfStock,
  }
}

// 获取车牌号
function getLicensePlateNumber() {
  const letters = 'ABCDEFGHJKLMNPQRSTUVWXYZ'
  const words = '京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼'
  return Mock.mock(`@cword(${words}, 1)@character(${letters})@string("upper", 5)`)
}

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

export default defineApiConfig({
  monitoringCenterScreen: mockString({
    // 平台收发总量
    sendAndReceiveInfo: {
      data: {
      // 收发总量
        'sendAndReceiveTotal': '@integer(1000000, 10000000)',
        // 总人数
        'totalPeopleNumber': '@integer(0, 1000)',
        // 收发趋势
        'sendAndReceiveTrend|12': [
          {
            'month|+1': months,
            'number': '@integer(0, 120)',
          },
        ],
      },
    },

    // 实时作业动态
    taskUpdateInfo: {
      data: {
        'todayInboundInfo': getTodayInfo(),
        'todayOutboundInfo': getTodayInfo(),
        'inboundAndOutboundInfos|5-10': [
          {
            type: `@pick([1, 2])`,
            date: `@datetime("yyyy-MM-dd HH:mm:ss")`,
            storehouse: `@pick(['大理宝象', '大理粮油', '王家营'])库`,
            shippingCompany: `@cname有限公司`,
            orderNumber: 'FH@date("yyyyMMdd")@natural(1000, 9999)',
            licensePlateNumber: getLicensePlateNumber(),
            materialTypeNumber: `@pick(['建材', '板材', '钢材', '卷材', '粮油])`,
            weight: '@float(0, 200, 3, 3)',
          },
        ],
      },
    },

    // 各仓库月收发占比
    warehouseReceivingAndDispatchRatio: {
      'data|12': [
        {
          'id|+1': 1,
          'month|+1': months,
          'total1': '@integer(0, 100)',
          'total2': '@integer(0, 100)',
          'total3': '@integer(0, 100)',
        },
      ],
    },

    // 各个仓库今日作业信息
    todayWorkInfo: {
      data: {
        // 今日库存量
        totalInventory: '@float(0, 1000, 3, 3)',
        // 今日收发量
        todayReceivedAndShipped: '@float(0, 1000, 3, 3)',
        // 今日作业
        todayWorkNumber: '@integer(0, 10000)',
      },
    },
  }),
})
