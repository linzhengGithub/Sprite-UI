<template>
    <router-view />
</template>

<script>
    import {ref,provide} from 'vue'
export default {
    name: 'App',
    setup(){
        const asideVisible = ref(false) //set
        provide('asideVisible',asideVisible)
    }
}
</script>
