<script setup>
import FirstnameInput from './ui/FirstnameInput.vue';
import LastnameInput from './ui/LastnameInput.vue';
import EmailInput from './ui/EmailInput.vue';
import AddButton from './ui/AddButton.vue';


</script>

<template>

<!-- Aside gauche pour le formulaire -->
      <aside class="w-1/3 bg-gray-200 p-6 pb-12">
        <h2 class="text-xl font-bold mb-4">Add a Contact</h2>

        <firstname-input></firstname-input>

        <lastname-input></lastname-input>

        <email-input></email-input>

        <add-button></add-button>
      </aside>
      
</template>

<style scoped>

</style>