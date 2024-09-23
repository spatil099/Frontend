<template>
  <div class="transactionList">
    <h3>History</h3>
    <div class="transactionlist-container">
        <div v-for="transaction in props.transactions" :key="transaction.id" class="transaction" :class="transaction.amount < 0 ? 'minus' : 'plus'">
            <button class="delete-btn" @click="deleteTransaction(transaction.id)">
        x
      </button>
      <p class="align-left">{{ transaction.text }}</p>
      <p class="align-right">{{ transaction.amount }}</p>
            </div>
    </div>
  </div>
</template>

<script setup>

let props = defineProps({
    transactions : {
        type : Array,
        required: true
    }
});

const emit = defineEmits(['transactionDeleted']);

const deleteTransaction = (id) => {
  emit('transactionDeleted', id);
};
</script>

<style scoped>
.transactionList {
    width: 400px;

}

.transactionlist-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
h3{
    border-bottom: 1px solid black;
}
.transaction{
    background-color: white;
    width: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    margin-bottom: 10px;
}
.transaction p{
    width: 50%;
}

.minus {
    border-right: 5px solid red;
}
.plus {
    border-right: 5px solid green;
}
.align-left{
    text-align: left;
}

.align-right{
    text-align: right;
}
.delete-btn {
  cursor: pointer;
 opacity: 0;
 background-color: #e74c3c;
  border: 0;
  color: #fff;
  font-size: 20px;
}

.transaction:hover .delete-btn {
  opacity: 1;
}
</style>