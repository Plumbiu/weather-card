<template>
  <HzCard style="padding-bottom: 0">
    <el-button @click="showData" type="primary">全部</el-button>
    <el-button @click="filterData">降水</el-button>
    <el-table class="table" empty-text="今天没有雨喔" :data="tableData"
      style="font-size: 25rem;width: 100%;height: 500rem;margin-top: 20rem;">
      <el-table-column prop="datetime" label="时间" />
      <el-table-column prop="probability" label="降水概率" />
      <el-table-column prop="value" label="降水量" />
    </el-table>
  </HzCard>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed, ref } from 'vue'
const store = useStore()
const data = computed(() => {
  return store.state.weatherData.hourly.precipitation
})
const tableData = ref(null)
tableData.value = data.value.map(item => {
  const date = new Date(item.datetime)
  return {
    datetime: date.getHours() + ':00',
    value: item.value + 'ml',
    probability: item.probability + '%'
  }
})
// 表格数据
let saveTableData = tableData.value
const filterData = () => {
  tableData.value = saveTableData.filter(item => {
    return item.probability !== '0%'
  })
}
const showData = () => {
  tableData.value = saveTableData
}
</script>

<style lang="less" scoped>
.el-button:deep {
  height: 65rem;
  padding: 15rem 30rem;
  font-size: 22rem;
  max-width: 120rem;
  border-radius: 10rem;
}
</style>

<style lang="less">
.el-table {
  .cell {
    height: 70rem;
    line-height: 70rem;
  }
}
</style>