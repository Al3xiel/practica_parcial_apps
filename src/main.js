import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import i18n from "./i18n.js";
import {router} from "json-server";

const app = createApp(App);

app.use(i18n);

app.use(router);

app.mount('#app');