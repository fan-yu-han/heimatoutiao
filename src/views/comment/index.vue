<template>
    <el-card  v-loading='loading'>
        <bread-crumb slot="header">
        <!-- 插槽内容 -->
            <template slot="title">
                评论管理
            </template>
        </bread-crumb>
        <el-table :data='list '>
            <!-- prop 字段名   -->
            <el-table-column prop="title" width="500" label="标题"></el-table-column>
            <el-table-column  :formatter="formatterBoolean"  prop="comment_status" label="评论状态"></el-table-column>
            <el-table-column prop="total_comment_count" label="总评论数"></el-table-column>
            <el-table-column prop="fans_comment_count" label="粉丝评论数"></el-table-column>
            <el-table-column label="操作">
                <template slot-scope="obj">
                <el-button size='small' type="text">修改</el-button>
                <!-- 需要给你举状态进行判断关闭还是打开 -->
                <el-button @click="openOrCloseState(obj.row)" size='small' type="text">{{obj.row.comment_status ? '关闭' :'打开'}}评论</el-button>

                </template>
            </el-table-column>
        </el-table>
             <el-row type='flex' justify="center" align="middle" style="height:80px">
                  <!-- 分页组件 total 总页码  每页多少条-->
                <el-pagination background layout="prev, pager, next"
                :current-page="page.currentPage"
                :page-size="page.pageSize"
                :total="page.total"
                @current-change="changePage"
                ></el-pagination>
              </el-row>
    </el-card>

</template>

<script>
export default {
  data () {
    return {
      list: [],
      loading: false,
      page: {
        total: 0,
        pageSize: 10, // 默认每页条码为10
        currentPage: 1// 默认页面是1
      }
    }
  },
  methods: {
    // 野马改变事件
    changePage (newPage) {
      this.page.currentPage = newPage
      this.getComment()
    },
    getComment () {
      this.loading = true
      this.$axios({
        url: '/articles',
        params: { response_type: 'comment', page: this.page.currentPage, per_page: this.page.pageSize }
      }).then(result => {
        this.list = result.data.results
        this.page.total = result.data.total_count// 总条数
        this.loading = false
      })
    },
    formatterBoolean (row, column, cellValue, index) {
      return cellValue ? '正常' : '关闭'
    },
    openOrCloseState (row) {
      // 直接调用接口
      let mess = row.comment_status ? '关闭' : '打开'
      this.$confirm(`您是否确定要${mess}评论吗`, '提示').then(() => {
        // 调用接口
        this.$axios({
          method: 'put',
          url: '/comments/status',
          params: { article_id: row.id.toString() },
          data: { allow_comment: !row.comment_status } // 因为当前如果是打开 ,就要关闭 如果是关闭 就要打开
        }).then(result => {
          //  表示执行成功
          this.getComment() // 重新拉取评论管理数据
        }).catch(() => {

        })
      })
    }
  },
  created () {
    this.getComment()
  }
}
</script>

<style>

</style>
