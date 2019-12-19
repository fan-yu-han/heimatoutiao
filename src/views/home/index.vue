<template>
<!-- 一个大容器 -->
  <el-container>
    <!-- 分左右布局 -->
    <el-aside>
      左侧内容
    </el-aside>
    <!-- 右侧内容 -->
    <el-container>
      <!-- 右侧里面再分上下 上面是导航 下面是主要容器 -->
      <el-header>头部</el-header>
      <el-main>主要区域</el-main>
    </el-container>
  </el-container>

</template>

<script>
export default {

}
</script>

<style>

</style>
