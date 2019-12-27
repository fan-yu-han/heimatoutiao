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
              <el-input v-model="formData.content" type="textarea" :rows="4"> </el-input>
          </el-form-item>
          <el-form-item  prop="cover" label="封面">
              <el-radio-group v-model="formData.cover.type" >
                  <el-radio :label="1">单图</el-radio>
                  <el-radio :label="3">三途</el-radio>
                  <el-radio :label="0">无图</el-radio>
                  <el-radio :label="-1">自动</el-radio>
              </el-radio-group>
          </el-form-item>
          <el-form-item prop="channel_id" label="频道">
              <!-- {{channels}}   -->
              <el-select v-model="formData.channel_id">
                  <el-option v-for="item in channels" :value="item.id" :label="item.name" :key="item.id"></el-option>
              </el-select>
          </el-form-item>
          <el-form-item>
              <el-button @click="pulishiArticle" type="primary">发布</el-button>
              <el-button @click="pulishiArticle"> 存入草稿 </el-button>
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
  methods: {
    // 获取所有频道
    getChannels () {
      this.$axios({
        url: '/channels'
      }).then(result => {
        this.channels = result.data.channels
      })
    },
    // 发布文章
    pulishiArticle () {
      this.$refs.publishForm.validate(isOk => {
        if (isOk) {
          console.log('校验通过')
        }
      })
    }
  },
  created () {
    this.getChannels()
  }
}
</script>

<style>

</style>
