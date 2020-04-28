export default [
  {
    path: '/forum',
    name: 'forum',
    meta: {
      requiresAuth: true
    },
    component: () =>
      import(/* webpackChunkName: "forum" */ '@/components/Forum.vue')
  }
]
