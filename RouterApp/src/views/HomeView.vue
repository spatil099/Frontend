<template>
    <div>
        <h1>Home View</h1>
        <div class="cars">
            <RouterLink v-for="car in cars" :key="car.id" :to="`/cars/${car.id}`">
            {{car.name}}
            </RouterLink>
        </div>
    </div>
</template>

<script setup>
import cars from '../data/cars.json'
import {RouterLink} from 'vue-router'
</script>

<style scoped>
.cars{
    display: flex;
}

.cars a {
    color: black;
    width: 100%;
    text-decoration: none;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.132);
    margin: 10px;
}
</style>
