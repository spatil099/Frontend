<script setup>
import q from "./data/quizes.json"
import {ref, watch} from 'vue'
import CardComponent from './components/Card.vue'

const quizes = ref(q)
const search = ref("")

watch(search, ()=>{
  quizes.value = q.filter(quiz => quiz.name.toLowerCase().includes(search.value.toLowerCase()))
})


</script>


<template>
  <div class="container">
    <header>
      <h1>Quizes</h1>
      <input v-model="search" type="text" placeholder="Search...">
    </header>
    <div class="options-container">
      <!-- <div v-for="quiz in quizes" :key="quiz.id" class="card">
        <img :src="quiz.img" alt="">
        <div class="card-text">
          <h2>{{quiz.name}}</h2>
          <p>{{ quiz.questions.length }} questions</p>
        </div>
      </div> -->
      <CardComponent v-for="quiz in quizes" :key="quiz.id" :quiz="quiz"></CardComponent>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1000px;
  margin: 0 auto;
}

header {
  color: white;
  margin-bottom:10px;
  margin-top: 30px;
  display: flex;
  align-items: center;
}

header h1 {
font-weight: bold;
margin-right: 30px;
color: black;
}

header input {
border: none;
border-radius: 5px;
padding: 10px;
background-color: rgba(128,128,128,0.1);
}

.options-container{
display: flex;
flex-wrap: wrap;
margin-top: 40px;
}

</style>