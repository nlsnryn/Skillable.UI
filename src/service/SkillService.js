import { apiClient } from "./API.js";

const SkillService = {
  index(accessToken) {
    return apiClient.get("skills", {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
  },

  show(accessToken, id) {
    return apiClient.get("skills/" + id, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
  },

  store(accessToken, payload) {
    return apiClient.post("skills", payload, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
  },

  update(accessToken, payload, id) {
    return apiClient.put("skills/" + id, payload, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
  },

  delete(accessToken, id) {
    return apiClient.delete("skills/" + id, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
  },
};

export default SkillService;
