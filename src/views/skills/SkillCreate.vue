<script setup>
import { reactive } from "vue";
import { useSkillStore } from "@/stores/skill.store.js";
import { useErrorStore } from "@/stores/error.store.js";
import { useLoadingStore } from "@/stores/loading.store.js";
import DefaultInput from "@/components/DefaultInput.vue";
import DefaultButton from "@/components/default-button.vue";

const skillStore = useSkillStore();
const errorStore = useErrorStore();
const loadingStore = useLoadingStore();

const form = reactive({
  name: "",
  slug: "",
});
</script>

<template>
  <div class="mt-12">
    <div v-if="errorStore.hasErrors" class="max-w-md mx-auto mb-2">
      <span class="text-sm text-red-500">{{ errorStore.state.message }}</span>
    </div>
    <form
      @submit.prevent="skillStore.storeSkill(form)"
      class="max-w-md mx-auto p-4 bg-white shadow-md rounded-md"
    >
      <div class="space-y-6">
        <div class="mb-6">
          <label for="name" class="block mb-2 text-sm font-medium text-gray-900"
            >Name</label
          >
          <DefaultInput
            :modelValue="form.name"
            @newValue="(newValue) => (form.name = newValue)"
          />
        </div>

        <div class="mb-6">
          <label for="slug" class="block mb-2 text-sm font-medium text-gray-900"
            >Slug</label
          >
          <DefaultInput
            :modelValue="form.slug"
            @newValue="(newValue) => (form.slug = newValue)"
          />
        </div>
        <div class="mt-4">
          <DefaultButton :isLoading="loadingStore.state.status === 'loading'"
            >Store</DefaultButton
          >
        </div>
      </div>
    </form>
  </div>
</template>
