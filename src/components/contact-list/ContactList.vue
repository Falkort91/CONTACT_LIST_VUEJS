<script setup>
import ContacListHeader from './ui/ContacListHeader.vue';
import SearchBar from './ui/SearchBar.vue';
import TableList from './ui/table-list/TableList.vue';
import DB from '@/DB';

import {onMounted, computed, watch, ref} from 'vue';

const props = defineProps({
    apiURL:{type:String, required:true},
    formData:{type:Object}
});
const contacts=ref([]);

onMounted(async() =>{
    DB.setApiURL(props.apiURL);
    contacts.value.splice(contacts.value.length,0,...await(DB.findAll()));
    
})

const emit = defineEmits(['onDelete']);
const deleteContact = async (id) => {
   await DB.deleteOneById(id);
    const index = contacts.value.findIndex( (contact) => 
        contact.id === id
    );
    if( index!=-1){
        contacts.value.splice(index,1);
    }
}

const addContact = async() =>{
    const response = await DB.create(props.formData.firstname,props.formData.lastname,props.formData.email);
    contacts.value.splice(contacts.value.length,0,response);    
};

const updateContact = async(editedContact) => {
    const response = await DB.updateOne(editedContact);
};

const getContactCount = computed(()=>{
    return contacts.value.length
})

watch(() => props.formData, addContact, { deep: true })


</script>

<template>

<!-- Section droite pour la liste des contacts -->
<section class="w-2/3 p-6">       
    <contac-list-header :contactCount="getContactCount"></contac-list-header>
        
    <search-bar></search-bar>

    <table-list :contacts="contacts" @onDelete="deleteContact" @onUpdate="updateContact"></table-list>
</section>

</template>

<style scoped>

</style>