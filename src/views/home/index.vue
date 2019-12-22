<template>
<!-- 一个大容器 -->
  <el-container>
    <!-- 分左右布局 -->
    <el-aside  style="min-height: 100vh; background-color: #353b4e;width:230px">
     <layout-aside ></layout-aside>
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
// import layoutHeader from '../../components/home/layout-header'
// import layoutAside from '../../components/home/layout-aside' 可以删除了

export default {
  // 引用然后注册
  components: {
    // 'layout-aside': layoutAside,
    // 'layout-header': layoutHeader
  }
}
</script>

<style>

</style>
