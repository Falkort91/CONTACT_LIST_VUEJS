<script setup>
import AddForm from './modules/addform/AddForm.vue';
import AppFooter from './layout/AppFooter.vue';
import ContactList from './modules/contact-list/ContactList.vue';
import {reactive,onMounted} from 'vue';
import { store } from './stores/contacts';


onMounted(async () => {
   await store.init("https://68dd1ef87cd1948060ac7fc2.mockapi.io/")
});

</script>

<template>
  <add-form @add-contact="store.createContact">

  </add-form>

  <contact-list></contact-list>

  <app-footer>
    
  </app-footer>
</template>

<style scoped></style>
