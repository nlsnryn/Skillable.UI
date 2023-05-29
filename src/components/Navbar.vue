<script setup>
import { RouterLink } from "vue-router";
import { useAuthStore } from "@/stores/auth.store";

const authStore = useAuthStore();
</script>

<template>
  <nav class="p-4 bg-indigo-600 flex justify-between items-center px-20">
    <div class="">
      <RouterLink to="/" class="text-white font-bold italic text-xl"
        >Skillable</RouterLink
      >
    </div>
    <div class="space-x-5">
      <div v-if="authStore.isAuthenticated()" class="auth">
        <RouterLink
          class="text-white px-4 py-2 hover:bg-indigo-800 rounded-md duration-150"
          to="/dashboard"
          >Dashboard</RouterLink
        >
        <RouterLink
          class="text-white px-4 py-2 hover:bg-indigo-800 rounded-md duration-150"
          to="/skills"
          >Skills</RouterLink
        >
        <button
          @click="authStore.logout()"
          class="text-white px-4 py-2 hover:bg-indigo-800 rounded-md duration-150"
          to="/skills"
        >
          Logout
        </button>
      </div>
      <div v-else class="not-auth">
        <RouterLink
          class="text-white px-4 py-2 hover:bg-indigo-800 rounded-md duration-150"
          to="/login"
          >Login</RouterLink
        >
        <RouterLink
          class="text-white px-4 py-2 hover:bg-indigo-800 rounded-md duration-150"
          to="/register"
          >Register</RouterLink
        >
      </div>
    </div>
  </nav>
</template>
