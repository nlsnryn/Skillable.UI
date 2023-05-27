<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <nav class="p-4 bg-indigo-600 flex justify-between items-center px-20">
    <div class="">
      <RouterLink to="/" class="text-white font-bold italic text-xl"
        >Skillable</RouterLink
      >
    </div>
    <div class="space-x-5">
      <RouterLink
        class="text-white px-4 py-2 hover:bg-indigo-800 rounded-md duration-150"
        to="/"
        >Home</RouterLink
      >
      <RouterLink
        class="text-white px-4 py-2 hover:bg-indigo-800 rounded-md duration-150"
        to="/skills"
        >Skills</RouterLink
      >
    </div>
  </nav>
</template>
