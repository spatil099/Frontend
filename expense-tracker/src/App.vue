<script setup>
import HeaderComponent from './components/Header.vue'
import BalanceComponent from './components/Balance.vue'
import IncomeExpensesComponent from './components/IncomeExpenses.vue';
import AddTransactionComponent from './components/AddTransaction.vue';
import TransactionListComponent from './components/TransactionList.vue';
import {ref, computed} from 'vue';
import {useToast} from 'vue-toastification'
 
const toast= useToast();

const transactions = ref([{id : 1, text : 'Paycheck', amount : +400},
{id : 2,text : 'Course', amount : -100},
{id : 3,text : 'Freelancing', amount : +4000},
{id : 4,text : 'Whiskey', amount : -200}])

const total = computed (()=>{
  return transactions.value.reduce((acc, transaction) =>{
    return acc + transaction.amount
  },0)
})

const totalIncome = computed (()=>{
  return transactions.value.filter((transaction) => transaction.amount > 0).reduce((acc, transaction) =>{
    return acc + transaction.amount
  },0)
})

const totalExpense = computed (()=>{
  return transactions.value.filter((transaction) => transaction.amount < 0).reduce((acc, transaction) =>{
    return acc + transaction.amount
  },0)
}
)

const handleTransactionSubmitted = (formData) => {
  transactions.value.push({
    id:generateUniqueID(),
    text:formData.text,
    amount:formData.amount
  })
  toast.success('Transaction Added')
}

const handleTransactionDeleted = (id) => {
  transactions.value.pop(transactions.value.filter((transaction)=> transaction.id==id))
  toast.success('Transaction Deleted')
}

const generateUniqueID = () => {
  return Math.floor(Math.random() * 1000000)
}
</script>

<template>
    <HeaderComponent title = "Expense Tracker"></HeaderComponent>
    <div class="container">
      <BalanceComponent :total="total"></BalanceComponent>
      <IncomeExpensesComponent :totalIncome="totalIncome" :totalExpense="totalExpense"></IncomeExpensesComponent>
      <TransactionListComponent @transactionDeleted="handleTransactionDeleted" :transactions="transactions"></TransactionListComponent>
      <AddTransactionComponent @transactionSubmitted="handleTransactionSubmitted"></AddTransactionComponent>
    </div>
</template>


<style scoped>

</style>
