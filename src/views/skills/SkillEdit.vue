<script setup>
import AsyncSkillEdit from "@/components/Skill/AsyncSkillEdit.vue";
import AnimatedLoading from "@/components/AnimatedLoading.vue";
import { defineProps } from "vue";

const props = defineProps({
  id: {
    required: true,
    type: String,
  },
});
</script>

<template>
  <div>
    <Suspense>
      <AsyncSkillEdit :skillID="props.id" />

      <template #fallback>
        <AnimatedLoading />
      </template>
    </Suspense>
  </div>
</template>
