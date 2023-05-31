<script setup>
import { RouterLink } from "vue-router";
import { useSkillStore } from "@/stores/skill.store.js";
import { computed } from "vue";

const skillStore = useSkillStore();
const displayNoSkills = computed(() => skillStore.skills.length === 0);

await new Promise((res) => setTimeout(res, 300));
await skillStore.getSkills();
</script>

<template>
  <div class="mt-32">
    <div class="flex justify-end m-2 p-2">
      <RouterLink
        :to="{ name: 'SkillCreate' }"
        class="px-4 py-2 text-white bg-red-500 hover:bg-red-600 rounded-md duration-150"
        >New skill</RouterLink
      >
    </div>

    <div class="text-center mt-10" v-if="displayNoSkills">
      <h1 class="text-red-600 font-bold text-2xl">
        No skill available, kindly add new skill.
      </h1>
    </div>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg" v-else>
      <table class="w-full text-sm text-left text-gray-500">
        <thead class="text-xs text-gray-50 uppercase bg-gray-800">
          <tr>
            <th scope="col" class="px-6 py-3">Technologies</th>
            <th scope="col" class="px-6 py-3">Skill</th>
            <th scope="col" class=""></th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="skill in skillStore.skills"
            :key="skill.id"
            class="bg-white border-b"
          >
            <td class="py-4 px-6 text-gray-800 font-semibold">
              {{ skill.technology }}
            </td>
            <td class="py-4 px-6 text-gray-800 font-semibold">
              {{ skill.skill }}
            </td>
            <td>
              <RouterLink
                :to="{ name: 'SkillEdit', params: { id: skill.id } }"
                class="px-4 py-1.5 bg-gray-700 text-white rounded cursor-pointer hover:bg-gray-900 duration-150"
                >Edit</RouterLink
              >
              <button
                @click="skillStore.destroySkill(skill.id)"
                type="submit"
                class="px-3 py-1 bg-red-500 text-white rounded ml-2 cursor-pointer hover:bg-red-600 duration-150"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
