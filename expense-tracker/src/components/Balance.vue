<template>
  <h4>Your Balance</h4>
  <h2>$ {{ props.total }}</h2>
</template>

<script setup>
const props = defineProps({
  total:{
    type:Number,
    required:true
  }
})
</script>

<style scoped>
h2 {
  margin-top: 5px;
 /* background-color: blue; */
}

h4 {
 /* background-color: red; */
 margin-bottom: 5px;
}
</style>