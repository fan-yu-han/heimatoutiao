<template>
  <div>
    <el-row class="layout-header" type="flex" align="middle">
      <!-- 先定义一行 -->
      <el-col class="left" :span="12">
        <i class="el-icon-s-unfold"></i>
        <span>江苏传值博客教育有限公司</span>
      </el-col>

      <el-col :span="12" class="right">
        <el-row type="flex" justify="end" align="middle">
          <img :src="userInfo.photo?userInfo.photo:defaultImg" alt />
          <el-dropdown>
            <span class="el-dropdown-link">
               {{userInfo.name}}
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>黄金糕</el-dropdown-item>
              <el-dropdown-item>狮子头</el-dropdown-item>
              <el-dropdown-item>螺蛳粉</el-dropdown-item>
              <el-dropdown-item disabled>双皮奶</el-dropdown-item>
              <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userInfo: {}, // 定义一个用户对象
      defaultImg: require('../../assets/img/avatar.jpg')
    }
  },
  created () {
    let token = localStorage.getItem('user-token')// 获取用户令牌
    this.$axios({
      url: '/user/profile',
      headers: {
        // headers 的参数
        Authorization: ` Bearer ${token}`
      }
    }).then(result => {
      this.userInfo = result.data.data
    })
  }
}
</script>

<style lang='less' scoped>
.layout-header {
  height: 60px;
  .left {
    font-size: 20px;
    span {
      color: #2c3e50;
      font-size: 16px;
      margin-left: 4px;
    }
  }
  .right {
    img {
      height: 40px;
      width: 40px;
      border-radius: 50%;
      margin-right: 5px;
    }
  }
}
</style>
