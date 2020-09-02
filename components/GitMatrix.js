import { generateChart, mixins  } from 'vue-chartjs'
import 'chartjs-chart-matrix'
import axios from 'axios'

const { reactiveProp } = mixins
const GitMatrix = generateChart('git-matrix', 'matrix')

export default {
  name: 'GitMatrix',
  extends: GitMatrix,
  mixins: [reactiveProp],
  props: {
    options: {
      type: Object,
      default: null
    }
  },
  mounted() {
    this.renderChart(this.chartData, this.options)
  }
}

