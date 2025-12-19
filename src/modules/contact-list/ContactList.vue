<script setup>
import ContacListHeader from './components/ContacListHeader.vue';
import SearchBar from './components/SearchBar.vue';
import TableList from './components/TableList.vue';
import { store } from '@/stores/contacts';

/* const filteredContacts=ref([]); */

/* const getContactCount = computed(()=>{
    return contacts.value.length
}) */

/* const searchingContact=(searchValue) =>{
    filteredContacts.value= contacts.value.filter(contact => 
        contact.firstname.toLowerCase().includes(searchValue)||
        contact.lastname.toLowerCase().includes(searchValue)||
        contact.email.toLowerCase().includes(searchValue));
} */

/* watch(() => props.formData, addContact, { deep: true })
watch(contacts, () => {
    filteredContacts.value = contacts.value;
},{ deep: true }
); */


</script>

<template>

<!-- Section droite pour la liste des contacts -->
<section class="w-2/3 p-6">       
    <contac-list-header :contactCount="getContactCount">

    </contac-list-header>
        
    <search-bar @onSearch="searchingContact">

    </search-bar>

    <table-list :filteredContacts="filteredContacts" 
                :contacts="store.contacts" 
                @onDelete="store.deleteContact" 
                @onUpdate="store.updateContact"
                @onEditing="store.editing"
                :editingId="store.edit">
    </table-list>
</section>

</template>

<style scoped>

</style>