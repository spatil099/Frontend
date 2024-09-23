<template>
    <div>
        <RouterLink active-class="active" to="/"> Home </RouterLink>
        <RouterLink active-class="active" to="/about"> About</RouterLink>
    </div>
</template>

<script setup>
import {RouterLink} from 'vue-router'
</script>

<style scoped>
.active {
    font-weight: 900;
    color: blue;
}
</style>