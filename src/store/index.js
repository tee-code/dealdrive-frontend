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
   
    { class: "filter-brand", name: "Ecommerce", image: "/assets/workImages/branding/DSTRING LOGO THREE.jpg", url: "http://google.com", desc: "A multivendor ecommerce" },
    { class: "filter-brand", name: "Ecommerce", image: "/assets/workImages/branding/savoury.jpg", url: "http://google.com", desc: "A multivendor ecommerce" },

    // web app
    { class: "filter-web", name: "Ecommerce", image: "/assets/workImages/webServices/sld1.PNG", url: "http://google.com", desc: "A multivendor ecommerce" },

    { class: "filter-web", name: "Ecommerce", image: "/assets/workImages/webServices/sld9.PNG", url: "http://google.com", desc: "A multivendor ecommerce" },
];

const services = [
    { image: "/assets/images/features-1.png", title: "Branding", description: "Our branding services is focused on to key areas of brand: Awareness and strategy. We make design that promote your awareness. We developed strategic road map to revamp your brand. Features and benefit: Mobile: a  well design brand is mobile. Your customer carry you around. Memorable: when your customer remember an experience with your brand it is visual that the remember. Story: we provide design that help you tell stories that relate to your audience." },

    { image: "/assets/images/features-2.png", title: "Websites", description: "We design and build web applicartion for various use cases. Features and benefit: Responsiveness: your website can be easily accessible on different devices of your users. Hight conversion: the goal is to make sure your have a return investment. We built the website with features with feature that enhance high sales conversion Security: we guarantee your full security. We make sure your users privacy is well protect. Support: we dont live you hanging. We provide you 24/7 support to ensure quality customer service" },

    { image: "/assets/images/features-3.png", title: "Custom software", description: "We build App for mobile, Desktop and other custom device" },
];

const news = { title: "Particpate in Our Workshop", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." };
const testimonials = [
    { star: "4", id: "0", image: "/assets/images/pics.jpg", author: "Testing testing", title: "Founder 1", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
    { star: "2", id: "1", image: "/assets/images/pics.jpg", author: "Testing testing", title: "Founder 2", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
    { star: "3", id: "2", image: "/assets/images/pics.jpg", author: "Testing testing", title: "Founder 3", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
];

const contactus = { email1: "torwisdom4@gmail.com", email2: "dealdrivetechnology@gmail.com", phone1: "+234 5589 5548", phone2: "+234 6678 2545", address: "81 itu Road" };

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

const store = createStore({
    state: {
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
    },
    getters: {},
    actions: {

    },
    mutations: {

    },
    modules: {}
});

export default store;