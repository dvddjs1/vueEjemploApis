<template>
  <div id="app">
    <el-row type="flex" justify="center">
      <el-col :span="24" style="text-allign: center">
        <img alt="Vue logo" style="width: 200px" src="./assets/icono.png" />
        <MenuPrincipal />
      </el-col>
    </el-row>

    <el-divider></el-divider>

    <transition name="slide">
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import MenuPrincipal from "./components/MenuPrincipal.vue";

export default {
  name: "App",
  components: {
    // HelloWorld
    MenuPrincipal,
  },
};
</script>
