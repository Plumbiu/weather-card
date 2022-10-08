import * as echarts from "echarts/core"
import { LineChart } from 'echarts/charts'
import {
  GridComponent,
  DataZoomComponent,
  TitleComponent,
  TooltipComponent
} from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'

echarts.use([
  LineChart,
  GridComponent,
  DataZoomComponent,
  TitleComponent,
  TooltipComponent,
  CanvasRenderer
])

export const setLiveCharts = (DOM, x1, x2, y) => {
  const instance = echarts.init(DOM)
  const option = {
    grid: {
      width: '800rem',
    },
    dataZoom: [
      {
        type: 'inside',
        throttle: '50',
        minValueSpan: 6,
        start: 1,
        end: 50,
        zoomLock: true
      }
    ],
    title: {
      text: '24小时预报'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
        label: {
          show: true
        }
      }
    },
    xAxis: [{
      type: 'category',
      data: x1,
      axisLabel: {
        margin: 10
      },
      boundaryGap: false
    }, {
      type: 'category',
      data: x2,
      position: 'bottom',
      axisLabel: {
        margin: 30,
        backgroundColor: '#FE8229',
        padding: 5,
        color: '#fefefe',
        borderRadius: 5
      },
      boundaryGap: false
    }],
    yAxis: {
      type: 'value',
      scale: 4
    },
    series: [
      {
        name: '温度',
        data: y,
        type: 'line',
        label: {
          show: true,
          formatter: (arg) => {
            return arg.value + '°'
          }
        },
        barWidth: '150rem',
        areaStyle: {
          opacity: 0.1
        }
      }
    ]
  }
  instance.setOption(option)
  return instance
}

export const setFutureCharts = (DOM, x1, x2, x3, y1, y2) => {
  const instance = echarts.init(DOM)
  const option = {
    grid: {
      width: '800rem',
    },
    dataZoom: [
      {
        type: 'inside',
        start: 1,
        end: 50
      }
    ],
    title: {
      text: '温度与风速'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
        label: {
          show: true
        }
      }
    },
    xAxis: [{
      type: 'category',
      data: x1,
      axisLabel: {
        margin: 10
      },
      boundaryGap: false
    }, {
      type: 'category',
      data: x2,
      position: 'bottom',
      axisLabel: {
        margin: 25,
        backgroundColor: '#FE8229',
        padding: 5,
        color: '#fefefe',
        borderRadius: 5
      },
      boundaryGap: false
    }, {
      type: 'category',
      data: x3,
      position: 'bottom',
      axisLabel: {
        margin: 50,
        backgroundColor: '#2982FE',
        padding: 5,
        width: 30,
        color: '#fefefe',
        borderRadius: 5
      },
      boundaryGap: false
    }],

    yAxis: {
      type: 'value',
      scale: 4
    },
    series: [
      {
        name: '温度',
        data: y1,
        type: 'line',
        label: {
          show: true,
          formatter: (arg) => {
            return arg.value + '°'
          }
        },
        areaStyle: {
          opacity: 0.1
        }
      },
      {
        name: '指数',
        data: y2,
        type: 'line',
        label: {
          show: true,
          formatter: (arg) => {
            if(arg.value <= 3) {
              return '短袖'
            } else if(arg.value <= 5) {
              return '衬衫'
            } else if(arg.value <= 8) {
              return '棉袄'
            }
          }
        },
        areaStyle: {
          opacity: 0.3
        }
      }
    ]
  }
  instance.setOption(option)
  return instance
}
