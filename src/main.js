import {createApp} from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from "vue-router/dist/vue-router";
import MainPage from "@/pages/MainPage"
import components from "@/components/UI/atoms"
import store from "@/store";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			name: 'Main',
			path: '/',
			component: MainPage
		}, {
			name: 'Tasks',
			path: '/tasks',
			component: () => import("@/pages/TaskPage")
		},
		{
			name: 'NotFound',
			path: '/:pathMatch(.*)*',
			component: () => import("@/pages/NotFound")
		},
	]
})

const app = createApp(App)

components.forEach(component => {
	app.component(component.name, component)
})

app.use(router).use(store).mount('#app')
