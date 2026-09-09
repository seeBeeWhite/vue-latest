import axios from "axios";

// Stores
//import { useAuthStore } from '@/stores/auth'

// Utils
import { emitter } from "./event";

const baseUrl =
  import.meta.env.MODE === "production"
    ? import.meta.env.VITE_APP_API_URL
    : `http://localhost:${import.meta.env.VITE_APP_PORT}/proxy`;
axios.defaults.baseURL = baseUrl;

const token = localStorage.getItem("token");
if (token) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

// before a request is made start the nprogress
axios.interceptors.request.use(
  (config) => {
    console.log(`Start ${config.method?.toUpperCase()}: ${config.url}`);
    return config;
  },
  (error) => {
    console.error("Error");
    return Promise.reject(error);
  },
);

// before a response is returned stop nprogress
axios.interceptors.response.use(
  async (response) => {
    console.log(
      `Done ${response.config.method?.toUpperCase()}: ${response.config.url}`,
    );

    if (
      response.status === 200 &&
      (response.data.message || response.data.error_message)
    )
      emitter.emit("showSnackbar", {
        text: response.data.message ?? response.data.error_message,
      });

    return response;
  },
  async (error) => {
    //NProgress.done();
    console.warn("Error fetching the data");
    //const authStore = useAuthStore()

    console.log("error.response", error.response);
    switch (Number(error.response?.status)) {
      /* case 401:
        if (authStore.refreshToken !== '') {
          console.warn('!!!Refresh token!!!')
          await authStore.refresh()
          error.config.headers.Authorization = `Bearer ${authStore.token}`
          return axios.request(error.config)
        } else {
          console.warn('!!!No Refresh token!!!')
          if (error.config.url === '/api/v1/web/auth/refresh' || error.config.url === '/api/v1/web/auth/me') {
            await authStore.logout()
            return error.response
          }
        }
        break */
      case 403:
        console.warn("403 Response", error.response);
        emitter.emit("showSnackbar", {
          text: "Доступ к запрошенному ресурсу запрещен",
        });
        break;
      default: {
        console.error("Response", error.response);
        let errorMessage = error.message ? error.message : "unknown_error";
        if (error.response?.statusText) {
          errorMessage = error.response.statusText;
        }
        if (error.response?.data?.message) {
          if (Array.isArray(error.response.data.message))
            errorMessage = error.response.data.message.join(". ");
          else errorMessage = error.response.data.message;
        }

        emitter.emit("showSnackbar", { text: errorMessage });
        break;
      }
    }

    return error.response;
  },
);
