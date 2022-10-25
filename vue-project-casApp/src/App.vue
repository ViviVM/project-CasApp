<script setup>
import navBar from './components/navBar.vue';
import footer_vue from './components/footer.vue';
import home from './components/home.vue'
import task from './components/task.vue'
</script>

<template>

<navBar/>
<home/>
<router-view/>

<footer_vue/>
</template>

