<script setup>
const emit = defineEmits(['addContact']);
const addContact=()=>{
  emit('addContact');
  console.log("Bouton add");
}

</script>


<template>

        <button class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
        @click="addContact">
          Add
        </button>
</template>

<style scoped>

</style>