import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home.vue";
import ErrorComponent from "@/components/Error.vue"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {library} from "@fortawesome/fontawesome-svg-core";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faGithub, faXTwitter} from "@fortawesome/free-brands-svg-icons";

const routes = [
    { path: '/', component: Home },
    { path: '/about', redirect: '/' },
    { path: '/projects', redirect: '/#projects' },
    { path: '/error', component: ErrorComponent },
    { path: '/:catchAll(.*)', redirect: '/error' }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) return savedPosition;
        if (to.hash) return { el: to.hash, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' };
        return { top: 0 };
    },
});

library.add(faEnvelope, faGithub, faXTwitter)

createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
