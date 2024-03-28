import { createWebHistory, createRouter } from 'vue-router'

const routes = [
	{ path: '/', redirect: '/button' },
	{
		path: '/button',
		component: () => import('../components/button/index.vue'),
	},
	{
		path: '/icon',
		component: () => import('../components/icon/index.vue'),
	},
]
const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router
