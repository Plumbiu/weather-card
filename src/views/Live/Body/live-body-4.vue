<template>
  <HzCard class="main">
    <h2 style="position: absolute; top: 0;left: 30rem;">其他数据</h2>
    <div class="main-card">
      <el-tag>可见度</el-tag>
      {{visibility}}
    </div>
    <div class="main-card">
      <el-tag>云量</el-tag>
      {{cloudrate}}
    </div>
    <div class="main-card">
      <el-tag>气压</el-tag>
      {{pressure}}
    </div>
    <div class="main-card">
      <el-tag>短波辐射通量</el-tag>
      {{dswrf}}
    </div>
    <div class="main-card">
      <el-tag>最近降水带距离</el-tag>
      {{distance}}
    </div>
    <div class="main-card">
      <el-tag>紫外线强度</el-tag>
      {{ulDesc}}
    </div>
  </HzCard>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const data = computed(() => {
  return store.state.weatherData.realtime
})
const visibility = data.value.visibility + '%'
const cloudrate = (data.value.cloudrate*100).toFixed(1) + '%'
const pressure = (data.value.pressure/1000).toFixed(1) + 'kPa'
const dswrf = data.value.dswrf + 'W/M2'
const distance = data.value.precipitation.nearest.distance + 'km'
const ulDesc = data.value.life_index.ultraviolet.desc
</script>

<style lang="less" scoped>
.main {
  position: relative;
  font-size: 28rem;
  display: flex;
  padding-top: 100rem;
  justify-content: center;
  flex-wrap: wrap;
  .main-card {
    width: 50%;
    margin: 24rem 0;
  }
}
.el-tag:deep {
  font-size: 25rem;
}
</style>
