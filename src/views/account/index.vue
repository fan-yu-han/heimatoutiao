<template>
  <el-card v-loading="loading">
      <bread-crumb slot="header">
        <template slot='title'>账户信息</template>
      </bread-crumb>
      <!-- 表单 => 表单容器 -->
      <el-form ref="myForm" :model="formData" :rules="rules" style="margin-left:100px" label-width="100px">
          <el-form-item prop="name" label="用户名">
              <el-input  v-model="formData.name" style="width:40%"></el-input>
          </el-form-item>
           <el-form-item  label="简介">
               <el-input v-model="formData.intro" style="width:40%"></el-input>
           </el-form-item>
           <el-form-item prop="email" label="邮箱">
               <el-input v-model="formData.email" style="width:40%"></el-input>
           </el-form-item>
           <el-form-item  label="手机号">
               <el-input  v-model="formData.mobile" disabled style="width:40%"></el-input>
           </el-form-item>
           <el-form-item>
               <el-button @click="saveUserIfo" type="primary">保存信息</el-button>
           </el-form-item>
      </el-form>
      <!-- 上传组件 -->
      <el-upload :http-request="uploadImg" class='head-upload' action="" :show-file-list="false">
          <img :src="formData.photo?formData.photo:defaultImg" alt="">
      </el-upload>
  </el-card>
</template>

<script>
import eventBus from '../../utils/eventBus'
export default {
  data () {
    return {
      loading: false,
      formData: {
        name: '', // 用户名
        intro: '', // 简介
        photo: '', // 头像
        email: '', // 邮箱
        mobile: ''
      },
      defaultImg: require('../../assets/img/back.jpg'),
      rules: {
        name: [{ require: true, message: '用户名不能为空' }, {
          min: 1, max: 7, message: '用户名长度在1-7个字符'
        }],
        email: [{ require: true, message: '邮箱不能为空' }, {
          pattern: '^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(.[a-zA-Z0-9_-]+)+$',
          message: '邮箱格式不正确'
        }]
      }
    }
  },
  methods: {
    uploadImg (params) {
      this.loading = true// 打开弹层
      let data = new FormData()
      data.append('photo', params.file)
      this.$axios({
        url: '/user/photo',
        method: 'patch',
        data: data
      }).then(result => {
        this.loading = false // 关闭弹层
        this.formData.photo = result.data.photo// 给当前的头像赋值
        // 认为保存成功=>通知 header组件 更性信息
        eventBus.$emit('updateUserInfo')
      })
    },
    //   获取用户个人信息
    getUserInfo () {
      this.$axios({
        url: '/user/profile'
      }).then(result => {
        this.formData = result.data
      })
    },

    saveUserIfo () {
      this.$refs.myForm.validate().then(result => {
        // 调用保存接口
        this.$axios({
          url: '/user/profile',
          method: 'patch',
          data: this.formData
        }).then(result => {
          this.$message({
            type: 'success',
            message: '保存用户信息成功'
          })
          // 认为保存成功=>通知 header组件 更性信息
          eventBus.$emit('updateUserInfo')
        })
      })
    }
  },
  created () {
    this.getUserInfo()
  }

}
</script>

<style lang='less' scoped>
.head-upload {
   position: absolute;
   right: 150px;
   top:180px;
    img {
       width: 200px;
       height: 200px;
        border-radius: 50%;
    }
}
</style>
