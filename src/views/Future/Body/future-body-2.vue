<template>
  <HzCard class="main" style="padding-top: 0rem">
    <div class="content">
      {{(averageHum/16*100).toFixed(1)}}%
      <div>
        <el-tag style="font-size: 22rem">平均湿度</el-tag>
      </div>
    </div>
    <el-carousel trigger="click"  arrow="always" indicator-position="none" :autoplay="false" height="150rem" class="swiper">
      <el-carousel-item v-for="item in humData" class="swiper-item">
        <div class="title">{{(item.avg*100).toFixed(1)}}%</div>
        <div class="date">{{item.date}}</div>
      </el-carousel-item>
    </el-carousel>
  </HzCard>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const data = computed(() => {
  return store.state.weatherData.daily
})
let averageHum = 0
let humData = []
data.value.humidity.forEach(item => {
  averageHum += item.avg
  const date = new Date(item.date)
  humData.push({avg: item.avg, date: `${date.getMonth()+1}月${date.getDate()}日`})
})
</script>

<style lang="less" scoped>
.main {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 22rem;
  .content {
    text-align: center;
    font-size: 50rem;
    margin-right: 25rem;
  }
  .swiper {
    flex: 1;
    display: flex;
    flex-direction: column;
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
