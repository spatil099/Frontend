<template>
  <div class="inc-expenses-container">
    <div class="box-shadow">
        <h2>Income</h2>
        <p class="income">{{ totalIncome }}</p>
    </div>
    <div class="box-shadow">
        <h2>Expenses</h2>
        <p class="expense">{{ totalExpense }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  totalExpense: {
    type:Number,
    required:true
  },
  totalIncome: {
    type:Number,
    required:true
  }
})
</script>

<style scoped>
.inc-expenses-container {
  background-color: white;
  width: 400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
}

.income{
  color: lightgreen;
}

.expense{
  color: red;
}

.box-shadow {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
}

</style>