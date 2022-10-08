<template>
  <div class="body_wrap">
    <HzHeader :provinceName="location[1][2]"></HzHeader>
    <div v-if="!load" class="main">
      <router-view />
    </div>
  </div>
  <div class="backdrop" v-if="load" v-loading="load"></div>
  <div class="cascader">
    <el-cascader popper-class="popper" v-model="location" @change="provinceChangeHandler" :options="province"
      placeholder=" ">
    </el-cascader>
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue'
import province from '@/assets/province.json'
import { useStore } from 'vuex'
const store = useStore()

const location = ref([120.3, 30, '杭州'])
const load = ref(true)
const provinceChangeHandler = async () => {
  load.value = true
  await store.dispatch('getData', location.value[1])
  load.value = false
}

onBeforeMount(async () => {
  load.value = true
  await store.dispatch('getData', [120.2, 30.3])
  load.value = false
})
</script>

<style lang="less" scoped>
.main {
  margin-top: 120rem;
}

.cascader {
  position: fixed;
  z-index: 9999;
  top: 4rem;
  left: 20rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20rem 0;

  &:deep {
    .el-cascader {
      line-height: 60rem;
      --el-cascader-menu-font-size: 30rem;

      .el-input {
        line-height: 60rem !important;

        .el-input__wrapper {
          padding: 0rem 0rem;
          width: 70rem;
          height: 70rem;
          border-radius: 50%;

          .el-input__inner {
            color: transparent;
          }

          .el-input__suffix {
            transform: translateX(-22rem);

            .el-icon {
              font-size: 25rem;
            }
          }
        }
      }
    }
  }
}

.backdrop {
  position: fixed;
  z-index: 99999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
</style>
