<script setup>
const props = defineProps({
  firstname :{type:String},
  lastname :{type:String},
  email :{type:String}
})

const emit = defineEmits(['addContact']);
const addContact=()=>{
  emit('addContact', {firstname:props.firstname, lastname:props.lastname, email:props.email})
  console.log("emit du bouton add : " +props.firstname+" "+props.lastname+" email: "+props.email);
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