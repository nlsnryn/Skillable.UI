<script setup>
import { defineProps } from "vue";

const props = defineProps({
  isLoading: {
    type: Boolean,
    default: false,
  },
});

function isLoading() {
  if (props.isLoading) {
    return "cursor-not-allowed";
  }
}

function isDisabled() {
  if (props.isLoading) {
    return true;
  }
}

function isOpacity() {
  if (props.isLoading) {
    return "opacity-50";
  }
}
</script>

<template>
  <button
    class="button-form"
    :class="[isLoading(), isOpacity()]"
    :disabled="isDisabled()"
  >
    <slot></slot>
  </button>
</template>
