<script setup>
import { useSkillStore } from "@/stores/skill.store";
import { useAuthStore } from "@/stores/auth.store";
import { ref, onMounted } from "vue";
import AnimatedLoading from "../components/AnimatedLoading.vue";

const skillStore = useSkillStore();
const authStore = useAuthStore();
const totalCount = ref(0);
const loading = ref(false);

onMounted(async () => {
  loading.value = true;
  totalCount.value = await skillStore.totalSkills();

  await new Promise((res) => setTimeout(res, 300));
  loading.value = false;
});
</script>

<template>
  <section>
    <div class="max-w-screen-xl w-full mt-24 p-4 text-start">
      <h1 class="text-red-500 text-2xl">
        Hi! {{ authStore.credentials.user.name }}
      </h1>
    </div>
    <main v-if="!loading" class="max-w-2xl mx-auto text-center mt-12">
      <h1 class="text-red-500 font-bold text-4xl">Skillable App</h1>
      <h2 class="text-red-500 mt-2 text-lg">
        Store, Update, and Delete all your skills in skills section
      </h2>
      <div class="flex justify-center items-center mt-20">
        <h1 class="text-lg text-red-500 font-bold mr-2 uppercase">
          Your total Skills
        </h1>
        <div class="bg-red-500 text-white w-fit py-3 px-8 rounded-lg">
          <h1 class="text-5xl">{{ totalCount }}</h1>
        </div>
      </div>
    </main>
    <div v-else>
      <AnimatedLoading />
    </div>
  </section>
</template>
