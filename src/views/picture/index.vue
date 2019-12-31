<template>
  <el-card>
      <bread-crumb slot="header">
            <template  slot="title">图文数据</template>
      </bread-crumb>

       <div ref="myChart" class='echarts'></div>
  </el-card>
</template>

<script>

import echarts from 'echarts'
export default {
  mounted () {
    let myChart = echarts.init(this.$refs.myChart)// 完成图表初始化
    myChart.setOption()
  }
}
</script>

<style>
.echarts {
     width:600px;
     height: 400px;
 }
</style>
