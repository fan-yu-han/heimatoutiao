<template>
  <div class="login">
    <!-- //放置一个el-card组件 -->
    <el-card class="login-card">
      <div class="title">
        <img src="../../assets/img/logo_index.png" alt="">
      </div>
       <el-form ref="myForm" :model='loginForm' :rules="loginRules">
        <!-- 表单域 里面   放置 input/select/checkbox 相当于一行-->
        <el-form-item prop="mobile">
           <el-input v-model="loginForm.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <!-- 表单域 -->
        <el-form-item prop="code">
          <el-input v-model="loginForm.code" style="width:65%" placeholder="验证码"></el-input>
            <el-button  style="float:right" plain>发送验证码</el-button>
        </el-form-item>
        <el-form-item prop="check">
          <!-- 复选框 -->
          <el-checkbox v-model="loginForm.check">我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button @click="submitLogin" type="primary" style="width:100%">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>

  </div>
</template>

<script>
// import { log } from 'util'
export default {
  data () {
    return {
      loginForm: {
        mobile: '',
        code: '',
        check: false
      },
      loginRules: {
        mobile: [{ required: true, message: '清输入你的手机号' }, {
          pattern: /^1[3456789]\d{9}$/, message: '请输入合法的手机号'
        }],
        code: [{ required: true, message: '清输入你密码' },
          { pattern: /^\d{6}$/, message: '验证码为6位数字' }],
        check: [{ validator: function (rule, value, callback) {
          if (value) {
            callback()
          } else {
            callback(new Error('你应该无条件选择'))
          }
        } }]
      }
    }
  },
  methods: {
    submitLogin () {
      this.$refs.myForm.validate((isOK) => {
        if (isOK) {
          // 说明通过 应该调用登录接口
          // axios body参数 get参数地址参数 路由参数 又叫查询参数
          // body 参数 在axios data里
          // get 参数 axios params
          this.$axios({
            url: '/authorizations', // 请求地址 axios 没有指定类型 默认get类型
            method: 'post',
            data: this.loginForm// body 参数
          }).then(result => {
            // .then只接受正确结果
            // 登录成功返回时携带令牌 需要把令牌保存在前端缓存中
            window.localStorage.setItem('user-token', result.data.data.token)
          }).catch(() => {

          })
        }
      })
    }
  }
}

</script>

<style lang='less' scoped>
.login {
    background-image: url('../../assets/img/back.jpg');
    height: 100vh;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    .login-card {
      width: 440px;
      height: 350px;
      .title{
        margin-bottom: 30px;
        text-align: center;
        img{
          height: 45px;
        }
      }
    }
}
</style>
