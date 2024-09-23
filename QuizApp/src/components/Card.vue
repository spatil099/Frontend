<template>
  <div class="card">
        <img :src="quiz.img" alt="">
        <div class="card-text">
          <h2>{{ quiz.name }}</h2>
          <p>{{ quiz.questions.length }} questions</p>
        </div>
      </div>
</template>

<script setup>
import {defineProps} from 'vue'
const {quiz} = defineProps(['quiz'])
</script>

<style scoped>

/* CARD */

.card {
  width: 310px;
  border-radius: 2%;
  overflow: hidden;
  box-shadow: 1px 1px 10px rgba(0,0,0,.1);
  cursor: pointer;
  margin-bottom: 40px;
  margin-right: 20px;

}

.card img {
  width:100%;
  margin: 0;
  height: 190px;
}

.card .card-text {
  padding: 0 5px
}

.card .card-text h2{
  font-weight: bold;
}
</style>>

