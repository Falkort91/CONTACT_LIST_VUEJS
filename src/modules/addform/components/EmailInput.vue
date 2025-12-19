<script setup>
import {ref} from 'vue';
const email = ref('');

const emits = defineEmits(['email']);
const getEmail = () => {
  emits('email', email.value);
}

</script>

<template>

        <div class="mb-4">
          <label class="block text-gray-700">Email</label>
          <input
            type="email"
            class="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="alex.doe@gmail.com"
            v-model="email"
            @input="getEmail"
          />
        </div>

</template>

<style scoped>

</style>