<template>
  <div>
    TEST
    <GitMatrix v-if="chartData" :chartData="chartData" :options="options" />
  </div>
</template>

<script>
import GitMatrix from '../components/GitMatrix'
import axios from 'axios'

export default {
  name: 'test',
  components: { GitMatrix },
  data: () => ({
    chartData: undefined,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: { display: false },
      tooltips: {
        displayColors: false,
        callbacks: {
          title: ({ label }) => label,
          label: ({ index, label }, { datasets }) => `${label}, Commits: ${datasets[0].data[index].count}`
        }
      },
      scales: {
        xAxes: [{
          type: 'time',
          position: 'top',
          offset: true,
          time: {
            unit: 'week',
            round: 'week',
            displayFormats: {
              week: 'MMM'
            }
          },
          ticks: {
            autoSkip: true
          },
          gridLines: {
            display: false,
            drawBorder: false,
            tickMarkLength: 0
          }
        }],
        yAxes: [{
          type: 'time',
          offset: true,
          position: 'bottom',
          time: {
            unit: 'day'
          },
          ticks: {
            max: 60
          },
         displayFormats: {
            week: 'MMM DD'
          },
          gridLines: {
            display: false,
            drawBorder: false,
            tickMarkLength: 0
          }
        }]
      }
    }
  }),
  async created() {
    this.chartData = {
      datasets: [{
        label: 'Commits',
        data: (await this.$axios.get('http://localhost:5000/api/matrix/awtkns')).data.days,
        borderWidth: 1,
        borderSkipped: false,
        hoverBorderColor: 'yellow',
        backgroundColor: ({ dataset, dataIndex }) => dataset.data[dataIndex].color,
        width: 10,
        height: 10,
      }]
    }
  }
}
</script>
