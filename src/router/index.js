
import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from "@/stores/user";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../components/home.vue')
    },
    {
      path: '/register',
      name: 'register',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/register.vue')
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/logIn.vue')
    },
    {
      path: '/task',
      name: 'task',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/task.vue')
    },

    {
      path: '/newtask',
      name: 'newtask',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/newTask.vue')
  },
  ]
})

router.beforeEach(async (to) => {
  const publicPages = ['/'];
  const loginPages = ['/login','/register'];
  const authRequired = !publicPages.includes(to.path) && !loginPages.includes(to.path);
  const auth = useUserStore();

  if (authRequired && !auth.user) {
    auth.returnUrl = to.fullPath;
    return '/login';
  } else if (loginPages.includes(to.path) && auth.user) {
    auth.returnUrl = to.fullPath;
    return '/task';
  }
});

export default router
