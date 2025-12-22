<script setup>
import { store } from '@/stores/contacts';
import FormInput from '@/components/ui/FormInput.vue';
import AddButton from './components/AddButton.vue';

</script>

<template>
<!-- Aside gauche pour le formulaire -->
      <aside class="w-1/3 bg-gray-200 p-6 pb-12">
        <h2 class="text-xl font-bold mb-4">Add a Contact</h2>

        <form-input 
          placeholder="John"
          v-model="store.formData.firstname"
          >
          Firstname
        </form-input>

        <form-input
          placeholder="Doe"
          v-model="store.formData.lastname"
          >
          Lastname
        </form-input>

        <form-input 
          type="email" 
          placeholder="johndoe@mail.com"
          v-model="store.formData.email"
          >
          Email
        </form-input>

        <add-button @add-contact="store.createContact"></add-button>
      </aside>
      
</template>

<style scoped>

</style>