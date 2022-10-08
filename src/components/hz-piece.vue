<template>
  <div class="wrap">
    <div v-if="!skycon" class="piece-top">{{props.topData}}</div>
    <div v-else class="piece-top">
      <FontAwesomeIcon v-if="skycon==='晴天'" :icon="faSun" style="color: #ef5444" />
      <FontAwesomeIcon v-else-if="topData==='多云'" :icon="faCloudSun" style="color: #5487ff" />
      <FontAwesomeIcon v-else-if="topData=== '阴'" :icon="faCloud" style="color: grey" />
      <FontAwesomeIcon v-else-if="topData.indexOf('雨')!==-1" :icon="faCloudRain" style="color: grey" />
      <FontAwesomeIcon v-else-if="topData.indexOf('雪')!==-1" :icon="faSnowflake" style="color: grey" />
      <FontAwesomeIcon v-else-if="topData=== '雾'" :icon="faFrog" style="color: grey" />
      <FontAwesomeIcon v-else-if="topData.indexOf('霾')!==-1" :icon="faSmoking" style="color: grey" />
      <FontAwesomeIcon v-else-if="topData==='浮沉' || skycon === '沙尘'" :icon="faTornado" style="color: grey" />
      <FontAwesomeIcon v-else-if="topData==='大风'" :icon="faWind" style="color: grey" />
    </div>
    <div class="piece-bottom">
      <el-tag style="font-size: 21rem">{{props.bottomData}}</el-tag>
    </div>

  </div>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSun, faCloudSun, faCloud, faSnowflake, faFrog, faSmoking, faWind, faTornado, faCloudRain } from '@fortawesome/free-solid-svg-icons'
const props = defineProps({
  topData: {
    type: String
  },
  bottomData: {
    type: String
  },
  skycon: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="less">
.wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .piece-top {
    font-size: 75rem;
  }
}

</style>