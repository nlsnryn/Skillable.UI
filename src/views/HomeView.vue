<script setup>
const env = import.meta.env.VITE_API_URL;
</script>

<template>
  <main>
    {{ env }}
  </main>
</template>
