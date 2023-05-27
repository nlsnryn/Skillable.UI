import { defineStore } from "pinia";
import { reactive, computed } from "vue";

const useErrorStore = defineStore("error", () => {
  const state = reactive({
    message: null,
    errors: {},
  });

  function setState(data) {
    state.errors = data.errors;
    state.message = data.message;
  }

  function clearState() {
    state.errors = {};
    state.message = null;
  }

  const hasErrors = () => computed(() => !!state.errors);

  return {
    state,
    setState,
    clearState,
    hasErrors,
  };
});

export { useErrorStore };
