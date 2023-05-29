<script setup>
import DefaultInput from "@/components/DefaultInput.vue";
import DefaultButton from "@/components/default-button.vue";
import { reactive } from "vue";
import { useAuthStore } from "@/stores/auth.store";
import { useLoadingStore } from "@/stores/loading.store";
import { useErrorStore } from "@/stores/error.store";

const authStore = useAuthStore();
const errorStore = useErrorStore();
const loadingStore = useLoadingStore();

errorStore.clearState();

const form = reactive({
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
});
</script>

<template>
  <div class="mt-12">
    <div v-if="errorStore.hasErrors" class="max-w-md mx-auto mb-2">
      <span class="text-sm text-red-500">{{ errorStore.state.message }}</span>
    </div>
    <form
      @submit.prevent="
        authStore.register(
          form.name,
          form.email,
          form.password,
          form.password_confirmation
        )
      "
      class="max-w-md mx-auto p-4 bg-white shadow-md rounded-md"
    >
      <div class="space-y-6">
        <div class="mb-6">
          <label for="name" class="block mb-2 text-sm font-medium text-gray-900"
            >Name</label
          >
          <DefaultInput
            type="text"
            :modelValue="form.name"
            @newValue="(newValue) => (form.name = newValue)"
          />
        </div>

        <div class="mb-6">
          <label for="name" class="block mb-2 text-sm font-medium text-gray-900"
            >Email</label
          >
          <DefaultInput
            type="email"
            :modelValue="form.email"
            @newValue="(newValue) => (form.email = newValue)"
          />
        </div>

        <div class="mb-6">
          <label for="slug" class="block mb-2 text-sm font-medium text-gray-900"
            >Password</label
          >
          <DefaultInput
            type="password"
            :modelValue="form.password"
            @newValue="(newValue) => (form.password = newValue)"
          />
        </div>

        <div class="mb-6">
          <label for="slug" class="block mb-2 text-sm font-medium text-gray-900"
            >Confirmation</label
          >
          <DefaultInput
            type="password"
            :modelValue="form.password_confirmation"
            @newValue="(newValue) => (form.password_confirmation = newValue)"
          />
        </div>
        <div class="mt-4">
          <DefaultButton :isLoading="loadingStore.state.status === 'loading'"
            >Store</DefaultButton
          >
        </div>
      </div>
    </form>
  </div>
</template>
