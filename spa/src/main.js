// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//import the vue instance
import Vue from 'vue'

import { TableComponent, TableColumn } from 'vue-table-component';

Vue.component('table-component', TableComponent);
Vue.component('table-column', TableColumn);

//import the App component
import App from './App'
//import the vue router
import VueRouter from 'vue-router'

//tell vue to use the router
Vue.use(VueRouter)

//import Tesal component
import Tesla from './components/Tesla'
//import the hello component
import Hello from './components/HelloWorld'
//import the about component
import About from './components/About'

import TeslaControls from './components/TeslaControls'

import Param from './components/Param'

//import paramdetails component
import paramdetails from './components/paramdetails'

import ShardsVue from 'shards-vue'

// Import base styles (Bootstrap and Shards)
import 'bootstrap/dist/css/bootstrap.css'
import 'shards-ui/dist/css/shards.css'

Vue.use(ShardsVue);
//define your routes
const routes = [
  //route for the home route of the web page
  { path: '/', component: Hello },
  //route for the about route of the web page
  { path: '/about', component: About }, 
  //route for the param route of the web page
  { path: '/param', component: Param },
  //route for the Tesla route of the web page
  { path: '/tesla', component: Tesla },
  //route for the TeslaControls route of the web page
  { path: '/teslacontrols', component: TeslaControls },
  //route for the paramdetails passing in params
  { path: '/Paramdetails/:id', component: paramdetails, name: 'Paramdetails' }
]

// Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes, // short for routes: routes
  mode: 'history'
})

//place the router guard
router.beforeEach((to, from, next) => {
  //check if the path user is going to is our param path
  if(to.path == '/param'){
      //check if the user item is already set
      if(localStorage.getItem('user')==undefined){
          //prompt for username
          var user = prompt('please enter your username');
          //prompt for password
          var pass = prompt('please enter your password');
          //check if th username and password given equals our preset details
          if (user == 'username' && pass == 'password'){
          //set the user item
          localStorage.setItem('user', user);
          //move to the route
          next();
          }else{
          //alert the username and pass is wrong
          alert('Wrong username and password, you do not have permission to access that route');
          //return, do not move to the route
          return;
          }
      }
  }
  next()
})

//instatinat the vue instance
new Vue({
//define the selector for the root component
  el: '#app',
  //pass the template to the root component
  template: '<App/>',
  //declare components that the root component can access
  components: { App },
  //pass in the router to the Vue instance
  router
}).$mount('#app')//mount the router on the app
