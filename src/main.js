import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './components/App.vue'
import Convert from './components/Convert.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Students from './components/Students.vue'
import StudentInfo from './components/StudentInfo.vue'
import store from './store.js'
import login from './components/Login.vue'

 
const routes = [
  { path: '/', component: Students, meta: {requiresAuth: true} },
   { path: '/student-info/:id', component: StudentInfo, props: true, meta: {requiresAuth: true} },
   { path: '/student-edit/:id', component: StudentInfo, props: true, meta: {requiresAuth: true} },
   { path: '/login', component: login },
]
  
 const router = new VueRouter({
    routes
 })
 router.beforeEach((to, from, next) => {
   if (to.matched.some(record => record.meta.requiresAuth)) {
     // этот путь требует авторизации, проверяем залогинен ли
     // пользователь, и если нет, перенаправляем на страницу логина
     if (store.getters.getUser == null) {
       next({
         path: '/login',
         query: { redirect: to.fullPath }
       })
     } else {
       next()
     }
   } else {
     next() // всегда так или иначе нужно вызвать next()!
   }
 })
  Vue.use(VueAxios, axios)
 Vue.use(VueRouter)
  
 new Vue({
    render: h => h(App),
    el: '#app',
    router,
    store
 })
 

new Vue({
    render: h => h(Convert),
    el: '#converter',
 })