import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home'
import Projects from '../views/Projects'
import About from '../views/About'
import ProjectDetail from '../views/ProjectDetail'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/projects',
        name: 'Projects',
        component: Projects
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/project/:id',
        name: 'ProjectDetail',
        component: ProjectDetail
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
            }
        }
        else {
            return { top: 0 }
        }
    }
})

export default router