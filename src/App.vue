<script setup>
import Header from './components/Header.vue'
</script>

<template>
  <div class="container">
    <Header @open-drawer="openDrawer" />
    <router-view></router-view>
  </div>
</template>

<style scoped></style>
