<script setup>
import ContacListHeader from './components/ContacListHeader.vue';
import SearchBar from './components/SearchBar.vue';
import TableList from './components/TableList.vue';
import DB from '@/services/DB';

import {onMounted, computed, watch, ref} from 'vue';

const props = defineProps({
    apiURL:{type:String},
    formData:{type:Object}
});
const contacts=ref([]);
const filteredContacts=ref([]);

onMounted(async() =>{
    DB.setApiURL("https://68dd1ef87cd1948060ac7fc2.mockapi.io/");
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

const searchingContact=(searchValue) =>{
    filteredContacts.value= contacts.value.filter(contact => 
        contact.firstname.toLowerCase().includes(searchValue)||
        contact.lastname.toLowerCase().includes(searchValue)||
        contact.email.toLowerCase().includes(searchValue));
}

watch(() => props.formData, addContact, { deep: true })
watch(contacts, () => {
    filteredContacts.value = contacts.value;
},{ deep: true }
);


</script>

<template>

<!-- Section droite pour la liste des contacts -->
<section class="w-2/3 p-6">       
    <contac-list-header :contactCount="getContactCount">

    </contac-list-header>
        
    <search-bar @onSearch="searchingContact">

    </search-bar>

    <table-list :filteredContacts="filteredContacts" 
                :contacts="contacts" 
                @onDelete="deleteContact" 
                @onUpdate="updateContact">
    </table-list>
</section>

</template>

<style scoped>

</style>