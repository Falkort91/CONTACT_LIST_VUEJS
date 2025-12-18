<script setup>
const props = defineProps({
    type:{type:String, default:"text"},
    placeholder:{type:String},
    modelValue:{type:String, default:""}
})

const emit = defineEmits([
    "update:modelValue"
])
function onInput(e){
    emit("update:modelValue", e.target.value)
}
    
</script>


<template>
    <div class="mb-4">
        <label class="block text-gray-700"><slot></slot></label>
        <input
            :type="props.type"
            class="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            :placeholder="props.placeholder"
            :value="props.modelValue"
            @input="onInput"
        />
    </div>
</template>


<style scoped>

</style>