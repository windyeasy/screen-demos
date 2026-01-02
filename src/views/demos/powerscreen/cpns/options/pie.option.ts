import type { EChartsOption } from 'echarts'
import type { IPieData } from './types'

function getOptionData(data: IPieData[]) {
  return data.map((item) => {
    return {
      value: item.value,
      name: item.name,
      itemStyle: {
        color: item.color,
      },
    }
  })
}

function calcTotal(data: IPieData[]) {
  return data.reduce((a, b) => {
    return a + b.value * 1
  }, 0)
}

export function getPieOption(data: IPieData[]): EChartsOption {
  return {
    title: {
      text: `充电桩总数`,
      top: '50%',
      left: '50%',
      padding: [-20, 0, 0, -100],
      textStyle: {
        fontSize: 19,
        color: 'white',
      },

      // 副标题使用-富文本语法：{style_name|value}， 注意不能有空格
      subtext: `{totalSty|${calcTotal(data)}}`,
      subtextStyle: {
        rich: {
          totalSty: {
            fontSize: 19,
            color: 'white',
            width: 90,
            align: 'center',
          },
        },
      },
    },
    legend: {
      orient: 'vertical',
      right: '10%',
      top: '18%',
      itemGap: 20,
      itemWidth: 16,
      itemHeight: 16,
      icon: 'rect',
      // 自定义图例的名称
      formatter(name: string) {
        // 图例文本格式化 + 富文本定制样式
        const currentItem = data.find(item => item.name === name)!
        return (
          `{nameSty|${
            currentItem.name
          }}\n`
          + `{numberSty|${
            currentItem.value
          }个 }`
          + `{preSty|${
            currentItem.percentage
          }}`
        )
      },

      textStyle: {
        rich: {
          nameSty: {
            fontSize: 12,
            color: '#FFFFFF',
            padding: [10, 14],
          },
          numberSty: {
            fontSize: 12,
            color: '#40E6ff',
            padding: [0, 0, 0, 14],
          },
          preSty: {
            fontSize: 12,
            color: '#40E6ff',
          },
        },
      },
    },
    series: [
      {
        type: 'pie',
        center: ['40%', '50%'], // 饼图的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标。
        radius: ['30%', '75%'], // 饼图的半径。数组的第一项是内半径，第二项是外半径。
        label: {
          show: false,
        },
        data: getOptionData(data),
        roseType: 'area', //  area 玫瑰图, 圆心角一样，通过半径展现数据大小( 默认为false )
      },
    ],
  }
}
