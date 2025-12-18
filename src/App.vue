<script setup>
import AddForm from './modules/addform/AddForm.vue';
import AppFooter from './layout/AppFooter.vue';
import ContactList from './modules/contact-list/ContactList.vue';
import {reactive,onMounted} from 'vue';
import { store } from './stores/contacts';

const formData = reactive({});
const addContact = (data) => {
 Object.assign(formData,data);
}

onMounted(async () => {
   await store.init("https://68dd1ef87cd1948060ac7fc2.mockapi.io/")
});

</script>

<template>
  <add-form @add-contact="addContact">

  </add-form>

  <contact-list :formData="formData">
  </contact-list>

  <app-footer>
    
  </app-footer>
</template>

<style scoped></style>
