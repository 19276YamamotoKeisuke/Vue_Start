import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import praApp from './praApp.vue'

// #app = <id=app>
// index.htmlの#appにAppをマウント→App.vue
// App.vueでも同様に他のvueファイルからweb要素をレンダリングしている
createApp(App).mount('#app')
createApp(praApp).mount('#pra_app')
