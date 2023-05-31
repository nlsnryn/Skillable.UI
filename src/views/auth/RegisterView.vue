<script setup>
import DefaultInput from "@/components/DefaultInput.vue";
import DefaultButton from "@/components/default-button.vue";
import { reactive } from "vue";
import { useAuthStore } from "@/stores/auth.store";
import { useLoadingStore } from "@/stores/loading.store";
import { useErrorStore } from "@/stores/error.store";
import { RouterLink } from "vue-router";

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
  <div class="mt-32">
    <div v-if="errorStore.hasErrors" class="max-w-md mx-auto mb-2 px-2">
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
      class="max-w-md mx-auto py-12 px-16 bg-gray-800 border-2 border-gray-500 shadow-md rounded-md"
    >
      <div class="">
        <h1 class="text-3xl text-gray-300 font-semibold mb-6">Register</h1>
        <div class="mb-6">
          <label for="name" class="block mb-2 text-sm font-medium text-gray-300"
            >Name</label
          >
          <DefaultInput
            type="text"
            :modelValue="form.name"
            @newValue="(newValue) => (form.name = newValue)"
          />
        </div>

        <div class="mb-6">
          <label for="name" class="block mb-2 text-sm font-medium text-gray-300"
            >Email</label
          >
          <DefaultInput
            type="email"
            :modelValue="form.email"
            @newValue="(newValue) => (form.email = newValue)"
          />
        </div>

        <div class="mb-6">
          <label for="slug" class="block mb-2 text-sm font-medium text-gray-300"
            >Password</label
          >
          <DefaultInput
            type="password"
            :modelValue="form.password"
            @newValue="(newValue) => (form.password = newValue)"
          />
        </div>

        <div class="mb-6">
          <label for="slug" class="block mb-2 text-sm font-medium text-gray-300"
            >Confirmation</label
          >
          <DefaultInput
            type="password"
            :modelValue="form.password_confirmation"
            @newValue="(newValue) => (form.password_confirmation = newValue)"
          />
        </div>
        <div class="mt-10 mb-2">
          <DefaultButton
            class="w-full rounded-lg bg-gray-900 text-sm uppercase font-semibold text-gray-200 hover:-translate-y-2 duration-150"
            :isLoading="loadingStore.state.status === 'loading'"
            >Store</DefaultButton
          >
        </div>
        <RouterLink
          to="/login"
          class="text-sm underline text-gray-300 cursor-pointer ml-1 hover:text-red-500 duration-150"
        >
          Already registered?
        </RouterLink>
      </div>
    </form>
  </div>
</template>
