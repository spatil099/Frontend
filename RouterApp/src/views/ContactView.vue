<template>
    <div v-if="car">
        <h1>{{ car.contact.dealer }}</h1>
        <h1>{{ car.contact.number }}</h1>
    </div>
</template>

<script setup>
import {useRoute} from 'vue-router'
import cars from '../data/cars.json'

const route = useRoute()
const car = cars.find(c => c.id===parseInt(route.params.id))
</script>
