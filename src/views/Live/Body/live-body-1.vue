<template>
  <HzCard class="main">
    <HzPiece :top-data="getDay()" :bottom-data="getRealTime()" />
    <div class="content">
      <div class="advice">
        <el-tag type="warning">建议</el-tag>
        {{advice}}
      </div>
      <div class="change">
        <el-tag type="warning">变化</el-tag>
        {{change}}
      </div>
    </div>
    <HzPiece :top-data="humidity" bottom-data="湿度" />
  </HzCard>
</template>

<script setup>
import { getDay, getRealTime } from '@/utils/utils'
import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const data = computed(() => {
  return store.state.weatherData
})
const change = data.value.hourly.description
const advice = data.value.forecast_keypoint
const humidity = (data.value.realtime.humidity*100).toFixed(0) + '%'

</script>

<style lang="less" scoped>
.main {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .content {
    flex: 1;
    font-size: 25rem;
    padding: 0 50rem;
    text-align: left;
    .advice {
      padding-bottom: 10rem;
      color: grey;
    }
    .change {
      padding-top: 15rem;
      color: grey;
    }
  }
}
.el-tag:deep {
  font-size: 21rem;
}
</style>
