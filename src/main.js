import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import mixins from "@/mixins";

//createApp(App).use(router).mount('#app')

const app = createApp(App);
app.use(router);
app.mixin(mixins);
app.mount('#app');