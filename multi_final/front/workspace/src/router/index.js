import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Navbar from '../components/Navbar.vue'
import Login from '../views/Login.vue'
import NormalLogin from '../components/NormalLogin.vue'
import Register from '../views/Register.vue'
import ForgotPassword from '../components/ForgotPassword.vue'
import CommunityDetail from '../views/community/Detail.vue'
import Reservation from '../views/reservation/Reservation.vue' 
import Notice from '../views/reservation/Notice.vue' 
import FaQ from '../views/reservation/FaQ.vue' 
import Inquiry from '../views/reservation/Inquiry.vue' 


Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'Home',
    components: {
      app: Home
    },
  },
  {
    path: '/navbar',
    name: 'Navbar',
    components: {
      app: Navbar
    },
  },
  {
    path: '/notice',
    name: 'Notice',
    components: {
      app: Notice
    },
  },
  {
    path: '/faq',
    name: 'FaQ',
    components: {
      app: FaQ
    },
  },
  {
    path: '/inquiry',
    name: 'Inquiry',
    components: {
      app: Inquiry
    },
  },
  {
    path: '/reservation',
    name: 'Reservation',
    components: {
      app: Reservation
    },
  },
  {
    path: '/login',
    name: 'Login',
    components: {
      app: Login
    },
  },
  {
    path: '/normalLogin',
    name: 'NormalLogin',
    components: {
      navbar: NormalLogin
    },
  },

  {
    path: '/register',
    name: 'Register',
    components: {
      app: Register
    },
  },
  {
    path: '/forgotPassword',
    name: 'ForgotPassword',
    components: {
      navbar: ForgotPassword
    },
  },


  {
    path: '/community/detail/:id',
    name: 'CommunityDetail',
    components: {
      navbar: CommunityDetail

    },
  },




]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
