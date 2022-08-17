import { createStore } from 'vuex';

const slides = [{
        id: 0,
        title: 'GET MORE DONE WITH OUR SOFTWARE SOLUTIONS',
        caption: 'Accelerate your digital transformation with our branding and software development solutions',
        image: '/assets/images/hero-carousel/1.jpg'
    },
    {
        id: 1,
        title: 'GET MORE DONE WITH OUR SOFTWARE SOLUTIONS',
        caption: 'Accelerate your digital transformation with our branding and software development solutions',
        image: '/assets/images/hero-carousel/1.jpg'
    },
    {
        id: 2,
        title: 'GET MORE DONE WITH OUR SOFTWARE SOLUTIONS',
        caption: 'Accelerate your digital transformation with our branding and software development solutions',
        image: '/assets/images/hero-carousel/2.jpg'
    },
    {
        id: 3,
        title: 'GET MORE DONE WITH OUR SOFTWARE SOLUTIONS',
        caption: 'Accelerate your digital transformation with our branding and software development solutions',
        image: '/assets/images/hero-carousel/3.jpg'
    },
    {
        id: 4,
        title: 'GET MORE DONE WITH OUR SOFTWARE SOLUTIONS',
        caption: 'Accelerate your digital transformation with our branding and software development solutions',
        image: '/assets/images/hero-carousel/4.jpg'
    }, {
        id: 5,
        title: 'GET MORE DONE WITH OUR SOFTWARE SOLUTIONS',
        caption: 'Accelerate your digital transformation with our branding and software development solutions',
        image: '/assets/images/hero-carousel/5.jpg'
    }
];

const socials = [
    { name: 'twitter', icon: 'fab fa-twitter', profile: 'http://test@twitter.com' },
    { name: 'facebook', icon: 'fab fa-facebook', profile: 'http://test@facebook.com' },
    { name: 'instagram', icon: 'fab fa-instagram', profile: 'http://test@instagram.com' },
    { name: 'linkedin', icon: 'fab fa-linkedin', profile: 'http://test@linkedin.com' },
];

const contacts = { email: 'contact@dealdrivetechnology.com', phone: '+234 806 1467 293' };

const about = {
    heading: 'DealDrive vision or mission or anything you want.',
    short_desc: 'We believe there is a software solution to every hard craked experience in a brand. What we do is to ease the experience.',
    list: [
        "Build applications that other businesses can use to perform their daily business operations.",
        "Work with our clients to understand there problem and how our solution can fit into the problem.",
        "Work with our clients to understand there problem and how our solution can fit into the problem.",
        "Work with our clients to understand there problem and how our solution can fit into the problem.",
    ]
};

const categories = [{ name: 'Web Apps', id: 1, class: ".filter-web" }, { name: 'Brand Designs', id: 2, class: ".filter-brand" }];

const projects = [
    { class: "filter-web", name: "Ecommerce", image: "/assets/images/projects/1.jpg", url: "http://google.com", desc: "A multivendor ecommerce" },
    { class: "filter-web", name: "Ecommerce", image: "/assets/images/projects/2.jpg", url: "http://google.com", desc: "A multivendor ecommerce" },
    { class: "filter-web", name: "Ecommerce", image: "/assets/images/projects/3.png", url: "http://google.com", desc: "A multivendor ecommerce" },
    { class: "filter-brand", name: "Ecommerce", image: "/assets/images/projects/4.png", url: "http://google.com", desc: "A multivendor ecommerce" },
    { class: "filter-brand", name: "Ecommerce", image: "/assets/images/projects/5.jpg", url: "http://google.com", desc: "A multivendor ecommerce" },
    { class: "filter-brand", name: "Ecommerce", image: "/assets/images/projects/6.jpg", url: "http://google.com", desc: "A multivendor ecommerce" },
];

const services = [
    { image: "/assets/images/features-1.png", title: "Branding", description: "Dicta quam similique quia architecto eos nisi aut ratione aut ipsum reiciendis sit doloremque oluptatem aut et molestiae ut et nihil" },
    { image: "/assets/images/features-2.png", title: "Websites", description: "Dicta quam similique quia architecto eos nisi aut ratione aut ipsum reiciendis sit doloremque oluptatem aut et molestiae ut et nihil" },
    { image: "/assets/images/features-3.png", title: "Web Apps", description: "Dicta quam similique quia architecto eos nisi aut ratione aut ipsum reiciendis sit doloremque oluptatem aut et molestiae ut et nihil" },
];

const news = { title: "Particpate in Our Workshop", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." };
const testimonials = [
    { star: "4", id: "0", image: "/assets/images/pics.jpg", author: "Testing testing", title: "Founder 1", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
    { star: "2", id: "1", image: "/assets/images/pics.jpg", author: "Testing testing", title: "Founder 2", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
    { star: "3", id: "2", image: "/assets/images/pics.jpg", author: "Testing testing", title: "Founder 3", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
];

const store = createStore({
    state: {
        slides,
        socials,
        contacts,
        about,
        categories,
        projects,
        services,
        news,
        testimonials,
    },
    getters: {},
    actions: {

    },
    mutations: {

    },
    modules: {}
});

export default store;