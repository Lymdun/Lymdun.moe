import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home.vue";
import ErrorComponent from "@/components/Error.vue"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from "@fortawesome/free-solid-svg-icons";
import {faGithub, faSteam, faXTwitter} from "@fortawesome/free-brands-svg-icons";
import About from "@/components/About.vue";
import Projects from "@/components/Projects.vue";

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/projects', component: Projects },
    { path: '/error', component: ErrorComponent },
    { path: '/:catchAll(.*)', redirect: '/error' }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

library.add(fas, faGithub, faXTwitter, faSteam)

createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app');