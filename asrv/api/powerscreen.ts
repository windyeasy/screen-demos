// asrv/api/post.ts
import { defineApiConfig, mock, Mock } from 'asrv'

export default defineApiConfig({
  powerscreen: JSON.stringify(mock({
    chargingPile: {
      'data|6': [
        {
          'id|+1': 1,
          'value': `@integer(1, 100)`,
          'name|+1': [
            '广州占比',
            '深圳占比',
            '东莞占比',
            '佛山占比',
            '中山占比',
            '珠海占比',
          ],
          'percentage': `@integer(1, 100)%`,
          'color|+1': [
            '#34D160',
            '#027FF2',
            '#8A00E1',
            '#F19610',
            '#6054FF',
            '#00C6FF',
          ],
        },
      ],
    },
    processMonitoring: {
      'data|2': [
        {
          'id|+1': 1,
          'name|+1': ['正常', '异常'],
          'data|12': ['@integer(20, 100)'],
        },
      ],
    },
    chargingStatistics: {
      'data|7': [
        {
          'id|+1': 1,
          'name|+1': [
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
          ],
          'value': `@integer(50, 400)`,
        },
      ],
    },
    exceptionMonitoring: {
      'data|3': [
        {
          'id|+1': 1,
          'name': `异常@integer(1, 10)`,
          'value': `@integer(1, 10)`,
          'dur': '@integer(0, 100)s',
          'begin': '@integer(0,20)s',
        },
      ],
    },
    dataAnalysis: {
      'data|3': [
        {
          'id|+1': 1,
          'title|+1': [
            '充电桩总数(个)',
            '年增长总数(个)',
            '月增长总数(个)',
          ],
          'totalNum': `@integer(50, 400)`,
          'unit': '万',
          'percentage': `@integer(0, 100)`,
          'isUp': '@boolean',
        },
      ],
    },
    chargingTop4: {
      'data|5': [
        {
          'id|+1': 1,
          'name|+1': [
            '深圳',
            '广州',
            '东莞',
            '佛山',
            '其它',
          ],
          'percentage': `@integer(0, 100)%`,
        },
      ],
      'totalPercentage': `@integer(0, 100)`,
    },
  })),
})
