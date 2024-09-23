<template>
    <div v-if="car">
        <h1>Car View</h1>
        <p>{{ car.name }}</p>
        <p>{{ car.price }}</p>
        <p>{{ car.year }}</p>
        <button @click="router.push(`/cars/${car.id}/contact`)">Contact</button>
        <RouterView></RouterView>
    </div>
    <div v-else>
        <h1>Car Not found</h1>
    </div>
</template>

<script setup>
import {useRouter, useRoute, RouterView} from 'vue-router'
import cars from "../data/cars.json"
import ContactViewVue from './ContactView.vue'

const route = useRoute()
const car = cars.find(c => c.id === parseInt(route.params.id))

const router = useRouter()

</script>