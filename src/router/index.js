import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import About from "../views/About.vue";

const routes = [
   {
      path: "/",
      name: "Home",
      component: Home,
   },
   {
      path: "/about",
      name: "About",
      component: About,
   },
   {
      path: "/product/:id",
      name: "DetailProduct",
      component: () => import("../views/DetailProduct.vue"),
   },
];

const scrollBehavior = (to, from, savedPosition) => {
   return savedPosition || { top: 0, left: 0 };
};

const router = createRouter({
   history: createWebHistory(),
   routes,
   scrollBehavior,
});

export default router;
