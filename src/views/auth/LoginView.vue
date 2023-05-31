<script setup>
import DefaultInput from "@/components/DefaultInput.vue";
import DefaultButton from "@/components/default-button.vue";
import { reactive } from "vue";
import { useAuthStore } from "@/stores/auth.store.js";
import { useErrorStore } from "@/stores/error.store.js";
import { useLoadingStore } from "@/stores/loading.store.js";
import { useRouter } from "vue-router";

const authStore = useAuthStore();
const errorStore = useErrorStore();
const loadingStore = useLoadingStore();
errorStore.clearState();
const router = useRouter();
const form = reactive({
  email: "",
  password: "",
});
</script>

<template>
  <div class="mt-32">
    <div v-if="errorStore.hasErrors" class="max-w-md mx-auto mb-2 px-2">
      <span class="text-sm text-red-500">{{ errorStore.state.message }}</span>
    </div>
    <form
      @submit.prevent="authStore.login(form.email, form.password)"
      class="max-w-md mx-auto py-12 px-16 bg-gray-800 border-2 border-gray-500 shadow-md rounded-md"
    >
      <div class="">
        <h1 class="text-3xl text-gray-300 font-semibold mb-6">Log In</h1>
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
        <div class="mt-10">
          <DefaultButton
            class="w-full rounded-lg bg-gray-900 text-sm uppercase font-semibold text-gray-200 hover:-translate-y-2 duration-150"
            :isLoading="loadingStore.state.status === 'loading'"
            >Store</DefaultButton
          >
        </div>
        <h1 class="text-sm text-gray-300 cursor-pointer mt-5 ml-1">
          Don't have an account?
          <span
            @click="router.push({ name: 'register' })"
            class="hover:text-red-500 duration-150 underline"
            >Register</span
          >
        </h1>
      </div>
    </form>
  </div>
</template>
