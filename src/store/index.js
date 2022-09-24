import { createStore } from 'vuex';
import axiosClient from '../axios';

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
    image: "/assets/images/about.jpg",
    heading: 'Dealdrive Technology - your one-stop shop for your digital solution',
    short_desc: 'We believe there is a software solution to every hard craked experience in a brand. What we do is to ease the experience.',
    list: [
        "Build applications that other businesses can use to perform their daily business operations.",
        "Work with our clients to understand there problem and how our solution can fit into the problem.",
        "With our experienced team of designers developers we can bring your business to limelight",
        "We provide the best value for your money. Every service you receive from us come with a guarantee that secure your investment",
    ]
};

const categories = [{ name: 'Web Apps', id: 1, class: ".filter-web" }, { name: 'Brand Designs', id: 2, class: ".filter-brand" }];

const projects = [

    { class: "filter-brand", name: "De String Electrical", image: "/assets/images/projects/branding/DSTRING.jpg", url: "#", desc: "They provide electrical installations and conduit wiring." },
    { class: "filter-brand", name: "Savoury Crunches", image: "/assets/images/projects/branding/savoury.jpg", url: "#", desc: "They provide baking, pasteries, and catering services." },

    // web app
    { class: "filter-web", name: "Reform7", image: "/assets/images/projects/webServices/sld1.PNG", url: "https://reform7international.org/", desc: "A NGO that provide reformation through the word of God." },

    { class: "filter-web", name: "Sound mind ministries", image: "/assets/images/projects/webServices/sld9.PNG", url: "https://reform7international.org/", desc: "A NGO that provide sound teaching of of God's word" },
];

const services = [
    { image: "/assets/images/BRANDING.jpg", title: "Branding", short_desc: "Our branding services is focused on to key areas of brand: Awareness and strategy. We make design that promote your awareness. We developed strategic road map to revamp your brand.", description: "Our branding services is focused on to key areas of brand: Awareness and strategy. We make design that promote your awareness. We developed strategic road map to revamp your brand. Features and benefit: Mobile: a  well design brand is mobile. Your customer carry you around. Memorable: when your customer remember an experience with your brand it is visual that the remember. Story: we provide design that help you tell stories that relate to your audience." },

    { image: "/assets/images/web.jpg", title: "Websites", short_desc: "We design and build web applicartion for various use cases. Features and benefit: Responsiveness: your website can be easily accessible on different devices of your users.", description: "We design and build web applicartion for various use cases. Features and benefit: Responsiveness: your website can be easily accessible on different devices of your users. Hight conversion: the goal is to make sure your have a return investment. We built the website with features with feature that enhance high sales conversion Security: we guarantee your full security. We make sure your users privacy is well protect. Support: we dont live you hanging. We provide you 24/7 support to ensure quality customer service" },

    { image: "/assets/images/software.jpg", title: "Custom software", short_desc: "We build App for mobile, Desktop and other custom device", description: "We build App for mobile, Desktop and other custom device" },
];

const news = { title: "Particpate in Our Training", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." };
const testimonials = [
    { star: "4", id: "0", image: "/assets/images/pics.jpg", author: "Testing testing", title: "Founder 1", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
    { star: "2", id: "1", image: "/assets/images/pics.jpg", author: "Testing testing", title: "Founder 2", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
    { star: "3", id: "2", image: "/assets/images/pics.jpg", author: "Testing testing", title: "Founder 3", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
];

const contactus = { email1: "torwisdom4@gmail.com", email2: "dealdrivetechnology@gmail.com", phone1: "+234 5589 5548", phone2: "+234 6678 2545", address: "81 Itu road, Uyo, Akwa Ibom, Nigeria" };

const attendants = [{
        app: 'whatsapp',
        label: 'Customer support',
        name: 'Muekara Tor',
        number: '2348061467293',
        avatar: {
            src: 'https://avatars0.githubusercontent.com/u/8084606?s=460&u=20b6499a416cf7129a18e5c168cf387e159edb1a&v=4',
            alt: 'Muekara Tor'
        }
    },

    // ...
];

<<<<<<< Updated upstream
=======
const footerLinks = [

    { name: 'Training', to: { name: 'Training' } },
    { name: 'Projects', to: { name: 'Projects' } },
    { name: 'Services', to: { name: 'Services' } },

];

>>>>>>> Stashed changes
const navigations = [
    { name: 'Home', to: { name: 'Index' } },
    { name: 'About Us', to: { name: 'About' } },
    { name: 'Services', to: { name: 'Services' } },
    { name: 'Blog', to: { name: 'Blog' } },
    { name: 'Projects', to: { name: 'Blog' } },
    { name: 'Contact Us', to: { name: 'Contact' } },
];

const faqs = [
    { id: "1", question: "Non consectetur a erat nam at lectus urna duis?", answer: "Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non." },
    { id: "2", question: "Non consectetur a erat nam at lectus urna duis?", answer: "Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non." },
    { id: "3", question: "Non consectetur a erat nam at lectus urna duis?", answer: "Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non." },
    { id: "4", question: "Non consectetur a erat nam at lectus urna duis?", answer: "Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non." },
    { id: "5", question: "Non consectetur a erat nam at lectus urna duis?", answer: "Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non." },

];

const teams = [{
        image: "https://source.unsplash.com/7u5mwbu7qLg/500x350",
        name: "Member Name",
        title: "Software Engineer",
        socials: [
            { name: 'twitter', icon: 'fab fa-twitter', profile: 'http://test@twitter.com' },
            { name: 'facebook', icon: 'fab fa-facebook', profile: 'http://test@facebook.com' },
            { name: 'instagram', icon: 'fab fa-instagram', profile: 'http://test@instagram.com' },
            { name: 'linkedin', icon: 'fab fa-linkedin', profile: 'http://test@linkedin.com' },
        ]
    }, {
        name: "Member Name",
        image: "https://source.unsplash.com/7u5mwbu7qLg/500x350",
        title: "Software Engineer",
        socials: [
            { name: 'twitter', icon: 'fab fa-twitter', profile: 'http://test@twitter.com' },
            { name: 'facebook', icon: 'fab fa-facebook', profile: 'http://test@facebook.com' },
            { name: 'instagram', icon: 'fab fa-instagram', profile: 'http://test@instagram.com' },
            { name: 'linkedin', icon: 'fab fa-linkedin', profile: 'http://test@linkedin.com' },
        ]
    }, {
        image: "https://source.unsplash.com/7u5mwbu7qLg/500x350",
        name: "Member Name",
        title: "Software Engineer",
        socials: [
            { name: 'twitter', icon: 'fab fa-twitter', profile: 'http://test@twitter.com' },
            { name: 'facebook', icon: 'fab fa-facebook', profile: 'http://test@facebook.com' },
            { name: 'instagram', icon: 'fab fa-instagram', profile: 'http://test@instagram.com' },
            { name: 'linkedin', icon: 'fab fa-linkedin', profile: 'http://test@linkedin.com' },
        ]
    },
    {
        image: "https://source.unsplash.com/7u5mwbu7qLg/500x350",
        name: "Member Name",
        title: "Software Engineer",
        socials: [
            { name: 'twitter', icon: 'fab fa-twitter', profile: 'http://test@twitter.com' },
            { name: 'facebook', icon: 'fab fa-facebook', profile: 'http://test@facebook.com' },
            { name: 'instagram', icon: 'fab fa-instagram', profile: 'http://test@instagram.com' },
            { name: 'linkedin', icon: 'fab fa-linkedin', profile: 'http://test@linkedin.com' },
        ]
    },
];

const store = createStore({
    state: {
        navigations,
        teams,
        faqs,
        slides,
        socials,
        contacts,
        contactus,
        attendants,
        about,
        categories,
        projects,
        services,
        news,
        testimonials,
<<<<<<< Updated upstream
=======
        blog,
        user: {
            data: {},
            token: sessionStorage.getItem('TOKEN')
        },
>>>>>>> Stashed changes
    },
    getters: {},
    actions: {

        register: async({ commit }, data) => {

            const response = await axiosClient.post('/register', data);

            commit('setUserData', response.data);

            return response.data;

        },
        login: async({ commit }, data) => {

            const response = await axiosClient.post('/login', data);

            commit('setUserData', response.data);

            return response.data;

        },
        getData: async({ commit }, key) => {

            const response = await axiosClient.get(`/${key}`);

            commit('setData', response.data, key);

            return response.data;
        }
    },
    mutations: {
        logout: (state) => {
            state.user.token = null;
            state.user.data = {};
            sessionStorage.clear();
        },
        setData: (state, data, key) => {
            state[key] = data;
        },
        setUserData: (state, { data, token }) => {
            state.user.data = data;
            state.user.token = token;
            sessionStorage.setItem('TOKEN', token);
        }
    },
    modules: {}

});

export default store;