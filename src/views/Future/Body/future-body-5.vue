<template>
  <HzCard class="main">
    <h2>其他数据</h2>
    <div class="main-card">
      <el-tag style="font-size: 25rem">警报</el-tag>
      <template v-if="alertDesc">
        {{alertDesc}}
      </template>
      <template v-else>
        无
      </template>
    </div>
    <div class="main-card">
      <el-tag style="font-size: 25rem">紫外线强度</el-tag>
      {{(dswrfCount/16).toFixed(0)}}
    </div>
  </HzCard>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const data = computed(() => {
  return store.state.weatherData
})
let alertDesc
let dswrfCount = 0
if (data.value.alert.content && !data.value.alert.content.length) {
  alertDesc = data.value.alert.content.description
}
data.value.daily.dswrf.forEach(item => {
  dswrfCount += item.avg
})
</script>

<style lang="less" scoped>
.main {
  position: relative;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 30rem;
  padding-top: 100rem;
  font-size: 28rem;
  h2 {
    position: absolute;
    top: 0;
    left: 30rem;
  }
  .main-card {
    width: 50%;
    margin: 24rem 0;
  }
}
</style>
