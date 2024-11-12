import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store'; // Importa o Vuex Store

const app = createApp(App);
app.use(router);
app.use(store); // Configura o Vuex Store
app.mount('#app');
