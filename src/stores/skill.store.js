import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "./auth.store";
import SkillService from "../service/SkillService";

export const useSkillStore = defineStore("SkillStore", () => {
  const skills = ref([]);
  const skill = ref([]);
  const authStore = useAuthStore();
  const token = authStore.credentials.token;

  const router = useRouter();

  const getSkills = async () => {
    const response = await SkillService.index(token);
    skills.value = response.data;
  };

  const getSkill = async (id) => {
    const response = await SkillService.show(token, id);
    skill.value = response.data;
  };

  const storeSkill = async (data) => {
    await SkillService.store(token, data);
    router.push({ name: "SkillIndex" });
  };

  const updateSkill = async (id) => {
    await SkillService.update(token, skill.value, id);
    router.push({ name: "SkillIndex" });
  };

  const destroySkill = async (id) => {
    if (!window.confirm("Are you sure?")) {
      return;
    }
    await SkillService.delete(token, id);
    await getSkills();
  };

  async function totalSkills() {
    await getSkills();
    return computed(() => skills.value.length);
  }

  return {
    skill,
    skills,
    getSkills,
    getSkill,
    updateSkill,
    destroySkill,
    storeSkill,
    totalSkills,
  };
});
