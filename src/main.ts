import { createApp } from "vue";
import App from "@/App.vue"
import "@/style/reset.css"
import router from "@/router"

createApp(App).use(router).mount("#app")
