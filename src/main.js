import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import i18n from "./i18n.js";
import router from "./router/index.js";
import SelectButton from "primevue/selectbutton";
import Toolbar from "primevue/toolbar";
import Button from "primevue/button";

const app = createApp(App);

app.component('pv-select-button', SelectButton)
    .component('pv-toolbar', Toolbar)
    .component('pv-button', Button)

app.use(i18n);

app.use(router);

app.mount('#app');