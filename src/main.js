import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import VueParticles from 'vue-particles';

const app = createApp(App);
app.use(router); // Assuming you're using Vue Router
app.use(VueParticles);
app.mount('#app');
