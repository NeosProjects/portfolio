import { createApp } from 'vue'
import './styles/style.css'
import './styles/animations.css'
import App from './App.vue'

import { Icon } from '@vicons/utils';

const app = createApp(App)

app.component('Icon', Icon);

app.mount('#app')
