<script setup>
import { reactive, ref } from 'vue';

const edit =ref('');

const props=defineProps({
    contact:{type:Object}
})
const editedContact=reactive(props.contact);

const emit=defineEmits(['onDelete','onUpdate']);
const onDelete = () =>{
    emit('onDelete',props.contact.id)
}

const editing=()=>{
    edit.value = "isEditing";
    console.log(editedContact);
}

const onUpdate = () => {
    emit('onUpdate', editedContact);
    edit.value="";
}

</script>

<template>

    <tr class="contact-row" :class="edit">
        <td class="p-4">
            <span class="isEditing-hidden">{{editedContact.firstname}}</span>
            <input
            type="text"
            class="input-firstname isEditing-visible w-full mt-1 block px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            v-model="editedContact.firstname"
            />
        </td>
        <td class="p-4">
            <span class="isEditing-hidden">{{editedContact.lastname }}</span>
            <input
            type="text"
            class="input-lastname isEditing-visible w-full mt-1 block px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            v-model="editedContact.lastname"
            />
        </td>
        <td class="p-4">
            <span class="isEditing-hidden">{{ editedContact.email }}</span>
            <input
            type="text"
            class="input-email isEditing-visible w-full mt-1 block px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            v-model="editedContact.email"
            />
        </td>
        <td class="p-4">
            <div class="flex justify-end space-x-2">
                <button class="btn-check isEditing-visible bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-md"
                        @click="onUpdate">
                    <i class="fa-solid fa-check"></i>
                </button>
                <button class="btn-edit isEditing-hidden bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-md"
                        @click="editing">
                    <i class="fa-solid fa-pen-to-square"></i>
                </button>
                <button class="btn-delete isEditing-hidden bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md"
                        @click="onDelete">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
        </td>
    </tr>

</template>

<style scoped></style>