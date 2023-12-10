import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MainBodyVue from "@/components/MainBody.vue";
import TestVue from "@/components/Test.vue";
import Units_calculatorVue from "@/components/Units_calculator.vue";
import CartVue from "@/components/Cart.vue";
/* import ConvertVue from "@/components/Convert.vue"; */

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
      path: "/units_calculator",
      name: "Units calculator",
      component: Units_calculatorVue,
    },
    {
      path: "/Convert",
      name: "Convert",
      component: ConvertVue,
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
  ],
});

export default router;
