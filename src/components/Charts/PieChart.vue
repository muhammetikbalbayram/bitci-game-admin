  <template>
    <div class="chart-card" :style="{ width: width, height: height }">
      <h3 class="chart-title">{{ title }}</h3>
      <apexchart class="chart" type="pie" :options="chartOptions" :series="series"></apexchart>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PieChart',
    props: {
      title: {
        type: String,
        required: true,
      },
      series: {
        type: Array,
        required: true,
      },
      options: {
        type: Object,
        required: true,
      },
      labels: {
        type: Array,
        default: () => [],
      },
      colors: {
        type: Array,
        default: () => [],
      },
      showToolbar: {
        type: Boolean,
        default: false
      },
      width: {
        type: String,
        default: '48%',
      },
      height: {
        type: String,
        default: '500px',
      },
    },
    computed: {
      chartOptions() {
        return {
          ...this.options,
          labels: this.labels.length ? this.labels : this.options.labels,
          colors: this.colors.length ? this.colors : this.options.colors,
          chart: {
            ...this.options.chart,
            toolbar: {
              ...this.options.chart?.toolbar,
              show: this.showToolbar
            },
          },
        };
      },
    },
  };
  </script>
  
  <style scoped>
  .chart-card {
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 20px;
  }

    .chart-title {
    font-size: 1.5rem;
    margin-bottom: 15px;
    }
    .chart {
        height: 800px;
        flex-grow: 1;
    }
  </style>
  