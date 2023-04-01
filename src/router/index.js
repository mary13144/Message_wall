import Index from "@/view/index.vue";
import {createRouter, createWebHistory} from "vue-router";

const routes = [
	{
		path:'/',
		name: 'index',
		component: Index
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router;