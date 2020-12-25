import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import PatientList from "@/components/PatientList";
import Login from "@/components/Login";
import Signup from "@/components/Signup";
import { auth } from "../plugins/firebase";

Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "HelloWorld",
    component: HelloWorld,
  },
  // {
  //   path: '/patient/list',
  //   name: 'PatientList',
  //   component: PatientList
  // },
  {
    path: "/list",
    name: "PatientList",
    component: PatientList,
    // meta: {
    //   requiresAuth: true
    // }
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup
  }
];

const router = new Router({
  mode: 'history',
  routes
})

// navigation guard to check for logged in users
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)

  if (requiresAuth && !auth.currentUser) {
    next('/login')
  } else {
    next()
  }
})

export default router
