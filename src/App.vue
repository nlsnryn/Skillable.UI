<script setup>
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <div class="w-11/12 mx-auto">
    <header>
      <div class="max-w-7xl mx-auto">
        <Navbar />
      </div>
    </header>

    <main class="max-w-7xl mx-auto min-h-screen">
      <RouterView />
    </main>
  </div>
</template>
