<script setup>
import { defineProps, defineEmits } from "vue";

defineEmits(["newValue"]);
const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <input
    type="text"
    id="slug"
    class="input-text"
    :value="modelValue"
    @input="$emit('newValue', $event.target.value)"
  />
</template>
