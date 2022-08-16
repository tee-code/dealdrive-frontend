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

const store = createStore({
    state: {
        slides,
        socials,
    },
    getters: {},
    actions: {

    },
    mutations: {

    },
    modules: {}
});

export default store;