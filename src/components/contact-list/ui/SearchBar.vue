<script setup>
import { ref } from 'vue';
const searchValue=ref('');

const emits = defineEmits(['onSearch']);

const onSearch =() =>{
    emits('onSearch', searchValue.value)
}
</script>

<template>

    <!-- Filtre de recherche -->
    <div class="mb-4">
        <input
        type="text"
        class="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        placeholder="Search a contact"
        v-model="searchValue"
        @input="onSearch"
        />
    </div>


</template>

<style scoped>

</style>