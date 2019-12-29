<template>
   <div class='cover-image'>
       <!-- {{list}} -->
   <div @click="openDialog(index)" v-for="(item,index) in list" :key="index" class='cover-image-item'>
       <!-- {{item}} -->
     <img :src="item ? item : defaultImg" alt="">
   </div>
   <!-- 放置一个对话框 -->
   <el-dialog :visible="dialogVisible" @close="closeDialog" title="选择封面图片">
         <!-- 放置另外一 个组件 素材库组件 和上传组件 -->
         <!-- 坚定谁的事件 就在睡的标签上写监听 -->
        <select-image @selectOneImg="receiveImg"></select-image>
   </el-dialog>
 </div>
</template>

<script>
export default {
  props: ['list'],
  data () {
    return {
      defaultImg: require('../../assets/img/pic_bg.png'),
      dialogVisible: false, // 用来控制弹层的开关
      selectIndex: -1 // 用来存储电机的那个图片得下标
    }
  },
  methods: {
    // 接收方法
    receiveImg (url) {
      this.$emit('selectTwoImg', url, this.selectIndex) // 再次传递
      this.closeDialog() // 关闭弹层
    },
    openDialog (index) {
      // alert(index)
      this.dialogVisible = true // 打开弹层
      this.selectIndex = index // 记录当前点击的是哪个图片
    },
    closeDialog () {
      this.dialogVisible = false // 关闭弹层
    }
  }
}
</script>

<style lang='less' >
.cover-image {
     margin: 20px 100px;
     display: flex;
     .cover-image-item {
       border: 1px solid #ccc;
       width: 250px;
       height: 250px;
       padding: 20px;
       img {
         width: 100%;
         height: 100%;
       }
     }
   }
</style>
