<template>
  <div>
    <div class="datatable-container">
      <p class="datatable-title">Commission Earnings</p>
      <DataTable :value="commissionEarnings" stripedRows>
        <Column field="gameName" header="Game Name" sortable></Column>
        <Column field="gameRoom" header="Game Room" sortable></Column>
        <Column field="startDate" header="Start Date" sortable :style="{ width: '150px' }"></Column>
        <Column field="endDate" header="End Date" sortable :style="{ width: '150px' }"></Column>
        <Column field="attendance" header="Attendance" sortable></Column>
        <Column field="winners" header="Winners Count" sortable :style="{ width: '150px' }"></Column>
        <Column field="asset" header="Asset" sortable></Column>
        <Column field="assetQuantity" header="Asset Quantity" sortable></Column>
        <Column field="commissionRate" header="Commission Rate" sortable></Column>
        <Column
          field="paidStatus"
          header="Paid Status"
          sortable
        >
          <template #body="{ data }">
            <span :class="{'status-paid': data.paidStatus === 'Paid', 'status-unpaid': data.paidStatus === 'Unpaid'}">
              {{ data.paidStatus }}
            </span>
          </template>
        </Column>
      </DataTable>
    </div>
    <div class="datatable-container">
      <p class="datatable-title">Winners List</p>
      <DataTable :value="winnersList" stripedRows>
        <Column field="winnerName" header="Winner Name" sortable></Column>
        <Column field="winnerId" header="Winner ID" sortable></Column>
        <Column field="date" header="Date" sortable></Column>
        <Column field="wonAsset" header="Won Asset" sortable></Column>
        <Column field="quantity" header="Quantity" sortable></Column>
        <Column
          field="paidStatus"
          header="Paid Status"
          sortable
        >
          <template #body="{ data }">
            <span :class="{'status-paid': data.paidStatus === 'Paid', 'status-unpaid': data.paidStatus === 'Unpaid'}">
              {{ data.paidStatus }}
            </span>
          </template>
        </Column>
      </DataTable>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Reports',
  data() {
    return {
      commissionEarnings: [
        { gameName: 'Game A', gameRoom: 'Room 1', startDate: '2024-01-01', endDate: '2024-01-31', attendance: 100, winners: 5, asset: 'BTC', assetQuantity: 1.5, commissionRate: '10%', paidStatus: 'Paid' },
        { gameName: 'Game B', gameRoom: 'Room 2', startDate: '2024-02-01', endDate: '2024-02-28', attendance: 120, winners: 8, asset: 'ETH', assetQuantity: 2.0, commissionRate: '12%', paidStatus: 'Paid' },
        { gameName: 'Game C', gameRoom: 'Room 3', startDate: '2024-03-01', endDate: '2024-03-31', attendance: 80, winners: 3, asset: 'LTC', assetQuantity: 1.0, commissionRate: '8%', paidStatus: 'Unpaid' },
        { gameName: 'Game D', gameRoom: 'Room 4', startDate: '2024-04-01', endDate: '2024-04-30', attendance: 95, winners: 6, asset: 'XRP', assetQuantity: 0.8, commissionRate: '7%', paidStatus: 'Paid' },
        { gameName: 'Game E', gameRoom: 'Room 5', startDate: '2024-05-01', endDate: '2024-05-31', attendance: 110, winners: 7, asset: 'ADA', assetQuantity: 3.2, commissionRate: '9%', paidStatus: 'Unpaid' },
        { gameName: 'Game F', gameRoom: 'Room 6', startDate: '2024-06-01', endDate: '2024-06-30', attendance: 85, winners: 4, asset: 'DOGE', assetQuantity: 1000, commissionRate: '5%', paidStatus: 'Paid' },
        { gameName: 'Game G', gameRoom: 'Room 7', startDate: '2024-07-01', endDate: '2024-07-31', attendance: 130, winners: 9, asset: 'BNB', assetQuantity: 2.5, commissionRate: '11%', paidStatus: 'Unpaid' },
        { gameName: 'Game H', gameRoom: 'Room 8', startDate: '2024-08-01', endDate: '2024-08-31', attendance: 105, winners: 6, asset: 'DOT', assetQuantity: 1.7, commissionRate: '6%', paidStatus: 'Paid' },
        { gameName: 'Game I', gameRoom: 'Room 9', startDate: '2024-09-01', endDate: '2024-09-30', attendance: 90, winners: 5, asset: 'SOL', assetQuantity: 2.3, commissionRate: '8%', paidStatus: 'Unpaid' },
        { gameName: 'Game J', gameRoom: 'Room 10', startDate: '2024-10-01', endDate: '2024-10-31', attendance: 115, winners: 7, asset: 'AVAX', assetQuantity: 1.4, commissionRate: '10%', paidStatus: 'Paid' }
      ],
      winnersList: [
        { winnerName: 'John Doe', winnerId: '12345', date: '2024-01-15', wonAsset: 'BTC', quantity: 0.5, paidStatus: 'Paid' },
        { winnerName: 'Jane Smith', winnerId: '67890', date: '2024-02-20', wonAsset: 'ETH', quantity: 1.0, paidStatus: 'Unpaid' },
        { winnerName: 'Alice Brown', winnerId: '54321', date: '2024-03-25', wonAsset: 'LTC', quantity: 0.2, paidStatus: 'Paid' },
        { winnerName: 'Bob White', winnerId: '98765', date: '2024-04-10', wonAsset: 'XRP', quantity: 0.3, paidStatus: 'Unpaid' },
        { winnerName: 'Charlie Green', winnerId: '24680', date: '2024-05-18', wonAsset: 'ADA', quantity: 0.8, paidStatus: 'Paid' },
        { winnerName: 'Dana Black', winnerId: '13579', date: '2024-06-12', wonAsset: 'DOGE', quantity: 500, paidStatus: 'Unpaid' },
        { winnerName: 'Eve Blue', winnerId: '10293', date: '2024-07-22', wonAsset: 'BNB', quantity: 1.2, paidStatus: 'Paid' },
        { winnerName: 'Frank Yellow', winnerId: '90817', date: '2024-08-30', wonAsset: 'DOT', quantity: 0.5, paidStatus: 'Unpaid' },
        { winnerName: 'Grace Red', winnerId: '31415', date: '2024-09-05', wonAsset: 'SOL', quantity: 1.1, paidStatus: 'Paid' },
        { winnerName: 'Hank Purple', winnerId: '11235', date: '2024-10-14', wonAsset: 'AVAX', quantity: 0.7, paidStatus: 'Paid' }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.datatable-container {
  margin-top: 30px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow-x: auto;
}

.datatable-title {
  font-size: 1.5rem;
  margin-bottom: 15px;
}
.status-paid {
  background-color: #28a745;
  color: #ffffff;
  border-radius: 4px;
  padding: 5px;
  text-align: center;
}

.status-unpaid {
  background-color: #dc3545;
  color: #ffffff;
  border-radius: 4px;
  padding: 5px;
  text-align: center;
}
</style>
