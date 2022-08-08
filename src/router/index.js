import { createRouter, createWebHistory } from "vue-router";
import Index from "../views/Index.vue";
import About from "../views/About.vue";
import Blog from "../views/Blog.vue";
import Projects from "../views/Projects.vue";
import Quotation from "../views/Quotation.vue";
import ReadMore from "../views/ReadMore.vue";
import Service from "../views/Service.vue";
import Services from "../views/Services.vue";
import DefaultLayout from "../components/DefaultLayout.vue";

const routes = [{
    path: '/',
    redirect: '/home',
    component: DefaultLayout,
    name: "DefaultLayout",
    children: [{
            path: 'home',
            component: Index,
            name: "Index",
        }, {
            path: 'about',
            component: About,
            name: "About",
        }, {
            path: 'blog',
            component: Blog,
            name: "Blog",
        }, {
            path: 'projects',
            component: Projects,
            name: "Project",
        }, {
            path: 'quotation',
            component: Quotation,
            name: "Quotation",
        }, {
            path: 'service',
            component: Service,
            name: "Service",
        },
        {
            path: 'services',
            component: Services,
            name: "Services",
        }, {
            path: 'readmore',
            component: ReadMore,
            name: "ReadMore",
        }
    ]
}];



const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;