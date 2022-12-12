import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from "pinia"
import "./assets/css/app.scss"
import { VueQueryPlugin } from "vue-query";

createApp(App)
    .use(router)
    .use(VueQueryPlugin)
    .use(createPinia())
    .mount('#app')
