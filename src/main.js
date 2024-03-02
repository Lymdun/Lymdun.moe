import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home.vue";
import ErrorComponent from "@/components/Error.vue"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from "@fortawesome/free-solid-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import About from "@/components/About.vue";

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/error', component: ErrorComponent },
    { path: '/:catchAll(.*)', redirect: '/error' }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

library.add(fas, faGithub)

createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app');