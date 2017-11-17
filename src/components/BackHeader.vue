<template>
   <header>
       <i class="fa fa-arrow-left" @click="back"></i>
       <slot></slot>
   </header>
</template>
<script>
export default {
  methods: {
    back () {
      this.$router.go(-1)
    }
  }
};
</script>
<style scoped>
header {
  height: 35px;
  background: #333;
  position: fixed;
  left: 0;
  top: 0;
  color: #fff;
  line-height: 35px;
  font-size: 16px;
}
header i {
  color: yellow;
}
.title {
  margin-left: 5px;
  margin-right: 5px;
  display: inline-block;
}
</style>
