<script setup>
import { RouterLink } from "vue-router";
import { useAuthStore } from "@/stores/auth.store";
import { ref } from "vue";
import defaultButton from "./default-button.vue";
import BaseModal from "./BaseModal.vue";

const authStore = useAuthStore();
const activeModal = ref(false);
const isDashboard = ref(true);

function forDashboard() {
  if (isDashboard.value) {
    return "bg-red-500";
  } else {
    return "bg-transparent";
  }
}

function forSkill() {
  if (!isDashboard.value) {
    return "bg-red-500";
  } else {
    return "bg-transparent";
  }
}

function toggleModal() {
  activeModal.value = !activeModal.value;
}
</script>

<template>
  <nav
    class="p-4 max-w-screen-xl flex justify-between items-center px-20 mx-auto"
  >
    <div class="">
      <RouterLink
        to="/"
        class="font-bold text-3xl stroke-2 stroke-white flex items-center text-red-500"
      >
        <h1>Skillable</h1>
        <i
          class="fa-solid fa-plus text-xl cursor-pointer duration-150 ml-2"
        ></i>
        <i
          class="fa-solid fa-plus text-xl cursor-pointer duration-150 ml-0.5"
        ></i>
      </RouterLink>
    </div>
    <div class="space-x-5">
      <div v-if="authStore.isAuthenticated()" class="auth">
        <RouterLink
          @click="isDashboard = true"
          class="text-white px-4 py-2 hover:bg-red-500 rounded-md duration-150"
          :class="forDashboard()"
          to="/dashboard"
          >Dashboard</RouterLink
        >
        <RouterLink
          @click="isDashboard = false"
          class="text-white px-4 py-2 hover:bg-red-500 rounded-md duration-150 ml-2"
          :class="forSkill()"
          to="/skills"
          >Skills</RouterLink
        >
        <button
          @click="authStore.logout()"
          class="text-white px-4 py-2 hover:bg-red-500 rounded-md duration-150 ml-5"
          to="/skills"
        >
          <span class="text-red-700 text-xl font-bold">!</span> Logout
        </button>
      </div>
      <div v-else class="not-auth space-x-5">
        <defaultButton
          @click="toggleModal"
          class="text-white px-4 py-1 bg-red-500 hover:bg-red-600 rounded-md duration-150"
          >Credits</defaultButton
        >
      </div>
    </div>

    <BaseModal :activeModal="activeModal" @close-modal="toggleModal">
      <div class="text-black">
        <div class="flex justify-center">
          <img
            src="@/assets/icons/DP.jpg"
            alt="Profile"
            class="h-auto w-40 object-cover rounded-full mb-7"
          />
        </div>

        <div class="about">
          <h1 class="text-gray-300 text-2xl">Nelson Ryan Arabit</h1>
          <h1 class="text-gray-300 text-md">Vue && Laravel Developer</h1>
          <p class="text-gray-300 text-md">
            Bachelor of Science in Information Technology
          </p>
        </div>

        <div class="contact mt-10 flex flex-col">
          <a
            href="https://www.facebook.com/nelson.arabit.3/"
            target="_blank"
            class="text-sm text-gray-300 underline cursor-pointer hover:text-red-500 duration-150"
          >
            Facebook Account
          </a>
          <a
            href="https://github.com/nlsnryn"
            target="_blank"
            class="text-sm text-gray-300 underline cursor-pointer hover:text-red-500 duration-150 mt-1"
          >
            Github Account
          </a>
        </div>
      </div>
    </BaseModal>
  </nav>
</template>
