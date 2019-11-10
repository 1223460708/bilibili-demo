import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: "/home",
    name: "home",
    component: ()=>import('../views/Home.vue'),
    children: [
      {
        path: '/home/recommended',
        component: ()=>import('../views/childrens/Recommended.vue')
      },
      {
        path: '/home/live',
        component: ()=>import('../views/childrens/Live.vue')
      },
      {
        path: '/home/hot',
        component: ()=>import('../views/childrens/Hot.vue')
      },
      {
        path: '/home/zhuifan',
        component: ()=>import('../views/childrens/ZhuiFan.vue')
      },
      {
        path: '/home/movies',
        component: ()=>import('../views/childrens/Movies.vue')
      },
      {
        path: '/home/sevenYear',
        component: ()=>import('../views/childrens/SevenYear.vue')
      },
    ]
  },
  {
    path: "/dynamic",
    name: "dynamic",
    component: ()=>import('../views/Dynamic.vue')
  },
  {
    path: "/channel",
    name: "channel",
    component: ()=>import('../views/Channel.vue')
  },
  {
    path: "/membersBuy",
    name: "membersBuy",
    component: ()=>import('../views/MemberBuy.vue')
  },
  {
    path: "/my",
    name: "my",
    component: ()=>import('../views/My.vue')
  },
  {
    path: "/playvideo",
    name: "playvideo",
    component: ()=>import('../views/PlayVideo.vue')
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
