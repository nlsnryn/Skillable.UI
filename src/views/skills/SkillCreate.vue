<script setup>
import { reactive } from "vue";
import { useSkillStore } from "@/stores/skill.store.js";
import { useErrorStore } from "@/stores/error.store.js";
import { useLoadingStore } from "@/stores/loading.store.js";
import { useRouter } from "vue-router";
import DefaultInput from "@/components/DefaultInput.vue";
import DefaultButton from "@/components/default-button.vue";

const router = useRouter();
const skillStore = useSkillStore();
const errorStore = useErrorStore();
const loadingStore = useLoadingStore();

const form = reactive({
  technology: "",
  skill: "",
});
</script>

<template>
  <div class="mt-40">
    <div v-if="errorStore.hasErrors" class="max-w-md mx-auto mb-2">
      <span class="text-sm text-red-500">{{ errorStore.state.message }}</span>
    </div>
    <form
      @submit.prevent="skillStore.storeSkill(form)"
      class="max-w-md mx-auto py-12 px-16 bg-gray-800 border-2 border-gray-500 shadow-md rounded-md text-gray-300"
    >
      <div class="">
        <h1 class="text-2xl mb-6">Add a new skill</h1>
        <div class="mb-6">
          <label for="name" class="block mb-2 text-sm font-medium"
            >Technologies</label
          >
          <DefaultInput
            type="text"
            :modelValue="form.technology"
            @newValue="(newValue) => (form.technology = newValue)"
          />
        </div>

        <div class="mb-6">
          <label for="slug" class="block mb-2 text-sm font-medium">Skill</label>
          <DefaultInput
            type="text"
            :modelValue="form.skill"
            @newValue="(newValue) => (form.skill = newValue)"
          />
        </div>
        <div class="mt-10">
          <DefaultButton
            class="w-full rounded-lg bg-gray-900 text-sm uppercase font-semibold text-gray-200 hover:-translate-y-2 duration-150"
            :isLoading="loadingStore.state.status === 'loading'"
            >Store</DefaultButton
          >
        </div>
      </div>
    </form>
    <div class="max-w-md mx-auto mt-10">
      <DefaultButton
        @click="router.push({ name: 'SkillIndex' })"
        class="bg-red-500 hover:bg-red-600 text-sm uppercase font-medium text-gray-200 duration-150"
      >
        <i class="fa-solid fa-arrow-left mr-1"></i>Back
      </DefaultButton>
    </div>
  </div>
</template>
