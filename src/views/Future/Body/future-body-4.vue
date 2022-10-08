<template>
  <HzCard style="padding-bottom: 50rem">
    <div class="future-chart"></div> 
  </HzCard>
</template>

<script setup>
import { setFutureCharts } from '@/plugins/Echarts'
import { judgeCloud, judgeWind } from '@/utils/utils'
import { computed, onBeforeUnmount, onMounted } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const data = computed(() => {
  return store.state.weatherData.daily
})
let temXData = []
let temYData = []
let windXData = []
let dressYData = []
let cloudXData = []
let chartInstance
data.value.temperature.forEach(item => {
  temYData.push(item.avg)
  const date = new Date(item.date)
  temXData.push(date.getDate() + '日')
})
data.value.wind.forEach(item => {
  windXData.push(judgeWind(item.avg.speed, item.avg.direction))
})
data.value.life_index.dressing.forEach(item => {
  dressYData.push(item.index)
})
data.value.cloudrate.forEach(item => {
  cloudXData.push(judgeCloud(item.avg))
})
onMounted(() => {
  chartInstance = setFutureCharts(document.querySelector('.future-chart'), temXData, windXData, cloudXData, temYData, dressYData)
})
onBeforeUnmount(() => {
  if(!chartInstance) {
    return
  }
  chartInstance.dispose()
  chartInstance = null
})
</script>

<style lang="less" scoped>
.future-chart {
  height: 720rem;
  overflow: auto;
  overflow-x: hidden;
}
</style>
