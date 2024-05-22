<template>
	<div class="ued">
		<div class="catalog">
			<router-link v-for="item in link" :key="item" :to="'/' + item">
				{{ item }}
			</router-link>
		</div>
		<div class="content">
			<router-view></router-view>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const link = ref([
	'Button',
	'Icon',
	'Text',
	'Link',
	'Container',
	'Layout',
	'Scrollbar',
	'Dialog',
	'Radio',
	'Form',
])
</script>

<style>
body {
	margin: 0;
}
h2 {
	font-size: 24px !important;
	font-weight: 700 !important;
	margin: 10px 0;
}
</style>
<style lang="scss" scoped>
.ued {
	display: flex;
	padding: 10px;
	overflow: hidden;
	height: calc(100vh - 20px);
	.catalog {
		display: flex;
		flex-direction: column;
		align-items: center;
		overflow: auto;
		min-width: 200px;
		width: 15%;
		height: 100%;

		a {
			padding: 5px;
			font-size: 16px;
			text-decoration: none;
			color: rgba(56, 56, 56, 1);
		}
		.router-link-active {
			color: #9a16f8;
		}
	}
	.content {
		&::-webkit-scrollbar {
			display: none;
		}
		overflow: auto;
		height: 100%;
	}
}
</style>
