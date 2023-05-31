import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "./auth.store";
import SkillService from "../service/SkillService";

export const useSkillStore = defineStore("SkillStore", () => {
  const skills = ref([]);
  const skill = ref([]);
  const authStore = useAuthStore();
  const router = useRouter();
  const token = authStore.credentials.token;

  const getSkills = async () => {
    const token = authStore.isAuthenticated()
      ? authStore.credentials.token
      : null;
    if (!token) {
      return;
    }

    const response = await SkillService.index(token);
    skills.value = response.data;
  };

  const getSkill = async (id) => {
    const token = authStore.isAuthenticated()
      ? authStore.credentials.token
      : null;
    if (!token) {
      return;
    }

    const response = await SkillService.show(token, id);
    skill.value = response.data;
  };

  const storeSkill = async (data) => {
    const token = authStore.isAuthenticated()
      ? authStore.credentials.token
      : null;
    if (!token) {
      return;
    }

    await SkillService.store(token, data);
    router.push({ name: "SkillIndex" });
  };

  const updateSkill = async (id) => {
    const token = authStore.isAuthenticated()
      ? authStore.credentials.token
      : null;
    if (!token) {
      return;
    }

    await SkillService.update(token, skill.value, id);
    router.push({ name: "SkillIndex" });
  };

  const destroySkill = async (id) => {
    if (!window.confirm("Are you sure?")) {
      return;
    }
    const token = authStore.isAuthenticated()
      ? authStore.credentials.token
      : null;
    if (!token) {
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
    token,
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
