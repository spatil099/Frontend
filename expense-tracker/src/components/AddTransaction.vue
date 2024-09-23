<template>
  <div class="add-transaction-container">
    <h3>Add new Transaction</h3>
    <form @submit.prevent="addNewTransaction()">
        <label for="text">Text</label>
        <input type="text" id="text" placeholder="Enter Here.." v-model="formData.text"/>
        <label for="amount">Amount </label>
        <p>(+ for income and - for expenses)</p>
        <input type="number" id="amount" placeholder="Enter Amount.." v-model="formData.amount"/>
        <button type="submit">Add Transaction</button>
    </form>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import {useToast} from 'vue-toastification'
const formData = ref({
      text: '',
      amount: ''
});
const emit = defineEmits(['transactionSubmitted']);

const transactions = ref([]);
const toast = useToast();
const addNewTransaction = () => {
  if(!formData.value.text || !formData.value.amount){
    toast.error('Both fields must be filled')
    return
  }
emit('transactionSubmitted',{text: formData.value.text,
      amount: formData.value.amount})

formData.value.text=''
formData.value.amount=''

}

</script>

<style>
.add-transaction-container{
  width: 400px;
}

form {
  display: flex;
  flex-direction: column;
}

form p{
  margin-top: 5px;
  margin-bottom: 5px;
}
input {
  border: none;
  border-radius: 5px;
  margin-top: 5px;
  height: 30px;
}

button {
  text-align: center;
  background-color: blueviolet;
  height: 35px;
}
</style>