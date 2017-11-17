<template>
  <div class="side-menu" @click="sideHide">
      <ul>
          <router-link tag="li"
                    v-for="(item, index) in list"
                    :to="item.uri"
                    :key="index">
            {{ item.name }}
            <i class="fa fa-chevron-right"></i>
          </router-link>
      </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        { name: "首页", uri: "/" },
        { name: "全部分类", uri: "/category" },
        { name: "推荐", uri: "/recommand" },
        { name: "个人中心", uri: "/user" }
      ]
    };
  },


  methods: {
    sideHide() {
      this.$emit("hideFromSideMenu");
    },
  }
};
</script>

<style scoped>
.side-menu {
  background: rgba(10, 10, 10, 0.3);
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  padding-top: 35px;
  z-index: 11;
}
.side-menu ul {
  width: 10%;
  height: 100%;
  background: #282828;
  border-top: 1px solid #222;
}
.side-menu ul li {
  height: 50px;
  line-height: 50px;
  font-size: 14px;
  padding: 0 10px 0 10px;
  border-bottom: 1px dotted red;
  color: #9a9a9a;
}
.side-menu ul li i {
  float: right;
  line-height: 50px;
}
</style>

