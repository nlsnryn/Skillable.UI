<template>
  <div class="flex justify-center mt-40">
    <div class="custom-loader"></div>
  </div>
</template>

<style scoped>
.custom-loader {
  width: 50px;
  height: 50px;
  display: grid;
  animation: s4 4s infinite;
}
.custom-loader::before,
.custom-loader::after {
  content: "";
  grid-area: 1/1;
  border: 8px solid;
  border-radius: 50%;
  border-color: #dc2626 #dc2626 #0000 #0000;
  mix-blend-mode: darken;
  animation: s4 1s infinite linear;
}
.custom-loader::after {
  border-color: #0000 #0000 #e4e4ed #e4e4ed;
  animation-direction: reverse;
}

@keyframes s4 {
  100% {
    transform: rotate(1turn);
  }
}
</style>
