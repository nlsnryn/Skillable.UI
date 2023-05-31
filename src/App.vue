<script setup>
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <div class="bg-gray-900">
    <div class="w-full mx-auto">
      <header>
        <div class="w-full mx-auto shadow-lg bg-gray-900 fixed">
          <Navbar />
        </div>
      </header>

      <main class="max-w-6xl mx-auto h-screen overflow-hidden">
        <RouterView v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" :key="$route.path"></component>
          </transition>
        </RouterView>
      </main>
    </div>
  </div>
</template>

<style lang="css" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
