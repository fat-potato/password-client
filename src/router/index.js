import { createRouter, createWebHashHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  // routes: [
  //   {
  //     path: "/",
  //     name: "home",
  //     component: HomeView,
  //   },
  //   {
  //     path: "/about",
  //     name: "about",
  //     // route level code-splitting
  //     // this generates a separate chunk (About.[hash].js) for this route
  //     // which is lazy-loaded when the route is visited.
  //     component: () => import("../views/AboutView.vue"),
  //   },
  // ],
  routes: [
    {
      path: "/",
      alias: "/clients",
      name: "clients",
      component: () => import("../components/ClientsList.vue"),
    },
    {
      path: "/tutorials/:id",
      name: "tutorial-details",
      component: () => import("../components/Tutorial.vue"),
    },
    {
      path: "/add",
      name: "add",
      component: () => import("../components/AddClient.vue"),
    },
  ],
});

export default router;
