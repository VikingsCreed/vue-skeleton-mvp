export default [
  {
    path: '/profile',
    name: 'profile',
    meta: {
      requiresAuth: false
    },
    component: () =>
      import(/* webpackChunkName: "profile" */ '@/components/Profile.vue')
  }
]
