<script setup>
import {ref} from 'vue';

const lastname=ref('');
const emits = defineEmits(['lastname']);
const onInput = () =>{
  emits ('lastname', lastname.value)
  console.log('emit du lastname : '+lastname.value);
  
}

</script>

<template>

        <div class="mb-4">
          <label class="block text-gray-700">Lastname</label>
          <input
            type="text"
            class="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Doe"
            v-model="lastname"
            @input="onInput"
          />
        </div>

</template>

<style scoped>

</style>