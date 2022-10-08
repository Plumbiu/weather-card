<template>
  <HzCard class="main">
    <div class="temperature">
      {{(averageTem/16).toFixed(1)}}°
      <div>
        <el-tag style="font-size: 22rem">平均温度</el-tag>
      </div>
    </div>
    <el-carousel trigger="click"  arrow="always" indicator-position="none" :autoplay="false" height="150rem" class="swiper">
      <el-carousel-item v-for="item in temData" class="swiper-item">
        <div class="title">{{item.avg}}°C</div>
        <div class="date">{{item.date}}</div>
      </el-carousel-item>
    </el-carousel>
  </HzCard>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
let averageTem = 0
let temData = []
const data = computed(() => {
  return store.state.weatherData.daily
})
data.value.temperature.forEach(item => {
  const date = new Date(item.date)
  averageTem += item.avg
  temData.push({ avg: item.avg, date: `${date.getMonth() + 1}月${date.getDate()}日` })
})
</script>

<style lang="less" scoped>

.main {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 22rem;

  .temperature {
    text-align: center;
    margin-right: 25rem;
    font-size: 50rem;
  }

  .swiper {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding-bottom: 10rem;
    border-bottom: 3rem solid #66b1ff;

    .swiper-item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .title {
        font-size: 50rem;
      }
      .date {
        color: grey;
      }
    }
  }
}
</style>