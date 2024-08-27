<template>
  <div>
    {{ $t('global.dashboard') }}
  </div>
  <div>
    <div class="card-container">
      <div class="card" v-for="card in cards" :key="card.id">
        <div class="card-icon">
          <i :class="card.icon"></i>
        </div>
        <div class="card-info">
          <p class="card-title">{{ card.title }}</p>
          <p class="card-count">{{ card.count }}</p>
        </div>
        <div 
          class="card-percentage"
          :class="{ 'increase': card.percentage > 0, 'decrease': card.percentage < 0 }"
        >
          {{ card.percentage > 0 ? '+' : '' }}{{ card.percentage }}%
        </div>
      </div>
    </div>
  </div>
  <div class="chart-container">
    <div class="chart-card">
      <h3 class="chart-title">Players</h3>
      <apexchart type="pie" :options="pieOptions" :series="pieSeries"></apexchart>
    </div>
    <div class="chart-card">
      <h3 class="chart-title">Playing Hours(Daily)</h3>
      <apexchart type="bar" :options="barOptions" :series="barSeries"></apexchart>
    </div>
  </div>
  <div class="chart-container">
    <div class="chart-card half-width">
      <h3 class="chart-title">First Time Players (Daily)</h3>
      <apexchart type="area" :options="areaOptions" :series="areaSeries"></apexchart>
    </div>
    <div class="chart-card half-width">
      <h3 class="chart-title">Income vs Outcome</h3>
      <apexchart type="line" :options="comboOptions" :series="comboSeries"></apexchart>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  title: ({ $t }) => $t('global.dashboard'),
  data() {
    return {
      cards: [
        { id: 1, title: "Games", count: 120, icon: "fas fa-gamepad", percentage: 5 },
        { id: 2, title: "Game Room", count: 5, icon: "fas fa-dice", percentage: -2 },
        { id: 3, title: "Players", count: 4500, icon: "fas fa-users", percentage: 10 },
        { id: 4, title: "Download Count", count: 32000, icon: "fas fa-download", percentage: -7 },
        { id: 5, title: "Play Time", count: "250 hrs", icon: "fas fa-clock", percentage: 3 },
      ],
      pieSeries: [55, 30, 15],
      pieOptions: {
        labels: ['Male', 'Female', 'Others'],
        colors: ['#007bff', '#28a745', '#ffc107'],
      },
      barSeries: [
        {
          name: "Playing Hours",
          data: [40, 55, 32, 64, 75, 43, 55],
        },
      ],
      barOptions: {
        chart: {
          height: 350,
          type: 'bar',
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded',
          },
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        },
      },
      areaSeries: [
      {
        name: "First Time Players",
        data: [10, 20, 15, 30, 25, 40, 35],
      },
      ],
      areaOptions: {
        chart: {
          type: 'area',
          height: 350,
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        },
      },
      comboSeries: [
        {
          name: 'Income',
          type: 'column',
          data: [7000, 8000, 7500, 8500, 9000, 9500, 11000],
        },
        {
          name: 'Outcome',
          type: 'line',
          data: [3000, 4000, 4500, 3500, 5000, 4800, 5300],
        },
      ],
      comboOptions: {
        chart: {
          height: 350,
          type: 'line',
        },
        stroke: {
          width: [0, 4],
        },
        plotOptions: {
          bar: {
            columnWidth: '55%',
          },
        },
        dataLabels: {
          enabled: false,
          enabledOnSeries: [1],
        },
        xaxis: {
          categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        },
        yaxis: [
          {
            title: {
              text: 'Income',
            },
          },
          {
            opposite: true,
            title: {
              text: 'Outcome',
            },
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.card-container {
  display: flex;
  gap: 16px;
  margin-top: 20px;
}

.card {
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 200px;
  height: 200px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-10px);
}

.card-icon {
  font-size: 2.5rem;
  color: #007bff;
  margin-bottom: 15px;
}

.card-info {
  margin-bottom: auto;
}

.card-title {
  font-size: 1.2rem;
  color: #666666;
  margin: 0;
}

.card-count {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333333;
  margin-top: 5px;
}

.card-percentage {
  font-size: 0.9rem;
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 4px;
  margin-top: 15px;
}

.increase {
  background-color: #ffc107;
  color: #333333;
}

.decrease {
  background-color: #dc3545;
  color: #ffffff;
}

.chart-container {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  gap: 16px;
}

.chart-card {
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 48%;
  height: 500px;
}

.chart-title {
  font-size: 1.5rem;
  margin-bottom: 15px;
}
.chart-card.half-width {
  width: 48%;
}
</style>