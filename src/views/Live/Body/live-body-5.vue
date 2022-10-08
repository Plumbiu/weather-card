<template>
  <HzCard class="live-chart"></HzCard>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex'
import { setLiveCharts } from '@/plugins/Echarts'
import { judgeWind } from '@/utils/utils'

const store = useStore()
const data = computed(() => {
  return store.state.weatherData.hourly
})
let temXData = []
let temYData = []
let windXData = []
// 24小时温度
data.value.temperature.forEach(item => {
  const date = new Date(item.datetime)
  temXData.push(date.getHours()+ ':00')
  temYData.push(item.value)
})
// 24小时风力
data.value.wind.forEach(item => {
  windXData.push(judgeWind(item.speed, item.direction))
})
onMounted(() => {
  setLiveCharts(document.querySelector('.live-chart'), temXData, windXData, temYData)
})
</script>

<style lang="less" scoped>

.live-chart {
  height: 700rem;
  overflow: scroll;
}
</style>
