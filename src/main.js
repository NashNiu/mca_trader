import { createApp } from 'vue';
import '@/assets/css/index.css';
import '@/assets/css/tailwind.css';
import App from '@/app.vue';
import { setupRouter } from '@/router/index.js';
import { setupStore } from '@/store';
import i18n from '@/lang/index.js';

const app = createApp(App);
setupStore(app);
setupRouter(app);
app.use(i18n);
const meta = document.createElement('meta');
meta.name = 'naive-ui-style';
document.head.appendChild(meta);
app.mount('#app');
