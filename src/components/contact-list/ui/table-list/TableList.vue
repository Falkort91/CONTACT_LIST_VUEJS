<script setup>
import Contact from './ui/Contact.vue';

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
            <contact></contact>
        </tbody>
    </table>

</template>

<style scoped>

</style>