<script setup>
import {ref} from 'vue';
const firstname=ref("");

const emit = defineEmits(['firstname']);
const onInput=()=>{
  emit('firstname', firstname.value)
  console.log('emit du firstname: ' + firstname.value);
  
}
</script>

<template>

        <div class="mb-4">
          <label class="block text-gray-700">Firstname</label>
          <input
            type="text"
            class="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Alex"
            v-model="firstname"
            @input="onInput"
          />
        </div>

</template>

<style scoped>

</style>