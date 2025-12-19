<script setup>
import ContacListHeader from './components/ContacListHeader.vue';
import SearchBar from './components/SearchBar.vue';
import TableList from './components/TableList.vue';
import { store } from '@/stores/contacts';

</script>

<template>

<!-- Section droite pour la liste des contacts -->
<section class="w-2/3 p-6">       
    <contac-list-header :contactCount="store.contactCount">

    </contac-list-header>
        
    <search-bar v-model="store.searchValue">

    </search-bar>

    <table-list :filteredContacts="store.filteredContacts"  
                @onDelete="store.deleteContact" 
                @onUpdate="store.updateContact"
                @onEditing="store.editing"
                :editingId="store.edit">
    </table-list>
</section>

</template>

<style scoped>

</style>