import { createApp } from 'vue';
import 'virtual:svg-icons-register';

import App from './App.vue';
import routers from './routers';
import stores from './stores';
import directives from './directives';
import '@/styles/index.scss';
import { Button, message, Input, ConfigProvider, Form, Spin } from 'ant-design-vue';

const app = createApp(App);

app.use(Button).use(message).use(message).use(Input).use(Form).use(Spin).use(ConfigProvider).use(routers).use(stores).use(directives).mount('#app');
