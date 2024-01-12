import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MainBodyVue from "@/components/MainBody.vue";
import Weight_calc from "@/components/Weight_calc.vue";
import CartVue from "@/components/Cart.vue";
import Convert from "@/components/Convert.vue";
import Test2Vue from "@/components/Test2.vue";
import TestVue from "@/components/Test.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: MainBodyVue,
    },
    {
      path: "/weight_calc",
      name: "weight_calc",
      component: Weight_calc,
    },
    {
      path: "/convert",
      name: "convert",
      component: Convert,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/cart",
      name: "cart",
      component: CartVue,
    },
    {
      path: "/test2",
      name: "test2",
      component: Test2Vue,
    },
    {
      path: "/test",
      name: "test",
      component: TestVue,
    },
  ],
});

export default router;
