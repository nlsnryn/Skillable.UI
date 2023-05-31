<script setup>
import defaultButton from "../components/default-button.vue";
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="h-screen mt-28 mx-auto w-11/12">
    <div class="flex flex-col md:flex-row justify-between items-center">
      <div class="mx-auto mb-10 md:mb-0">
        <img
          src="@/assets/icons/Sketch.svg"
          alt="Logo Home"
          class="h-auto w-72 md:w-[500px] mt-20"
        />
      </div>
      <div class="text-gray-300 max-w-lg mx-auto">
        <h1 class="text-4xl font-semibold mb-5">Skillable App</h1>
        <p class="text-base tracking-wide mb-14">
          Skillable App is a Web Application that you can store your skills or
          specific skills to your more enhance balance for your skills speically
          in your programming skills. You can see all your skills. You can
          register and log in your account for your privacy.
        </p>
        <RouterLink
          to="/register"
          class="bg-red-500 px-10 py-5 text-lg font-bold hover:bg-red-600 duration-150 border border-red-500 rounded-xl"
          >Register</RouterLink
        >
        <RouterLink
          to="/login"
          class="bg-transparent hover:bg-transparent px-10 py-5 text-lg font-bold duration-150 border-2 border-red-500 text-red-500 hover:text-red-700 hover:border-red-700 rounded-xl ml-5"
          >Log In</RouterLink
        >
      </div>
    </div>
  </div>
</template>
