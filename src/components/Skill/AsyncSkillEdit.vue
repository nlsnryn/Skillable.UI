<script setup>
import { defineProps } from "vue";
import { storeToRefs } from "pinia";
import { useSkillStore } from "@/stores/skill.store.js";
import { useErrorStore } from "@/stores/error.store.js";
import { useLoadingStore } from "@/stores/loading.store";
import DefaultInput from "../DefaultInput.vue";
import DefaultButton from "../default-button.vue";

const loadingStore = useLoadingStore();
const errorStore = useErrorStore();
const skillStore = useSkillStore();
const { skill } = storeToRefs(skillStore);

const props = defineProps({
  skillID: {
    required: true,
    type: String,
  },
});
await new Promise((res) => setTimeout(res, 100));
await skillStore.getSkill(props.skillID);
</script>

<template>
  <div class="mt-12">
    <div v-if="errorStore.hasErrors" class="max-w-md mx-auto mb-2">
      <span class="text-sm text-red-500">{{ errorStore.state.message }}</span>
    </div>
    <form
      @submit.prevent="skillStore.updateSkill($route.params.id)"
      class="max-w-md mx-auto p-4 bg-white shadow-md rounded-md"
    >
      <div class="space-y-6">
        <div class="mb-6">
          <label for="name" class="block mb-2 text-sm font-medium text-gray-900"
            >Name</label
          >
          <DefaultInput
            :modelValue="skill.name"
            @newValue="(newValue) => (skill.name = newValue)"
          />
        </div>

        <div class="mb-6">
          <label for="slug" class="block mb-2 text-sm font-medium text-gray-900"
            >Slug</label
          >
          <DefaultInput
            :modelValue="skill.slug"
            @newValue="(newValue) => (skill.slug = newValue)"
          />
        </div>
        <div class="mt-4">
          <DefaultButton :isLoading="loadingStore.state.status === 'loading'"
            >Update</DefaultButton
          >
        </div>
      </div>
    </form>
  </div>
</template>
