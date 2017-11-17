<template>
  <div class="mr-root">
      <v-header>
          <p class="title">全部分类</p>
      </v-header>
      <div class="mr-content">
          <ul>
              <li is="game-list" v-for="(g, index) in gameList" :key="index" :game="g"></li>
          </ul>
      </div>
      <v-loading v-if="showLoading"></v-loading>
      <back-top></back-top>
  </div>
</template>
<script>
import Public from "../public"
import GameList from '@/components/GameList'
import BackTop from "@/components/BackTop"

export default {
  components: {
      BackTop,
      GameList
  },
  data() {
    return {
        showLoading: true,
        gameList: []
    };
  },
  mixins: [Public],
  // 异步加载数据
  /*
  created () {
      this.$http.get('/douyuapi/RoomApi/game')
        .then( data => {
            this.gameList = data.data.data
            setTimeout( () => {
                this.showLoading = false
            },2000)
        })
        .catch(err => {
            console.log(err)
        })
  }
  */
  created () {
      this.gameList = [
          {
              cate_id: 1001,
              game_name: '植物大战僵尸'
          },
          {
              cate_id: 1002,
              game_name: '坦克大战'
          },
          {
              cate_id: 1003,
              game_name: '三国志'
          },
          {
              cate_id: 1004,
              game_name: '植物大战僵尸'
          },
          {
              cate_id: 1001,
              game_name: '植物大战僵尸'
          },
          {
              cate_id: 1002,
              game_name: '坦克大战'
          },
          {
              cate_id: 1003,
              game_name: '三国志'
          },
          {
              cate_id: 1004,
              game_name: '植物大战僵尸'
          },
          {
              cate_id: 1001,
              game_name: '植物大战僵尸'
          },
          {
              cate_id: 1002,
              game_name: '坦克大战'
          },
          {
              cate_id: 1003,
              game_name: '三国志'
          },
          {
              cate_id: 1004,
              game_name: '植物大战僵尸'
          },
          {
              cate_id: 1001,
              game_name: '植物大战僵尸'
          },
          {
              cate_id: 1002,
              game_name: '坦克大战'
          },
          {
              cate_id: 1003,
              game_name: '三国志'
          },
          {
              cate_id: 1004,
              game_name: '植物大战僵尸'
          },
          {
              cate_id: 1001,
              game_name: '植物大战僵尸'
          },
          {
              cate_id: 1002,
              game_name: '坦克大战'
          },
          {
              cate_id: 1003,
              game_name: '三国志'
          },
          {
              cate_id: 1004,
              game_name: '植物大战僵尸'
          },
          {
              cate_id: 1001,
              game_name: '植物大战僵尸'
          },
          {
              cate_id: 1002,
              game_name: '坦克大战'
          },
          {
              cate_id: 1003,
              game_name: '三国志'
          },
          {
              cate_id: 1004,
              game_name: '植物大战僵尸'
          },
          {
              cate_id: 1004,
              game_name: '植物大战僵尸'
          },
      ]
      setTimeout( () => {
          this.showLoading = false
      },1000)
  }
};
</script>
<style scoped>
.mr-content {
    padding-top: 35px
}
.mr-content ul {
    display: flex;
    flex-wrap: wrap;
}
</style>
