<template>
    <div class="job-list">
        <p>Ordered by {{ order }}</p>
        <ul>
            <li v-for="job in orderedJobs" :key="job.id">
            <h2>{{ job.title }} in {{ job.location }}</h2>
            <div class="salary">
                <p> {{ job.salary }} rs</p>
            </div>
            <div class="description">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus a porro perspiciatis exercitationem, quod dolor laudantium id quam ipsam ratione itaque assumenda, consequuntur sequi autem sint distinctio, labore neque maxime!</p>
            </div>
        </li>
        </ul>
    </div>
</template>

<script lang="ts">
import Job from '../types/Job';
import OrderTerm from '../types/OrderTerm';
import { computed, defineComponent, PropType } from 'vue'

export default defineComponent({
props: {
    jobs : {
        required : true,
        type : Array as PropType<Job[]>
    },
    order : {
        required : true,
        type : String as PropType<OrderTerm>
    }
},
setup(props) {
    const orderedJobs = computed(() => {
        return [...props.jobs].sort((a: Job, b:Job) => {
            return a[props.order] > b[props.order] ? 1 : -1
        })
    })
    return {orderedJobs}
}

})
</script>

<style scoped>
.job-list{
    max-width: 900px;
    margin: 40px auto;
}

.job-list ul {
    padding: 0;
}

.job-list li {
    list-style-type: none;
    background: white;
    padding: 16px;
    margin: 16px 0;
    border-radius: 5px;
}

.job-list h2 {
    margin: 0 0 10px;
    text-transform: capitalize;
}

.salary {
display: flex;
}

.salary p {
    color: greenyellow;
    font-weight: bold;
    margin: 10px 4px
}
</style>
