import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import i18n from "./i18n.js";
import router from "./router/index.js";
import SelectButton from "primevue/selectbutton";
import Toolbar from "primevue/toolbar";
import Button from "primevue/button";
import Card from "primevue/card";

const app = createApp(App);

app.use(PrimeVue, {ripple: true, theme: { preset: Aura } });

app.component('pv-select-button', SelectButton)
    .component('pv-toolbar', Toolbar)
    .component('pv-button', Button)
    .component('pv-card', Card)

app.use(i18n);

app.use(router);

app.mount('#app');