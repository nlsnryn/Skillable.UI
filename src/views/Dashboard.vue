<script setup>
import { useSkillStore } from "@/stores/skill.store";
import { ref, onMounted } from "vue";
import AnimatedLoading from "../components/AnimatedLoading.vue";

const skillStore = useSkillStore();
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
    <main v-if="!loading" class="max-w-2xl mx-auto text-center mt-24">
      <h1 class="text-indigo-600 font-bold text-4xl">Skillable App</h1>
      <h2 class="text-indigo-600 mt-2 italic text-lg">
        Store, Update, and Delete all your skills in skills section
      </h2>
      <div class="flex justify-center items-center mt-20">
        <h1 class="text-lg text-indigo-600 font-bold mr-2 uppercase">
          Your total Skills
        </h1>
        <div class="bg-indigo-600 text-white w-fit py-3 px-8 rounded-lg">
          <h1 class="text-5xl">{{ totalCount }}</h1>
        </div>
      </div>
    </main>
    <div v-else>
      <AnimatedLoading />
    </div>
  </section>
</template>
