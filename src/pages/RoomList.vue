<template>
  <div class="mr-root">
      <back-header>
           <p class="title">{{$route.params.gameName}}</p>
      </back-header>
      <!-- 游戏的房间列表 -->
     <div class="mr-content">
         <div class="room-info" v-for="(r, index) in roomList" 
            :key="index"
         >

         </div>
     </div>
        

  </div>
</template>
<script>
import Public from "../public";
import BackHeader from "@/components/BackHeader";

export default {
  data() {
    return {
      roomList: []
    };
  },
  components: {
    BackHeader
  }
};
</script>
<style scoped>

</style>
