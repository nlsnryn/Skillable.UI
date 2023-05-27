import { defineStore } from "pinia";
import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import SkillService from "../service/SkillService";

export const useSkillStore = defineStore("SkillStore", () => {
  const skills = ref([]);
  const skill = ref([]);
  const errors = ref({});

  const router = useRouter();

  const getSkills = async () => {
    const response = await SkillService.skillsIndex();
    skills.value = response.data;
  };

  const getSkill = async (id) => {
    const response = await SkillService.skillShow(id);
    skill.value = response.data;
  };

  const storeSkill = async (data) => {
    try {
      await SkillService.skillStore(data);
      router.push({ name: "SkillIndex" });
    } catch (error) {
      if (error.response.status === 422) {
        errors.value = error.response.data.errors;
      }
    }
  };

  const updateSkill = async (id) => {
    try {
      await SkillService.skillUpdate(skill.value, id);
      router.push({ name: "SkillIndex" });
    } catch (error) {
      if (error.response.status === 422) {
        errors.value = error.response.data.errors;
      }
    }
  };

  const destroySkill = async (id) => {
    if (!window.confirm("Are you sure?")) {
      return;
    }
    await SkillService.skillDelete(id);
    await getSkills();
  };

  return {
    skill,
    skills,
    errors,
    getSkills,
    getSkill,
    updateSkill,
    destroySkill,
    storeSkill,
  };
});
