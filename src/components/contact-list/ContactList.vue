<script setup>
import ContacListHeader from './ui/ContacListHeader.vue';
import SearchBar from './ui/SearchBar.vue';
import TableList from './ui/table-list/TableList.vue';
import DB from '@/DB';

import {onMounted, reactive} from 'vue';

const props = defineProps({
    apiURL:{type:String, required:true}
});
const contacts=reactive([]);

onMounted(async() =>{
    DB.setApiURL(props.apiURL);
    contacts.splice(contacts.length,0,...await(DB.findAll()));
    console.table(contacts);
})


</script>

<template>

<!-- Section droite pour la liste des contacts -->
<section class="w-2/3 p-6">
        
    <contac-list-header></contac-list-header>
        
    <search-bar></search-bar>

    <table-list :contacts="contacts"></table-list>
</section>

</template>

<style scoped>

</style>