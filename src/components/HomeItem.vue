<template>
    <!-- 由父组件将数据传递到子组件,子组件通过props接收父组件的参数 -->
  <div class="mr-item">
      <router-link :to="'/room/' + r.room_id">
        <!-- <img :src="r.room_src" alt="图片站位符"> -->
        <div class="room-info">
            <span class="nickname">{{ r.nickname }}</span>
            <span class="count">
                <i class="fa fa-group"></i>
                {{ r.online | number }}
            </span>
        </div>
        <div class="room-title">
            <i class="fa fa-desktop"></i>
            {{ r.room_name | message }}
        </div>
      </router-link>
  </div>
</template>

<script>
export default {
  props: {
    r: {
      type: Object,
      required: true
    }
  }
};
</script>
<style scoped>
.mr-item {
  margin-top: 0px;
  margin-right: 10px;
  width: 400px;
  float: left;
  position: relative;
}
.mr-item img {
  width: 100%;
  height: 50px;
  border-radius: 5px;
  display: inline-block;
  border-bottom: 1px solid red;
  line-height: 50px;
  text-align: center;
  margin-bottom: 5px;
}
.room-info {
  position: relative;
  top: 5px;
  color: #fff;
  padding: 0 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  /* background: rgba(10, 10, 10, 0.5); */
  background: #5b3b1b;
  line-height: 30px;
  /* border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px; */
  border-radius: 5px;
}
.room-title {
  line-height: 30px;
  position: relative;
  top: 5px;
}

.room-info .count {
  float: right;
}
</style>
