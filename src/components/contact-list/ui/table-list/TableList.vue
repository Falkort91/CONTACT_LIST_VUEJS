<script setup>
import Contact from './ui/Contact.vue';

const props= defineProps({
    contacts:{type:Array},
    filteredContacts:{type:Array}
})

const emit = defineEmits(['onDelete','onUpdate']);
const onDelete =(id) => {
    emit("onDelete", id)
}
const onUpdate = (editedContact) => {
    emit("onUpdate", editedContact);
}

</script>

<template>

    <!-- Liste des contacts triée et filtrée -->
    <table class="table-auto w-full contacts-table">
        <thead>
            <tr class="bg-gray-200">
              <th class="text-left p-4 rounded-tl-lg">
                    <a href="#">Firstname</a>
              </th>
              <th class="text-left p-4"><a href="#">Lastname</a></th>
              <th class="text-left p-4">
                    <a href="#">Email</a>
              </th>
              <th class="text-right p-4 rounded-tr-lg">Actions</th>
            </tr>
        </thead>
        <tbody>
            <contact v-for="contact in filteredContacts" :key="contact.id" :contact="contact" @onDelete="onDelete" @onUpdate="onUpdate"></contact>
        </tbody>
    </table>

</template>

<style scoped>

</style>