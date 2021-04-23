<template>
    <el-menu
        class="paddingMenu"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
    >
        <router-link tag="el-menu-item" to="/"> Inicio </router-link>
        <router-link tag="el-menu-item" to="/busqueda"> Busquedass </router-link>
    </el-menu>
</template>

<script>
export default {
  name: 'MenuPrincipal'
}
</script>

<style>
</style>
