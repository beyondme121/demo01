<template>
  <header>
    <i class="fa fa-reorder" @click="showSide"></i>
    <slot></slot>
    <i class="fa fa-user"></i>
  </header>
</template>

<script>
import bus from '../bus.js'

export default {
  methods: {
    // 向父组件传递消息 sideShow, 父组件Home接收
    showSide () {
      bus.$emit("sideShow")
    }
  }
}
</script>

<style scoped>
header {
  height: 35px;
  line-height: 35px;
  font-size: 16px;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 100;
  padding: 0 10px;
  background: #333;
  color: #fff;
}
header i {
  color: #999;
}
.title {
  margin-left: 10px;
  margin-right: 10px;
  display: inline-block;
}
.fa-user {
  float: right;
  line-height: 35px;
  /* margin-right: 10px; */
  /* padding-right: 20px; */
}

</style>
