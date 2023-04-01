import {createApp} from 'vue'
import App from './App.vue'
import router from "@/router";
import {createPinia} from "pinia";
import VueAxios from "vue-axios";
import axios from "axios";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia)
app.use(router);
app.use(VueAxios, axios)

app.mount('#app');