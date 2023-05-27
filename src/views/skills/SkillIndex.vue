<script setup>
import AsyncSkillIndex from "@/components/Skill/AsyncSkillIndex.vue";
import AnimatedLoading from "@/components/AnimatedLoading.vue";
</script>

<template>
  <div>
    <Suspense>
      <AsyncSkillIndex />

      <template #fallback>
        <AnimatedLoading />
      </template>
    </Suspense>
  </div>
</template>
