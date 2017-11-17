<template>
  <div id="app">
    <!-- 父组件控制着子组件的显示或隐藏, @hideFromSideMenu接收的是子组件的emit的事件名称 -->
    <transition name="side">
      <!-- hideFromSideMenu接收的是子组件自身,点击一个li,就隐藏菜单栏 -->
      <side-menu v-show="isShow" @hideFromSideMenu="hideSide"></side-menu>
    </transition>
    <!-- <home></home> -->
    <router-view/>
  </div>
</template>

<script>
import SideMenu from "./components/SideMenu";
import Home from '@/pages/Home'
// 事件总线, 引入Vue实例
import bus from './bus.js'

export default {
  name: "app",
  data() {
    return {
      isShow: false
    };
  },
  components: {
    SideMenu,
    Home
  },
  mounted() {
    // 监听header中,图标点击的事件,this.$emit('sideShow'),
    // 因为App不是直接import header组件,所以使用总线方式传递事件
    bus.$on('sideShow', this.showSideMenu)
  },
  methods: {
    hideSide () {
      this.isShow = false;
    },
    showSideMenu () {
      this.isShow = !this.isShow
    }
  }
};
</script>

<style>
.side-enter-active,
.side-leave-active,
.side-enter-active ul,
.side-leave-active ul {
  transition: all 0.4s linear;
}

.side-enter,
.side-leave-active {
  opacity: 0;
}
.side-enter ul,
.side-leave-active ul {
  transform: translateX(-50%);
  opacity: 0;
}

</style>
