<template>
  <div class="header">
    <el-menu default-active="$route.path" mode="horizontal" router placeholder=" ">
      <el-sub-menu index="sub">
        <template #title>天气</template>
        <el-menu-item index="/live">实时天气</el-menu-item>
        <el-menu-item index="/future">天气预报</el-menu-item>
      </el-sub-menu>
      <el-menu-item disabled>{{props.provinceName?props.provinceName:'杭州'}}</el-menu-item>
      <div class="togglen-btn" @click="toggleDark()">
        <el-switch size="large" v-model="isDark" style="margin-left: 0;" inline-prompt :active-icon="Moon"
          :inactive-icon="Sunny" @change="toggleDark()" />
      </div>
    </el-menu>
  </div>
</template>

<script setup>
import { useDark, useToggle } from '@vueuse/core'
import { Sunny, Moon } from '@element-plus/icons-vue'
const isDark = useDark()
const toggleDark = useToggle(isDark)
isDark.value = false
const props = defineProps({
  provinceName: {
    type: String,
    defualt: '杭州'
  }
})
</script>

<style lang="less" scoped>
.header {
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 120rem;
  z-index: 9999;
  transition: all .25s;
  border-bottom: 1rem solid #ddd;
  background-color: var(--el-bg-color);

  &:deep {
    .el-menu {
      width: 100%;
      padding-left: 130rem;
      height: 121rem;
      &-item {
        font-size: 26rem;
      }
      .el-sub-menu__title {
        font-size: 26rem;
        .el-icon {
          font-size: 26rem;
        }
      }
    }
    .el-menu--horizontal {
      justify-content: space-around;
    }
    .el-switch {
      --el-switch-on-color: #409EFF;
      --el-switch-off-color: #424243;
      .el-switch__inner {
        font-size: 35rem;
      }
    }
  }
}


.togglen-btn {
  line-height: 120rem;
}
</style>
<style>
.el-cascader-menu__wrap.el-scrollbar__wrap {
  height: 600rem;
}

.el-cascader-menu__list {
  padding: 10rem 8rem;
}

.el-cascader-node {
  padding: 0 40rem 0 10rem;
  height: 65rem;
  line-height: 65rem;
  font-size: 23rem;
}

.el-cascader-menu {
  min-width: 250rem;
  width: 250rem;
}

.el-menu--popup {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  z-index: 99999;
  height: 200rem;
  min-width: 200rem;
  padding: 0rem 0;
}

.el-menu--popup .el-menu-item {
  font-size: 28rem;
}
</style>
