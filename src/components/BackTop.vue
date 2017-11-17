<template>
  <div class="backTop" v-if="scroll">
      <i class="fa fa-arrow-up" @click="backTop"></i>
  </div>
</template>
<script>
export default {
  data() {
      return {
          scroll: true
      }
  },
  methods: {
    backTop() {
        let top = document.body.scrollTop
        let speed = 50
        let timer = setInterval( () => {
            document.body.scrollTop = top-= speed
            if(top <= 0) {
                top = 0
                clearInterval(timer)
            }
        }, 30)
      
    }
  },
  mounted () {
      let _this = this
      window.onscroll = function() {
          let top = document.body.scrollTop
          if(top > 300) {
              _this.scroll = true
          } else {
              _this.scroll = false
          }
      }
  }
};
</script>
<style scoped>
.backTop {
  position: fixed;
  right: 20px;
  bottom: 40px;
}
.backTop i {
  font-size: 20px;
  display: inline-block;
  padding: 10px;
  border: 1px solid #ccc;
  /* color:#ccc; */
  border-radius: 50%;
  background: #fff;
}
</style>
