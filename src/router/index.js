import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DataBinding from "@/views/DataBinding";
import DataBindingInputText from "@/views/DataBindingInputText";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting 라우트 레벨에서 코드를 분할하는 방법
    // this generates a separate chunk (about.[hash].js) for this route 이 라우트에 대한 chunk파일이 분리되어 생성됨
    // which is lazy-loaded when the route is visited. 이 라우트에 방문했을때 lazy-load(지연로드)됨
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue') //path에 접근하기 전까지 vue 파일에 대한 import가 일어나지 않는다.
  },
  {
    path: '/databinding',
    name: 'DataBinding',
    component: DataBinding
  },
  {
    path: '/databindingExamples',
    name: 'DataBindingExamples',
    component: DataBindingInputText
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
