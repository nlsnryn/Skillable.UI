import { apiClient } from "./API";

const AuthService = {
  login(payload) {
    return apiClient.post("login", payload);
  },
  register(payload) {
    return apiClient.post("register", payload);
  },
  logout(accessToken) {
    return apiClient.post(
      "logout",
      {},
      {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
  },
};

export { AuthService };
