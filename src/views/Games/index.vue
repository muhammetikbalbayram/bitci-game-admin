<template>
  <div>
    {{ $t('global.games') }}
  </div>
  <div>
    <div class="card-container">
      <div class="card">
        <div class="card-info">
          <p class="card-title">Total Income</p>
          <p class="card-count">${{ totalIncome }}</p>
        </div>
        <div class="card-chart">
          <apexchart :height="donutOptions.chartHeight" :width="donutOptions.chartWidth" type="donut" :options="donutOptions" :series="donutSeries"></apexchart>
        </div>
      </div>
      <div class="card">
        <div class="card-info">
          <p class="card-title">Daily Income</p>
        </div>
        <div class="card-chart">
          <apexchart :height="dailyIncomeOptions.chartHeight" :width="dailyIncomeOptions.chartWidth" type="bar" :options="dailyIncomeOptions" :series="dailyIncomeSeries"></apexchart>
        </div>
      </div>
      <div class="card">
        <div class="card-info">
          <p class="card-title">Daily Downloads</p>
          <p class="card-count">{{ dailyDownloads }}</p>
        </div>
        <div class="card-chart">
          <apexchart :height="dailyDownloadsOptions.chartHeight" :width="dailyDownloadsOptions.chartWidth" type="line" :options="dailyDownloadsOptions" :series="dailyDownloadsSeries"></apexchart>
        </div>
      </div>
      <div class="card">
        <div class="card-info">
          <p class="card-title">New Users</p>
          <p class="card-count">{{ newUsers }}</p>
        </div>
        <div class="card-chart">
          <apexchart :height="newUsersOptions.chartHeight" :width="newUsersOptions.chartWidth" type="area" :options="newUsersOptions" :series="newUsersSeries"></apexchart>
        </div>
      </div>
    </div>
    <div class="monthly-chart-container">
      <div class="monthly-income-card">
        <div class="card-info">
          <p class="card-title">Monthly Income</p>
          <apexchart :height="monthlyIncomeOptions.chartHeight" :width="monthlyIncomeOptions.chartWidth" type="area" :options="monthlyIncomeOptions" :series="monthlyIncomeSeries"></apexchart>
        </div>
      </div>
    </div>
    <div class="datatable-container">
      <p class="datatable-title">Game List</p>
      <DataTable :value="games" stripedRows>
        <Column field="gameName" header="Game Name" sortable ></Column>
        <Column field="gameRooms" header="Game Rooms" sortable ></Column>
        <Column field="startDate" header="Start Date" sortable></Column>
        <Column field="endDate" header="End Date" sortable></Column>
        <Column field="attendance" header="Attendance" sortable></Column>
        <Column field="coinCode" header="Coin Code" sortable></Column>
        <Column field="status" header="Status" sortable>
          <template #body="slotProps">
            <span :class="{'status-active': slotProps.data.status === 'Active', 'status-inactive': slotProps.data.status === 'Inactive'}">
              {{ slotProps.data.status }}
            </span>
          </template>
        </Column>
      </DataTable>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Games',
  title: ({ $t }) => $t('global.games'),
  data() {
    return {
      totalIncome: 120000,

      // Donut Chart Data
      donutSeries: [40, 30, 20, 10],
      donutOptions: {
        labels: ['Game A', 'Game B', 'Game C', 'Game D'],
        colors: ['#007bff', '#28a745', '#ffc107', '#dc3545'],
        chart: {
          type: 'donut',
        },
        legend: {
          position: 'bottom',
        },
        plotOptions: {
          pie: {
            donut: {
              size: '60%',
            },
          },
        },
        chartHeight: "100%",
        chartWidth: "100%",
      },
      dailyIncomeSeries: [
        {
          name: "Income",
          data: [120, 150, 180, 140, 160, 200, 180],
        },
      ],
      dailyIncomeOptions: {
        chart: {
          height: 200,
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
        yaxis: {
          title: {
            text: 'Income ($)',
          },
        },
        chartHeight: "100%",
        chartWidth: "100%",
      },
      dailyDownloads: 3000,
      dailyDownloadsSeries: [
        {
          name: "Downloads",
          data: [500, 600, 750, 800, 700, 850, 900],
        },
      ],
      dailyDownloadsOptions: {
        chart: {
          height: 200,
          type: 'line',
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        },
        yaxis: {
          title: {
            text: 'Downloads',
          },
        },
        chartHeight: "100%",
        chartWidth: "100%",
      },
      newUsers: 500,
      newUsersSeries: [
        {
          name: "New Users",
          data: [100, 120, 130, 110, 140, 150, 160],
        },
      ],
      newUsersOptions: {
        chart: {
          height: 350,
          type: 'area',
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        },
        yaxis: {
          title: {
            text: 'Number of Users',
          },
        },
        chartHeight: "100%",
        chartWidth: "100%",
      },
      monthlyIncomeSeries: [
        {
          name: "Monthly Income",
          data: [1000, 2000, 1500, 1800, 2000, 2200, 2500, 2300, 2400, 2600, 2700, 2800],
        },
      ],
      monthlyIncomeOptions: {
        chart: {
          height: 350,
          type: 'area',
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        },
        yaxis: {
          title: {
            text: 'Income ($)',
          },
        },
        chartHeight: '100%',
        chartWidth: '100%',
      },
      games: [
        { gameName: 'Game A', gameRooms: 5, startDate: '2024-01-01', endDate: '2024-01-31', attendance: 1000, coinCode: 'BTC', status: 'Active' },
        { gameName: 'Game B', gameRooms: 8, startDate: '2024-02-01', endDate: '2024-02-28', attendance: 1200, coinCode: 'ETH', status: 'Inactive' },
        { gameName: 'Game C', gameRooms: 3, startDate: '2024-03-01', endDate: '2024-03-31', attendance: 800, coinCode: 'LTC', status: 'Active' },
        { gameName: 'Game D', gameRooms: 6, startDate: '2024-04-01', endDate: '2024-04-30', attendance: 950, coinCode: 'XRP', status: 'Inactive' },
        { gameName: 'Game E', gameRooms: 4, startDate: '2024-05-01', endDate: '2024-05-31', attendance: 1100, coinCode: 'ADA', status: 'Active' },
        { gameName: 'Game F', gameRooms: 7, startDate: '2024-06-01', endDate: '2024-06-30', attendance: 1300, coinCode: 'DOT', status: 'Inactive' },
        { gameName: 'Game G', gameRooms: 9, startDate: '2024-07-01', endDate: '2024-07-31', attendance: 1400, coinCode: 'BCH', status: 'Active' },
        { gameName: 'Game H', gameRooms: 5, startDate: '2024-08-01', endDate: '2024-08-31', attendance: 1050, coinCode: 'XLM', status: 'Inactive' },
        { gameName: 'Game I', gameRooms: 3, startDate: '2024-09-01', endDate: '2024-09-30', attendance: 850, coinCode: 'LINK', status: 'Active' },
        { gameName: 'Game J', gameRooms: 6, startDate: '2024-10-01', endDate: '2024-10-31', attendance: 1200, coinCode: 'XMR', status: 'Inactive' },
        { gameName: 'Game K', gameRooms: 8, startDate: '2024-11-01', endDate: '2024-11-30', attendance: 1350, coinCode: 'DOGE', status: 'Active' },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 20px;
}

.card {
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex: 1 1 calc(25% - 16px);
  box-sizing: border-box;
}

.card-info {
  margin-bottom: 15px;
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

.card-chart {
  width: 100%;
  height: 200px;
}

.monthly-chart-container {
  margin-top: 30px;
  display: flex;
  justify-content: center;
}

.monthly-income-card {
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 100%;
  height: 400px;
}
.monthly-income-card .card-info {
  width: 100%;
  height: 350px;
}
.datatable-container {
  margin-top: 30px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.datatable-title {
  font-size: 1.5rem;
  margin-bottom: 15px;
}

.status-active {
  background-color: #28a745;
  color: #ffffff;
  border-radius: 4px;
  padding: 5px;
}

.status-inactive {
  background-color: #dc3545;
  color: #ffffff;
  border-radius: 4px;
  padding: 5px;
}
</style>
