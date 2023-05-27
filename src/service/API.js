import axios from "axios";
import { status, useLoadingStore } from "@/stores/loading.store";
import { useErrorStore } from "@/stores/error.store";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

apiClient.interceptors.request.use(
  (request) => {
    useErrorStore().clearState();
    useLoadingStore().setStatus(status.loading);
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => {
    useLoadingStore().setStatus(status.success);

    setTimeout(() => {
      useLoadingStore().setStatus(status.idle);
    }, 5000);
    return response;
  },
  (error) => {
    const errorStore = useErrorStore();
    useLoadingStore().setStatus(status.error);

    switch (error.response.status) {
      case 422:
        errorStore.setState(error.response.data);
        break;
      default:
        break;
    }
    return Promise.reject(error);
  }
);

export { apiClient };
