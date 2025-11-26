<script setup>
import AddForm from './components/addform/AddForm.vue';
import AppFooter from './components/AppFooter.vue';
import ContactList from './components/contact-list/ContactList.vue';



</script>

<template>
  <add-form></add-form>

  <contact-list apiURL="https://691b19752d8d785575717f93.mockapi.io/"></contact-list>

  <app-footer></app-footer>
</template>

<style scoped></style>
