import { apiClient } from "./API.js";

const SkillService = {
  index() {
    return apiClient.get("skills");
  },

  show(id) {
    return apiClient.get("skills/" + id);
  },

  store(payload) {
    return apiClient.post("skills", payload);
  },

  update(payload, id) {
    return apiClient.put("skills/" + id, payload);
  },

  delete(id) {
    return apiClient.delete("skills/" + id);
  },
};

export default SkillService;
