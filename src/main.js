import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import components from '@/components/UI'
import directives from '@/directives';
import router from "@/router/router";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from './plugins/font-awesome'

const pinia = createPinia()
const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
})

directives.forEach(directive => {
    app.directive(directive.name, directive)
})

app
    .use(pinia)
    .use(router)
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount('#app')
