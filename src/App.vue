<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="w-11/12 mx-auto">
    <header>
      <div class="max-w-7xl mx-auto">
        <nav class="p-4">
          <RouterLink
            class="px-4 py-2 mr-4 bg-indigo-600 hover:bg-indigo-800 text-white rounded-md"
            to="/"
            >Home</RouterLink
          >
          <RouterLink
            class="px-4 py-2 mr-4 bg-indigo-600 hover:bg-indigo-800 text-white rounded-md"
            to="/skills"
            >Skills</RouterLink
          >
        </nav>
      </div>
    </header>

    <main class="max-w-7xl mx-auto min-h-screen">
      <RouterView />
    </main>
  </div>
</template>
