<script setup>
import { reactive } from "vue";
import useSkills from "../../data";

const { errors, storeSkill } = useSkills();

const form = reactive({
  name: "",
  slug: "",
});
</script>

<template>
  <div class="mt-12">
    <form
      @submit.prevent="storeSkill(form)"
      class="max-w-md mx-auto p-4 bg-white shadow-md rounded-md"
    >
      <div class="space-y-6">
        <div class="mb-6">
          <label for="name" class="block mb-2 text-sm font-medium text-gray-900"
            >Name</label
          >
          <input
            v-model="form.name"
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
            v-model="form.slug"
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
            Store
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
