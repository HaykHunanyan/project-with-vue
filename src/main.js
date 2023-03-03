import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import CoreuiVue from '@coreui/vue'
import CIcon from '@coreui/icons-vue'

const app = createApp(App)
app.use(store)
app.use(router)
app.use(CoreuiVue)
app.component('CIcon', CIcon)
app.mount('#app')
