<template>
  <el-row class="layout-header" type="flex" align="middle">
      <!-- 先定义一行 -->
      <el-col class="left" :span="12">
          <i class='el-icon-s-unfold'></i>
            <span>江苏传值博客教育有限公司</span>
      </el-col>

      <el-col :span="12" class="right">

          <el-row type='flex' justify='end' align="middle">
               <img src="../../assets/img/avatar.jpg" alt="">
            <el-dropdown>
                <span>逆水</span>
                <el-dropdown-menu slot="dropdown"></el-dropdown-menu>
                <el-menu-item>个人信息</el-menu-item>
                <el-menu-item>git地址</el-menu-item>
                <el-menu-item>退出</el-menu-item>
            </el-dropdown>
          </el-row>

      </el-col>
  </el-row>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
.layout-header{
    height: 60px;
    .left{
        font-size: 20px;
        span{
            color: #2c3e50;
            font-size: 16px;
            margin-left: 4px ;
        }
    }
    .right {
        img{
            height: 40px;
            width: 40px;
            border-radius: 50%;
            margin-right: 5px;
        }
    }
}
</style>
