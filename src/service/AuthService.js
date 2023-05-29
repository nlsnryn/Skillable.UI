import { apiClient } from "./API";

const AuthService = {
  login(payload) {
    return apiClient.post("login", payload);
  },
  register(payload) {
    return apiClient.post("register", payload);
  },
  logout(payload) {
    return apiClient.post("logout", payload);
  },
};

export { AuthService };
