<script setup>
import useSkills from "../../data";
import { onMounted, defineProps } from "vue";

const { skill, getSkill, updateSkill, errors } = useSkills();

const props = defineProps({
  id: {
    required: true,
    type: String,
  },
});

onMounted(() => getSkill(props.id));
</script>

<template>
  <div class="mt-12">
    <form
      @submit.prevent="updateSkill($route.params.id)"
      class="max-w-md mx-auto p-4 bg-white shadow-md rounded-md"
    >
      <div class="space-y-6">
        <div class="mb-6">
          <label for="name" class="block mb-2 text-sm font-medium text-gray-900"
            >Name</label
          >
          <input
            v-model="skill.name"
            type="text"
            id="name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          <div v-if="errors.name">
            <span class="text-xs text-red-500">{{ errors.name[0] }}</span>
          </div>
        </div>
        <div class="mb-6">
          <label for="slug" class="block mb-2 text-sm font-medium text-gray-900"
            >Slug</label
          >
          <input
            v-model="skill.slug"
            type="text"
            id="slug"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          <div v-if="errors.slug">
            <span class="text-xs text-red-500">{{ errors.slug[0] }}</span>
          </div>
        </div>
        <div class="mt-4">
          <button
            class="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
          >
            Update
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
