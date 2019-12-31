<template>
    <div class="layout-aside">
        <div class="title">
            <img :src="collapse?smallImg:bigImg" alt="" >
        </div>

           <!-- 左侧导航菜单 -->
        <el-menu :collapse="collapse" router background-color="#353b4e" text-color="#adafb5" active-text-color="#ffd04b">
            <!-- 没有折叠的 是 el-menu-item -->
            <el-menu-item index="/home">
                <i class="el-icon-s-home"></i>
                <span>首页</span>
            </el-menu-item>
            <!-- 二级折叠菜单是submenu -->
            <el-submenu index='1'>
                <i slot="title" class="el-icon-document"></i>
                <span slot="title">内容管理</span>
                <el-menu-item index='/home/publish'>发布文章</el-menu-item>
                <el-menu-item index='/home/articles'>文章列表</el-menu-item>
                <el-menu-item index='/home/comment'>评论管理</el-menu-item>
                <el-menu-item index='/home/material'>素材管理</el-menu-item>
            </el-submenu>
            <el-submenu index='2'>
                <i slot="title" class="el-icon-s-custom"></i>
                <span slot="title">粉丝管理</span>
                <el-menu-item index='/home/picture'>图文数据</el-menu-item>
                <el-menu-item index='/home/fensi'>粉丝概况</el-menu-item>
                <el-menu-item index='/home/fensiImg'>粉丝画像</el-menu-item>
                <el-menu-item index='/home/fanslist'>粉丝列表 </el-menu-item>
            </el-submenu>
            <el-menu-item index='/home/account'>
            <i class="el-icon-folder-opened"></i>
            <span>账户信息</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
export default {
  props: ['collapse'],
  data () {
    return {
      bigImg: require('../../assets/img/logo_admin.png'),
      smallImg: require('../../assets/img/toutiao.png')
    }
  }
}
</script>

<style lang='less' scoped>
.layout-aside{
    // width: 230px;
    .el-menu {
        border-right:none;
    }
    .title {
        background-color:  #2e2f32;
        text-align: center;
        padding: 10px 0;
        img {
            height: 35px;
        }
    }
}
</style>
