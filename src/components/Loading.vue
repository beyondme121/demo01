<template>
  <div class="loading">
      <img src="../assets/image/loading.gif" alt="">
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
.loading {
    height:100%;
    position:fixed;
    z-index:10;
    width:100%;
    background:#062734;
    opacity:.8;
}

.loading img {
    width: 100%;
    height: auto;
    position: absolute;
    /* top: calc(50% - 140px); */
    /* top:10px; */
}
</style>
