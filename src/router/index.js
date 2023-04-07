import YiKeIndex from "@/view/YiKeIndex.vue";
import {createRouter, createWebHashHistory} from "vue-router";
import WallMessage from "@/view/WallMessage.vue";

const routes = [
	{
		path: '/',
		redirect: '/wall',
		component: YiKeIndex,
		children: [
			{
				path: 'wall',
				component: WallMessage,
			}
		]
	}
]

const router = createRouter({
	history: createWebHashHistory(),
	routes,
})

export default router;