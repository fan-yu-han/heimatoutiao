<template>
    <div>
        <el-carousel :interval="4000" type="card" height="300px">
        <el-carousel-item v-for="item in list" :key="item">
        <img :src="item" alt="">
        </el-carousel-item>
         </el-carousel>
    </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        'http://img2.imgtn.bdimg.com/it/u=248395548,980320538&fm=26&gp=0.jpg',
        'http://img2.imgtn.bdimg.com/it/u=1299969344,1554668160&fm=26&gp=0.jpg',
        'http://img4.imgtn.bdimg.com/it/u=1034988724,142912014&fm=26&gp=0.jpg']
    }
  }
}
</script>

<style>
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
