import { defineStore } from "pinia";
import { AuthService } from "../service/AuthService";
import {
  getCredentials,
  setCredentials,
  removeCredentials,
} from "../helper/LocalStorage";
import { ref } from "vue";
import router from "../router";

const useAuthStore = defineStore("auth", () => {
  const credentials = ref(getCredentials());

  async function login(email, password) {
    const response = await AuthService.login({ email, password });
    const { current_user, access_token } = response.data;

    if (!current_user || !access_token) {
      return;
    }

    // Set Credentials into Local Storage
    setCredentials(access_token, current_user);

    // update credentials
    credentials.value.token = access_token;
    credentials.value.user = current_user;

    // redirect into dashboard
    router.push({ name: "dashboard" });
  }

  const isAuthenticated = () =>
    !!credentials.value.token && !!credentials.value.user;

  async function register(name, email, password, password_confirmation) {
    const response = await AuthService.register({
      name,
      email,
      password,
      password_confirmation,
    });
    const { current_user, access_token } = response.data;

    if (!current_user || !access_token) {
      return;
    }

    // Set Credentials into Local Storage
    setCredentials(access_token, current_user);

    // update credentials

    credentials.value.token = access_token;
    credentials.value.user = current_user;

    // redirect into dashboard
    router.push({ name: "dashboard" });
  }

  async function logout() {
    removeCredentials();
    credentials.value.token = "";
    credentials.value.user = "";
    router.push({ name: "login" });
  }

  return {
    login,
    logout,
    register,
    isAuthenticated,
    credentials,
  };
});

export { useAuthStore };
