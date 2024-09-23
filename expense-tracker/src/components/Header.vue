<template>
    <div>
        <h2>{{ props.title }}</h2>
    </div>
</template>

<script setup>
const props = defineProps(['title']);
</script>

<style scoped>
div {
  /* background-color: aquamarine; */
  height: 50px;
  width: 400px;
}
</style>