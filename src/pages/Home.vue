<template>
  <div class="mr-root">
      <!-- header组件 -->
      <v-header>
          <p class="title">IA Report</p>
      </v-header>
      <!-- loading组件 父组件控制子组件是否进行渲染 -->
      <v-loading v-if="showLoading"></v-loading>
      <!-- 内容组件 (外面用div进行包裹控制样式) -->
      <div class="mr-content">
          <!-- 主要内容区域,一个个块儿item -->
          <v-home-item v-for="(room, index) in roomList" :key="index" :r="room"></v-home-item>
          <!-- 当加载失败时的提示信息 -->
          <p v-if="error">不好意思,加载失败,请稍后再试...</p>
          <div class="clear"></div>
          <!-- 加载更多 -->
          <div class="loadMore">
              <span>加载更多</span>
              <!-- <span @click="loadMore">加载更多</span> -->
          </div>
      </div>
      <!-- 回到顶部 -->
      <v-back-top></v-back-top>
  </div>
</template>
<script>
// 导入Home首页用到的通用组件
import Public from '../public'
import VHomeItem from "@/components/HomeItem";
import VBackTop from '@/components/BackTop'

export default {
  components: {
    VHomeItem,
    VBackTop
  },
  data() {
    return {
      showLoading: true,
      roomInit: [
        {
          room_id: '123',
          room_src: "/abc",
          nickname: "sanfeng",
          online: "1001",
          room_name: "Sales report"
        },
        {
          room_id: '456',
          room_src: "/aaa",
          nickname: "wwww",
          online: "2001",
          room_name: "industry"
        },
        {
          room_id: '789',
          room_src: "/bbb",
          nickname: "qqqq",
          online: "30001",
          room_name: "Region report"
        }
      ],
      roomList: [],
      error: false,
      count: 0
    };
  },
  mixins: [Public],
  created() {
      // this.getInfo(this.count)
    this.getInfo()
  },

  methods: {
    
      // getInfo (page) {
      //     this.$http.get(`/douyuapi/RoomApi/live?offset=${page}&limit=20`)
      //       .then( data => {
      //           this.error = false
      //           console.log(data)
      //           setTimeout( () => {
      //               this.showLoading = false
      //           }, 1000)
      //       })
      //       .catch( err => {
      //           this.error = true
      //           this.showLoading = false
      //       })
      // },
      // loadMore () {
      //     this.count ++
      //     this.getInfo(this.count)
      // }
      
    getInfo () {
        this.roomList = this.roomInit
        setTimeout(() => {
            this.showLoading = false
            this.error = false
        },1000)
        console.log(this.roomList,'++++++++++++++++')
    }

  }
};
</script>
<style scoped>
.mr-content {
  padding: 35px 0 0 0.3rem;
  overflow: hidden;
}
.loadMore {
  margin: 10px;
  text-align: center;
}
.loadMore span {
  display: inline-block;
  line-height: 30px;
  padding: 0 20px;
  border-radius: 10px;
  border: 1px solid #000;
}
.clear {
  clear: both;
}
</style>
