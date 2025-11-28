<script setup>
import FirstnameInput from './ui/FirstnameInput.vue';
import LastnameInput from './ui/LastnameInput.vue';
import EmailInput from './ui/EmailInput.vue';
import AddButton from './ui/AddButton.vue';
import {ref} from 'vue';

const firstnameValue=ref('');
const lastnameValue=ref('');
const emailValue=ref('');


const getFirstname = (firstname) => {
  firstnameValue.value = firstname;
};
const getLastname = (lastname) => {
  lastnameValue.value = lastname;
}
const getEmail = (email) => {
  emailValue.value = email;
}

const emits =defineEmits(['addContact']);
const addContact = (data) =>{
 emits('addContact',data);
 console.log("emit du bouton ADD : "+ data);
}
</script>

<template>

<!-- Aside gauche pour le formulaire -->
      <aside class="w-1/3 bg-gray-200 p-6 pb-12">
        <h2 class="text-xl font-bold mb-4">Add a Contact</h2>

        <firstname-input @firstname="getFirstname"></firstname-input>

        <lastname-input @lastname="getLastname"></lastname-input>

        <email-input @email="getEmail"></email-input>

        <add-button @add-contact="addContact" :firstname="firstnameValue" :lastname="lastnameValue" :email="emailValue"></add-button>
      </aside>
      
</template>

<style scoped>

</style>