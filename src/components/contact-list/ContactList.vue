<script setup>
import ContacListHeader from './ui/ContacListHeader.vue';
import SearchBar from './ui/SearchBar.vue';
import TableList from './ui/table-list/TableList.vue';

</script>

<template>

<!-- Section droite pour la liste des contacts -->
<section class="w-2/3 p-6">
        
    <contac-list-header></contac-list-header>
        
    <search-bar></search-bar>

    <table-list></table-list>
</section>

</template>

<style scoped>

</style>