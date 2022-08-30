import { createStore } from 'vuex';

const slides = [{
        id: 0,
        title: 'GET MORE DONE WITH OUR SOFTWARE SOLUTIONS',
        caption: 'Accelerate your digital transformation with our branding and software development solutions',
        image: '/assets/images/hero-carousel/1.jpg'
    },
    {
        id: 1,
        title: 'Particpate in Our Training',
        caption: 'Dealdrive Technology Skillup programs is a digital skill acquisition program that train you to be master of tech related skills in the field of design, software and web application',
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
    { name: 'twitter', icon: 'fab fa-twitter', profile: 'https://twitter.com/ddrivebrand' },
    { name: 'facebook', icon: 'fab fa-facebook', profile: 'https://web.facebook.com/ddrivebrand' },
    { name: 'instagram', icon: 'fab fa-instagram', profile: 'https://www.instagram.com/ddrivebrand/' },
    { name: 'linkedin', icon: 'fab fa-linkedin', profile: 'https://www.linkedin.com/in/ddrivebrand/' },
];

const contacts = { email: 'dealdrivetechnology@gmail.com', phone: '+2348061467293' };

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

    { id: 1, class: "filter-brand", name: "De String Electrical", image: "/assets/images/projects/branding/DSTRING.jpg", url: "#", desc: "They provide electrical installations and conduit wiring.", full_desc: "They provide electrical installations and conduit wiring." },
    { id: 2, class: "filter-brand", name: "Savoury Crunches", image: "/assets/images/projects/branding/savoury.jpg", url: "#", desc: "They provide baking, pasteries, and catering services.", full_desc: "They provide baking, pasteries, and catering services." },

    // web app
    { id: 3, class: "filter-web", name: "Reform7", image: "/assets/images/projects/webServices/sld1.PNG", url: "https://reform7international.org/", desc: "A NGO that provide reformation through the word of God.", full_desc: "A NGO that provide reformation through the word of God." },

    { id: 4, class: "filter-web", name: "Sound mind ministries", image: "/assets/images/projects/webServices/sld9.jpeg", url: "https://reform7international.org/", desc: "A NGO that provide sound teaching of of God's word", full_desc: "A NGO that provide sound teaching of of God's word" },
];

const services = [
    { image: "/assets/images/BRANDING.jpg", title: "Branding", short_desc: "Our branding services is focused on to key areas of brand: Awareness and strategy. We make design that promote your awareness. We developed strategic road map to revamp your brand.", description: "Our branding services is focused on to key areas of brand: Awareness and strategy. We make design that promote your awareness. We developed strategic road map to revamp your brand. Features and benefit: Mobile: a  well design brand is mobile. Your customer carry you around. Memorable: when your customer remember an experience with your brand it is visual that the remember. Story: we provide design that help you tell stories that relate to your audience." },

    { image: "/assets/images/web.jpg", title: "Websites", short_desc: "We design and build web applicartion for various use cases. Features and benefit: Responsiveness: your website can be easily accessible on different devices of your users.", description: "We design and build web applicartion for various use cases. Features and benefit: Responsiveness: your website can be easily accessible on different devices of your users. Hight conversion: the goal is to make sure your have a return investment. We built the website with features with feature that enhance high sales conversion Security: we guarantee your full security. We make sure your users privacy is well protect. Support: we dont live you hanging. We provide you 24/7 support to ensure quality customer service" },

    { image: "/assets/images/software.jpg", title: "Custom software", short_desc: "We build App for mobile, Desktop and other custom device", description: "We build App for mobile, Desktop and other custom device" },
];

const news = { title: "Particpate in Our Training", description: "Dealdrive Technology Skillup programs is a digital skill acquisition program that train you to be master of tech related skills in the field of design, software and web application" };

const testimonials = [
    { star: "5", id: "0", image: "/assets/images/mathics.jpeg", author: "Abasiofon Peter", title: "Scribe, The Mathics", description: "Thank you Dealdrive technology. You did a great job and your service delivery is quite commendable." },
    { star: "5", id: "1", image: "/assets/images/moses.jpeg", author: "David Offiong", title: "Business Owner", description: "Your services are top-notch bro I love how organized it is And yes the designs are superb! Well done!" },
];

const contactus = { email1: "torwisdom4@gmail.com", email2: "dealdrivetechnology@gmail.com", phone1: "+2348182041899", phone2: "+2348061467293", address: "81 Itu road, Uyo, Akwa Ibom, Nigeria" };

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

const navigations = [
    { name: 'Home', to: { name: 'Index' } },
    { name: 'About Us', to: { name: 'About' } },
    { name: 'Services', to: { name: 'Services' } },
    { name: 'Blog', to: { name: 'Blog' } },
    { name: 'Projects', to: { name: 'Projects' } },
    { name: 'Contact Us', to: { name: 'Contact' } },
];

const faqs = [{
        id: "1",
        question: "How much will it cost to design and build my website?",
        answer: "Each business's needs are different, so due to variations in scope, pricing from one app development to the next can be quite different. Our typical end-to-end app development costs N100,000-N100,000,000. If you’d like a more detailed breakdown of the pricing, request for a quote to get a copy of our pricing sheet."
    },
    {
        id: "2",
        question: "Why do i need a custom application?",
        answer: "Custom applications can be a web app that runs on the browser or software that can be install to run to on your device. Building a custom application is dependent on the use case. You may want to build a custom app for your production system, to help you maintain a consistent product. You may want to build a sales app for your sales team."
    },
    {
        id: "3",
        question: "How long does it take to build my app?",
        answer: "Similar to questions regarding cost, the timeline will vary greatly based on the scope of your web design project. Typically, our end-to-end build projects take 4-8 months to complete."
    },
    {
        id: "4",
        question: "Who do you provide your service to?",
        answer: "We work with even balance of start-ups, small businesses, non-profits, and enterprise clients across a multitude of industries."
    },
    {
        id: "5",
        question: "What kind of brand design do you do?",
        answer: "We provide full branding services that guaranteed your brand awareness. Our designs are bespoke. They make you unique."
    },
    {
        id: "6",
        question: "Can you work with my existing team?",
        answer: "Absolutely. It’s common for our Company to collaborate with your internal or external digital teams including developers, designers, production, sales and market team. Throughout the course of a project, we often help these teams set a better structural foundation for smarter segmentation, and improve goal- and task-tracking. Post-launch, we can collaborate with your team to produce new landing pages, website sections, and software tools to make their work productive."
    },
    {
        id: "7",
        question: "Why do I trust to do business with you?",
        answer: "We are looking after for your growth. We have the best team for your projects. We are legally registered. We have a responsive support team, online and offline."
    },

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

const blog =[
    {   title:'EIGHT STRATEGIES FOR BUSINESS GROWTH',
        description:"1. Build A Br and",
        date:'02/ 08/ 2022',
        category:'Business',
        image:'/assets/images/post/post-landscape-2.jpg',
        id:1,
        userProfile:{
            name:'Wade Warren',
            image:'/assets/images/me.png'
        }
    },

    {   title:'5 WAYS TO OVERCOME COMPLEX DATA CHALLENGES AS AN ORGANISATION',
        description:"1. Build A Brand",
        date:'02/ 08/ 2022',
        category:'Business',
        image:'/assets/images/post/post-landscape-4.jpg',
        id:2,
        userProfile:{
            name:'Wade Warren',
            image:'/assets/images/me.png'
        }
    }
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
        blog
    },
    getters: {},
    actions: {

    },
    mutations: {

    },
    modules: {}
});

export default store;