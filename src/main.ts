import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import XfMobileUI from 'xf-mobile-ui'
import 'xf-mobile-ui/dist/style.css'

createApp(App).use(Vant).use(XfMobileUI).use(store).use(router).mount('#app')