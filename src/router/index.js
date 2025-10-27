import { createRouter, createWebHistory } from "vue-router";

import LandingPage from "../layouts/LandingPage.vue";
import DashboardLayout from "../layouts/DashboardLayout.vue";

import Dashboard from "../pages/Dashboard.vue";
import Total from "../components/Total.vue";
import Resolved from "../components/Resolved.vue";
import Login from "../pages/Login.vue";
import Signup from "../pages/Signup.vue";
import Open from "../components/Open.vue";

const routes = [
  { path: "/", name: "Home", component: LandingPage },
  { path: "/login", name: "Login", component: Login },
  { path: "/signup", name: "Signup", component: Signup },

  // Dashboard routes with shared layout
  {
    path: "/dashboard",
    component: DashboardLayout,
    children: [
      { path: "", name: "Dashboard", component: Dashboard },
      { path: "total-tickets", name: "TotalTickets", component: Total },
      { path: "open-tickets", name: "OpenTickets", component: Open },
      {
        path: "resolved-tickets",
        name: "ResolvedTickets",
        component: Resolved,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
