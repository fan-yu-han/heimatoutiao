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
          <el-dropdown @command="clickMenu">
            <span class="el-dropdown-link">
               {{userInfo.name}}
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item  command='info'>黄金糕</el-dropdown-item>
              <el-dropdown-item command='git'>狮子头</el-dropdown-item>
              <el-dropdown-item command='tuichu'>退出</el-dropdown-item>

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
    this.$axios({
      url: '/user/profile'

    }).then(result => {
      this.userInfo = result.data
    })
  },
  methods: {
    clickMenu (command) {
      if (command === 'info') {

      } else if (command === 'git') {
        window.location.href = 'https://github.com/fan-yu-han/heimatoutiao'// 跳转git地址
      } else { // 退出
        window.localStorage.removeItem('user-token')// 删除令牌
        this.$router.push('/login')// 回到登录页面
      }
    }
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
