import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import components from '@/components/UI'
import directives from '@/directives';
import router from "@/router/router";
import store from "./store";

// import "bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from './plugins/font-awesome'
import {fas} from "@fortawesome/free-solid-svg-icons";

library.add(fas)

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
    .use(store)
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount('#app')
