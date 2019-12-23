<template>
  <el-card>
      <bread-crumb slot="header">
        <template slot="title">
            素材管理
        </template>
      </bread-crumb>
      <!-- 标签页 -->
       <el-tabs v-model="activeName" @tab-click="changTab">
           <el-tab-pane label="全部图片" name="all">
          <!-- 生成页面结构 list -->
          <div class="img-list">
              <!-- v-for 对数据进行遍历 -->
              <el-card class="img-card" v-for="item in list" :key='item.id'>
                  <img :src="item.url" alt="">
                  <el-row class="operate" type="flex" align="middle" justify='space-around'>
                      <i class="el-icon-star-on"></i>
                      <i class="el-icon-delete-solid"></i>
                  </el-row>
              </el-card>
          </div></el-tab-pane>
           <el-tab-pane label="收藏图片" name="collect">
               <div class="img-list">
              <!-- v-for 对数据进行遍历 -->
              <el-card class="img-card" v-for="item in list" :key='item.id'>
                  <img :src="item.url" alt="">

              </el-card>
            </div>
          </el-tab-pane>
        </el-tabs>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'all', // 当前选中的标签
      list: []// 搜索素材数据
    }
  },
  methods: {
    // 切换页签方法
    changTab () {
      this.geiMaterial()
    },
    //   获取数据方法
    geiMaterial () {
      this.$axios({
        url: '/user/images',
        params: {
          collect: this.activeName === 'collect'// false是获取所有数据 传true是获取收藏数据
        }
      }).then(result => {
        this.list = result.data.results // 获取所有的图片数据
      })
    }
  },
  created () {
    this.geiMaterial()
  }
}
</script>

<style lang='less' scoped>
.img-list {
    display: flex;
    flex-wrap: wrap;
    .img-card {
        width: 200px;
        height: 220px;
        margin: 20px 50px;
        position: relative;
        img{
            width: 100%;
            height: 100%;
        }
        .operate {
            width: 100%;
            position: absolute;
            left: 0;
            bottom: 0;
            font-size: 20px;
            height: 36px;
            background-color: #f4f5f6 ;
        }
    }
}
</style>
