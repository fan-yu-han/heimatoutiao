<template>
<!-- 一个大容器 -->
  <el-container>
    <!-- 分左右布局 -->
    <el-aside :style="{width:collapse?'60px':'230px'}" style="transition:all 0.5s; min-height: 100vh; background-color: #353b4e;">
     <layout-aside :collapse='collapse' ></layout-aside>
    </el-aside>
    <!-- 右侧内容 -->
    <el-container>
      <!-- 右侧里面再分上下 上面是导航 下面是主要容器 -->
      <el-header>
        <!-- 头部组件 -->
        <layout-header></layout-header>
      </el-header>
      <el-main>
        <!-- 二级路由 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>

</template>

<script>
import eventBus from '../../utils/eventBus'
export default {
  data () {
    return {
      collapse: false // 默认是展开
    }
  },
  created () {
    eventBus.$on('changeCollapse', () => {
      // 头部组件告诉折叠相关的所有组件 要改变了
      this.collapse = !this.collapse
    })
  }

}
</script>

<style>

</style>
