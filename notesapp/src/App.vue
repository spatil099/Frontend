<script setup>
import {ref} from 'vue'

const showModal = ref(false)
const newNote = ref('')
const errorMsg = ref('')
const cards = ref([])

function getRandomColor(){ 
  return "hsl(" + Math.random()*360 + ", 100%, 75%";
}

const addNote = () => {
  if(newNote.value.length < 10){
    return errorMsg.value = "Note needs to be more than 10 characters without spaces"
  }
  cards.value.push({
    text : newNote.value,
    date: new Date(),
    id:Math.floor(Math.random() * 1000000),
    backgroundColor: getRandomColor()
  })
  showModal.value=false
  newNote.value=''
}

</script>

<template>
  <main>
    <div v-if="showModal" class="overlay">
      <div class="modal">
        <textarea v-model.trim="newNote" name="note" id="note" cols="30" rows="10"></textarea>
        <p v-if="errorMsg"> {{ errorMsg }}</p>
        <button @click="addNote()">Add Note</button>
        <button class="close" @click="showModal = false">Close</button>
      </div>
    </div>
    <div class="container">
      <header>
        <h1>Notes</h1>
        <button @click="showModal = true">+</button>
      </header>
      <div class="cards-container">
        <div  v-for="card in cards" :key="card.id" class="card" :style="{backgroundColor:card.backgroundColor}">
          <p class="main-text">{{ card.text }}</p>
          <p class="date">{{ card.date.toLocaleDateString("en-US") }}</p>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  height :100vh;
  width:100vw;
}

.container {
  max-width: 1000px;
  padding: 10px;
  margin: 0 auto;
}

header{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h1{
  font-weight: bold;
  margin-bottom: 25px;
  font-size: 75px;
}

header button{
  border: none;
  padding: 10px;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  color: white;
  background-color: black;
  font-size: 20px;
  cursor: pointer;
}

.card {
  width: 225px;
  height: 225px;
  background-color: rgb(237, 182, 44);
  padding: 10px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px;
  margin-bottom: 20px;
}
.date{
  font-weight: bold;
  font-size: 15px;
}
.cards-container{
  display: flex;
  flex-wrap: wrap;
}
.overlay{
  position: absolute;
  width:100%;
  height:100%;
  background-color: rgba(0,0,0,0.77);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal{
width: 750px;
background-color: white;
border-radius: 10px;
padding: 30px;
position: relative;
display: flex;
flex-direction: column;
}

.modal button {
  padding: 10px 20px;
  font-size: 20px;
  width: 100%;
  background-color: blueviolet;
  border: none;
  cursor: pointer;
  margin-top: 15px;
}

.modal .close {
background-color: rgb(193,15,15);
margin-top: 7px;
}

.modal p {
  color: red;
}
</style>