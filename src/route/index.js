import { createRouter, createWebHistory } from "vue-router";
import Index from "../views/Index.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";
import Blog from "../views/Blog.vue";
import Projects from "../views/Projects.vue";
import Quotation from "../views/Quotation.vue";
import ReadMore from "../views/ReadMore.vue";
import Training from "../views/Training.vue";
import Services from "../views/Services.vue";
import blogReadMore from "../views/blogReadMore.vue";
import NotFound from "../views/NotFound.vue";

import DefaultLayout from "../components/DefaultLayout.vue";

import store from "../store"

// admin
import adminDashBoard from "../views/admin/adminDashBoard.vue";
import Adminlogin from "../views/admin/AdminLogin.vue";
import AdminSignUp from "../views/admin/AdminSignUp.vue";


import Adminhome from "../views/admin/Adminhome.vue";
import Adminabout from "../views/admin/Adminabout.vue";
import Adminservices from "../views/admin/Adminservices.vue";
import AdminTestimonials from "../views/admin/AdminTestimonials.vue";
import AdminSlides from "../views/admin/AdminSlides.vue";
import AdminProjects from "../views/admin/AdminProjects.vue";
import AdminBlog from "../views/admin/AdminBlog.vue";
import AdminFaq from "../views/admin/AdminFaq.vue";
import AdminTeams from "../views/admin/AdminTeams.vue";
import AdminQuotes from "../views/admin/AdminQuotes.vue";
import AdminFeedbacks from "../views/admin/AdminFeedbacks.vue";
import AdminUsers from "../views/admin/AdminUsers.vue";



const routes = [{
        path: '/',
        redirect: '/home',
        component: DefaultLayout,
        name: "DefaultLayout",
        children: [{
                path: '/home',
                component: Index,
                name: "Index",
            }, {
                path: '/about',
                component: About,
                name: "About",
            }, {
                path: '/contact',
                component: Contact,
                name: "Contact",
            }, {
                path: '/blog',
                component: Blog,
                name: "Blog",
            }, {
                path: '/projects/:id',
                component: Projects,
                name: "Projects",
            }, {
                path: '/quotation',
                component: Quotation,
                name: "Quotation",
            }, {
                path: '/training',
                component: Training,
                name: "Training",
            },
            {
                path: '/services',
                component: Services,
                name: "Services",
            }, {
                path: '/readmore',
                component: ReadMore,
                name: "ReadMore",
            },

            {
                path: '/blogReadMore/:id',
                component: blogReadMore,
                name: "blogReadMore",
                props: true
            }

        ]
    },

    {
        path: '/admin-dashboard',
        redirect: '/admin/home',
        component: adminDashBoard,
        name: "adminDashBoard",
        meta: { requiresAuth: true },
        children: [


            {
                path: '/admin/home',
                component: Adminhome,
                name: "Adminhome",
                meta: { requiresAuth: true },
            },

            {
                path: '/admin/users',
                component: AdminUsers,
                name: "AdminUsers",
                meta: { requiresAuth: true },
            },

            {
                path: '/admin/feedbacks',
                component: AdminFeedbacks,
                name: "AdminFeedbacks",
                meta: { requiresAuth: true },
            },

            {
                path: '/admin/quotes',
                component: AdminQuotes,
                name: "AdminQuotes",
                meta: { requiresAuth: true },
            },

            {
                path: '/admin/about',
                component: Adminabout,
                name: "Adminabout",
                meta: { requiresAuth: true },
            },

            {
                path: '/admin/services',
                component: Adminservices,
                name: "Adminservices",
                meta: { requiresAuth: true },
            },

            {
                path: '/admin/testimonials',
                component: AdminTestimonials,
                name: "AdminTestimonials",
                meta: { requiresAuth: true },
            },

            {
                path: '/admin/slides',
                component: AdminSlides,
                name: "AdminSlides",
                meta: { requiresAuth: true },
            },

            {
                path: '/admin/projects',
                component: AdminProjects,
                name: "AdminProjects",
                meta: { requiresAuth: true },
            },

            {
                path: '/admin/teams',
                component: AdminTeams,
                name: "AdminTeams",
                meta: { requiresAuth: true },
            },

            {
                path: '/Adminblog',
                component: AdminBlog,
                name: "AdminBlog",
                meta: { requiresAuth: true },
            },

            {
                path: '/Adminfag',
                component: AdminFaq,
                name: "AdminFaq",
                meta: { requiresAuth: true },
            }
        ]
    },

    {
        path: '/Admin/login',
        component: Adminlogin,
        name: "Adminlogin",

    },

    {
        path: '/Admin/SignUp',
        component: AdminSignUp,
        name: "AdminSignUp",

    },
    {
        path: '/:catchAll(.*)',
        component: NotFound,
        name: "NotFound"
    }

];



const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        // return desired position
        return { top: 0 };
    }
});

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !store.state.user.token) {
        next({ name: "Adminlogin" });
    } else if (store.state.user.token && to.meta.isGuest) {
        next({ name: "adminDashboard" });
    } else {
        next();
    }
});


router.beforeEach((to, from) => {

    document.title = `DealDrive | ${to.name}`;
});

export default router;