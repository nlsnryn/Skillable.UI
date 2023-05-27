import { apiClient } from "./API.js";

const SkillService = {
  skillsIndex() {
    return apiClient.get("skills");
  },

  skillShow(id) {
    return apiClient.get("skills/" + id);
  },

  skillStore(payload) {
    return apiClient.post("skills", payload);
  },

  skillUpdate(payload, id) {
    return apiClient.put("skills/" + id, payload);
  },

  skillDelete(id) {
    return apiClient.delete("skills/" + id);
  },
};

export default SkillService;
