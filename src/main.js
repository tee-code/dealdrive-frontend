import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './route'
import store from './store'
import VueSocialChat from 'vue-social-chat'
import 'vue-social-chat/dist/style.css'

createApp(App)
    .use(router)
    .use(store)
    .use(VueSocialChat)
    .mount('#app');