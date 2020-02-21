import { generateChart } from 'vue-chartjs'
import 'chart.js'
import 'chartjs-chart-matrix'
import moment from 'moment'

const GitMatrix = generateChart('git-matrix', 'matrix')

export default {
  name: 'GitMatrix',
  extends: GitMatrix,
  data() {
    return {
      chartData: {
        datasets: [
          {
            label: 'My Matrix',
            data: this.generateData(),
            borderWidth: 1,
            borderSkipped: false,
            hoverBorderColor: 'yellow'
          }
        ]
      },
      options: {
        responsive: true,
        legend: {
          display: false
        },
        tooltips: {
          displayColors: false,
          callbacks: {
            title() {
              return ''
            },
            label(item, data) {
              const v = data.datasets[item.datasetIndex].data[item.index]
              return ['d: ' + v.d, 'v: ' + v.v.toFixed(2)]
            }
          }
        },
        scales: {
          xAxes: [
            {
              type: 'time',
              position: 'bottom',
              offset: true,
              time: {
                unit: 'week',
                round: 'week',
                displayFormats: {
                  week: 'MMM DD'
                }
              },
              ticks: {
                maxRotation: 0,
                autoSkip: true
              },
              gridLines: {
                display: false,
                drawBorder: false,
                tickMarkLength: 0
              }
            }
          ],
          yAxes: [
            {
              type: 'time',
              offset: true,
              position: 'right',
              time: {
                unit: 'day',
                parser: 'e',
                displayFormats: {
                  day: 'ddd'
                }
              },
              ticks: {
                // workaround, see: https://github.com/chartjs/Chart.js/pull/6257
                maxRotation: 90
              },
              gridLines: {
                display: false,
                drawBorder: false,
                tickMarkLength: 0
              }
            }
          ]
        }
      }
    }
  },
  methods: {
    generateData() {
      const data = []
      let dt = moment()
        .subtract(365, 'days')
        .startOf('day')
      const end = moment().startOf('day')
      while (dt <= end) {
        data.push({
          x: dt.format('YYYY-MM-DD'),
          y: dt.format('e'),
          d: dt.format('YYYY-MM-DD'),
          v: Math.random() * 50
        })
        dt = dt.add(1, 'day')
      }
      return data
    }
  },
  mounted() {
    this.renderChart(this.chartData, this.options)
  }
}
