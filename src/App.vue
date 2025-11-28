<script setup>
import AddForm from './components/addform/AddForm.vue';
import AppFooter from './components/AppFooter.vue';
import ContactList from './components/contact-list/ContactList.vue';
import {reactive} from 'vue';

const formData =reactive({});

const addContact = (data) => {
 Object.assign(formData,data);
 console.log(formData);
}
</script>

<template>
  <add-form @add-contact="addContact"></add-form>

  <contact-list apiURL="https://691b19752d8d785575717f93.mockapi.io/" :formData="formData"></contact-list>

  <app-footer></app-footer>
</template>

<style scoped></style>
