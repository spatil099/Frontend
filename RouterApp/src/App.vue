<template>
  <NavBarVue></NavBarVue>
  <RouterView></RouterView>
</template>

<script setup>

import {RouterView} from 'vue-router'
import NavBarVue from './components/NavBar.vue'

</script>