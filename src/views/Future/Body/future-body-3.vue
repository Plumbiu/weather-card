<template>
  <HzCard>
    <el-button :type="lifeMode === 'cold' ? 'primary' : ''" @click="changeLifeMode('cold')">感冒指数</el-button>
    <el-button :type="lifeMode === 'comfort' ? 'primary' : ''" @click="changeLifeMode('comfort')">生活指数</el-button>
    <el-button :type="lifeMode === 'ultraviolet' ? 'primary' : ''" @click="changeLifeMode('ultraviolet')">紫外强度</el-button>
    <el-table v-if="lifeMode === 'cold'" height="500rem" :data="lifeIndexColdRiskData">
      <el-table-column prop="date" label="日期"></el-table-column>
      <el-table-column prop="index" label="感冒指数"></el-table-column>
      <el-table-column prop="desc" label="描述"></el-table-column>
    </el-table>
    <el-table v-else-if="lifeMode === 'comfort'" height="500rem" :data="lifeComfortData">
      <el-table-column prop="date" label="日期"></el-table-column>
      <el-table-column prop="index" label="生活指数"></el-table-column>
      <el-table-column prop="desc" label="描述"></el-table-column>
    </el-table>
    <el-table v-else-if="lifeMode === 'ultraviolet'" height="500rem" :data="lifeIndexUltravioletData">
      <el-table-column prop="date" label="日期"></el-table-column>
      <el-table-column prop="index" label="等级"></el-table-column>
      <el-table-column prop="desc" label="描述"></el-table-column>
    </el-table>
  </HzCard>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const data = computed(() => {
  return store.state.weatherData.daily
})
const lifeMode = ref('cold')
const changeLifeMode = (keyword) => {
  lifeMode.value = keyword
}

let lifeIndexColdRiskData = data.value.life_index.coldRisk.map(item => {
  const date = new Date(item.date)
  return {
    date: (date.getMonth() + 1).toString() + '-' + date.getDate(),
    index: item.index,
    desc: item.desc
  }
})
let lifeComfortData = data.value.life_index.comfort.map(item => {
  const date = new Date(item.date)
  return {
    date: (date.getMonth() + 1).toString() + '-' + date.getDate(),
    index: item.index,
    desc: item.desc
  }
})
let lifeIndexUltravioletData = data.value.life_index.ultraviolet.map(item => {
  const date = new Date(item.date)
  return {
    date: (date.getMonth() + 1).toString() + '-' + date.getDate(),
    index: item.index,
    desc: item.desc
  }
})

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
    font-size: 26rem;
    height: 70rem;
    line-height: 70rem;
  }
}
</style>