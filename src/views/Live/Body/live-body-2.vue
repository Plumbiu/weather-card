<template>
  <HzCard class="main">
    <HzPiece :top-data="temperature" :bottom-data="comfortDesc" />
    <div class="weather">
      <div class="top">
        <div class="cloud">{{cloud}}</div>
        <el-tag>{{aqi}}</el-tag>
      </div>
      <div class="bottom">
        <div>体感{{appTem}}°</div>
        <div style="margin: 0 20rem">
          {{wind}}
        </div>
        <div>湿度{{humidity}}%</div>
      </div>
    </div>
    <HzPiece :top-data="skycon" :bottom-data="skycon" skycon />
  </HzCard>
</template>

<script setup>
import { computed } from 'vue'

import { judgeCloud, judgeRain, judgeWind } from '@/utils/utils';
import { useStore } from 'vuex'
const store = useStore()
const data = computed(() => {
  return store.state.weatherData.realtime
})
const temperature = data.value.temperature.toFixed(0) + '°'
const comfortDesc = data.value.life_index.comfort.desc 
const cloud = judgeCloud(data.value.cloudrate)
const aqi = data.value.air_quality.aqi.chn + data.value.air_quality.description.chn
const appTem = data.value.apparent_temperature
const wind = judgeWind(data.value.wind.speed, data.value.wind.direction)
const humidity = (data.value.humidity*100).toFixed(0)
const skycon = judgeRain(data.value.skycon)

</script>

<style lang="less" scoped>
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  .weather {
    display: flex;
    padding: 0 30rem;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    .top {
      display: flex;
      justify-content: center;
      align-items: center;
      .cloud {
        font-size: 50rem;
        font-weight: 700;
        margin-right: 25rem;
      }
    }
    .bottom {
      display: flex;
      color: grey;
      justify-content: space-between;
      align-items: center;
      font-size: 25rem;
      margin: 10rem 0rem;
    }
  }
}
.el-tag:deep {
  font-size: 21rem;
}
</style>
