export default [
  {
    path: '/forum',
    name: 'forum',
    component: () =>
      import(/* webpackChunkName: "forum" */ '@/components/Forum.vue')
  }
]
