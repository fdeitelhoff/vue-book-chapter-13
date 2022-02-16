import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

app.config.errorHandler = (error) => {
  console.log('error handler', error);
};

app.config.warnHandler = (warning) => {
  console.log('warning handler', warning);
};

app.mount('#app');
