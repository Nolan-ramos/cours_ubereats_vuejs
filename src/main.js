import { createApp } from 'vue'
import App from './App.vue'

import { createRouter, createWebHashHistory } from 'vue-router';
import homePage from './page/homePage.vue'
import restaurantPage from './page/restaurantPage.vue'

const routes = [
    { path: '/', component: homePage},
    { name: 'Restaurant', path: '/restaurant/:name', component: restaurantPage},
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

const VueApp = createApp(App)

VueApp.use(router)

VueApp.mount('#app')
