import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import HomeView from "../views/HomeView.vue";
import { authMiddleware } from "./middleware/auth.middleware";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        group: "landing",
      },
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/auth/LoginView.vue"),
      meta: {
        group: "auth",
      },
    },
    {
      path: "/register",
      name: "register",
      component: () => import("@/views/auth/RegisterView.vue"),
      meta: {
        group: "auth",
      },
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard,
      meta: {
        requiredAuth: true,
      },
    },
    {
      path: "/skills",
      name: "SkillIndex",
      component: () => import("@/views/skills/SkillIndex.vue"),
      meta: {
        requiredAuth: true,
      },
    },
    {
      path: "/skills/create",
      name: "SkillCreate",
      component: () => import("@/views/skills/SkillCreate.vue"),
      meta: {
        requiredAuth: true,
      },
    },
    {
      path: "/skills/:id/edit",
      name: "SkillEdit",
      component: () => import("@/views/skills/SkillEdit.vue"),
      props: true,
      meta: {
        requiredAuth: true,
      },
    },
  ],
});

router.beforeEach(authMiddleware);
export default router;
