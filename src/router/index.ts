import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MainBodyVue from "@/components/MainBody.vue";
import TestVue from "@/components/Test.vue";
import Test2Vue from "@/components/Test2.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: MainBodyVue,
    },
    {
      path: "/test",
      name: "test",
      component: TestVue,
    },
    {
      path: "/test2",
      name: "test2",
      component: Test2Vue,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
