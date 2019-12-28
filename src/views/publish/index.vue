<template>
  <el-card>
      <bread-crumb slot="header">

        <template slot="title">
            发布文章
        </template>
      </bread-crumb>
      <el-form ref="publishForm" :model="formData" :rules="pulishiRules" style="magin-left:50px" label-width="100px">

          <el-form-item prop="title" label="标题">
              <el-input v-model="formData.title" style="width:60%"></el-input>
          </el-form-item>
          <el-form-item prop="content" label="内容">
              <quill-editor v-model="formData.content" style="height:300px"> </quill-editor>
          </el-form-item>
          <el-form-item style="margin-top:100px" prop="cover" label="封面">
              <el-radio-group @change='changeType' v-model="formData.cover.type" >
                  <el-radio :label="1">单图</el-radio>
                  <el-radio :label="3">三途</el-radio>
                  <el-radio :label="0">无图</el-radio>
                  <el-radio :label="-1">自动</el-radio>
              </el-radio-group>
          </el-form-item>
          <!-- 封面组件 -->
          <cover-image :list='formData.cover.images' ></cover-image>
          <el-form-item prop="channel_id" label="频道">
              <!-- {{channels}}   -->
              <el-select v-model="formData.channel_id">
                  <el-option v-for="item in channels" :value="item.id" :label="item.name" :key="item.id"></el-option>
              </el-select>
          </el-form-item>
          <el-form-item>
              <el-button @click="pulishiArticle()" type="primary">发布</el-button>
              <el-button @click="pulishiArticle(true)"> 存入草稿 </el-button>
          </el-form-item>
      </el-form>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      channels: [], // 接收频道数据
      formData: {
        title: '', // 文章标题
        content: '', // content 文章内容
        cover: {
          type: 0, // 封面类型 -1:自动，0-无图，1-1张，3-3张
          images: [] // 放置封面地址的数组
        },
        channel_id: null // 频道id
      },
      pulishiRules: {
        //   校验规则 title content
        title: [{ required: true, message: '文章标题不能为空' }, {
          min: 5,
          max: 30,
          message: '标题在5-30个字符之间'
        }],
        content: [{ required: true, message: '文章内容不能为空' }],
        channel_id: [{ required: true, message: '文章频道不能为空' }]
      }
    }
  },
  watch: {
    // 处理像个地址对应
    $route: function (to, from) {
      if (to.params.articleId) {
        // 修改
      } else {
        this.formData = {
          // 是发布
          title: '', // 文章标题
          content: '', // content 文章内容
          cover: {
            type: 0, // 封面类型 -1:自动，0-无图，1-1张，3-3张
            images: [] // 放置封面地址的数组
          },
          channel_id: null // 频道id
        }
      }
    }
    // 'formData.cover.type': function () {
    //   if (this.formData.cover.type === 0 || this.formData.cover.type === -1) {
    //     this.formData.cover.images = []// 无图或者自动
    //   } else if (this.formData.cover.type === 1) {
    //     this.formData.cover.images = ['']// 单图
    //   } else if (this.formData.cover.type === 3) {
    //     this.formData.cover.images = ['', '', '']// 三图
    //   }
    // }
  },
  methods: {
    changeType () {
      if (this.formData.cover.type === 0 || this.formData.cover.type === -1) {
        this.formData.cover.images = []// 无图或者自动
      } else if (this.formData.cover.type === 1) {
        this.formData.cover.images = ['']// 单图
      } else if (this.formData.cover.type === 3) {
        this.formData.cover.images = ['', '', '']// 三图
      }
    },
    // 获取所有频道
    getChannels () {
      this.$axios({
        url: '/channels'
      }).then(result => {
        this.channels = result.data.channels
      })
    },
    // 发布文章
    pulishiArticle (draft) {
      this.$refs.publishForm.validate(isOk => {
        if (isOk) {
          // 修改还是发布文章
          let{ articleId } = this.$route.params // 获取动态路由参数
          this.$axios({
            url: articleId ? `/articles/${articleId}` : '/articles',
            method: articleId ? 'put' : 'post',
            params: { draft }, // 查询参数
            data: this.formData // 请求体参数
          }).then(result => {
            this.$message({
              type: 'success',
              message: '保存成功'
            })
            // 跳转到文章列表页
            this.$router.push('/home/articles')
          })

          // if (articleId) {
          //   // 修改文章接口

          // } else {
          //   // 调用发布接口
          //   this.$axios({
          //     url: '/articles',
          //     method: 'post',
          //     params: { draft }, // 查询参数
          //     data: this.formData// 请求体参数
          //   }).then(() => {
          //     this.$message({
          //       type: 'success',
          //       message: '保存成功'
          //     })
          //     // 跳转到文章列表页
          //     this.$router.push('/home/articles')
          //   })
          // }
          //   调用发布接口
        }
      })
    },
    getArticleById (articleId) {
      this.$axios({
        url: `/articles/${articleId}`
      }).then(result => {
        this.formData = result.data // 将数据赋值data
      })
    }
  },
  created () {
    this.getChannels()
    let{ articleId } = this.$route.params// 获取动态路由参数
    articleId && this.getArticleById(articleId) // 如果文章id存在 直接查询文章的数据
  }
}
</script>

<style>

</style>
