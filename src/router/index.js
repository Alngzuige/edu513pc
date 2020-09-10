import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Course from '../views/Course.vue'
import Information from '../views/Information.vue'
import Job from '../views/Job.vue'
import Practical from '../views/Practical.vue'
Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/course', component: Course },
  { path: '/information', component: Information },
  { path: '/job', component: Job },
  { path: '/practical', component: Practical },
]

const router = new VueRouter({
  routes
})

export default router
