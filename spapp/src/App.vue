<template>
  <div class="app">
    <button @click="orderBy('title')">Order By title</button>
    <button @click="orderBy('location')">Order By location</button>
    <button @click="orderBy('salary')">Order By salary</button>
    <JobList :jobs="jobs" :order="order"></JobList>
    <!-- <p>{{name}} - {{ age }}</p>
    <button @click="changeName('Test')">Change Name</button>
    <button @click="changeAge(30)">Change Age</button> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from 'vue';
import Job from './types/Job'
import JobList from './components/JobList.vue';
import OrderTerm from './types/OrderTerm';

export default defineComponent({
  name: 'App',
  components: {JobList},
  setup() {
    // const state = reactive({
    //   name : "link",
    //   age : 25 as number | string
    // })

    // return { ...toRefs(state)}

    // const name = ref('Link')
    // const age = ref<number | string>(24)

    // age.value = 35

    // return { name, age }

    const jobs = ref<Job[]>([
      {title : 'SW Engineer',id : "1",location: "Bengaluru",salary:45000 },
      {title : 'SW Engineer 1',id : 2,location: "Mumbai",salary:450000 },
      {title : 'SW Engineer 2',id : "3",location: "Chennai",salary:522000 },
      {title : 'SW Engineer 3',id : 4,location: "Coimbatore",salary:4500000 }
    ]) 

    const order = ref<OrderTerm>('location')
    return {jobs, order}
  },
  methods:{
    // changeName(name : string){
    //   this.name = name
    //   return name
    // },
    // changeAge(age : string | number){
    //   this.age = age
    //   return age
    // }
    orderBy(orderBy : OrderTerm) {
      this.order = orderBy
    }
  }
});
</script>

<style>

</style>
