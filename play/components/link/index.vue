<template>
	<div class="link">
		<link-basic :link-type="linkType" />
		<link-disabled :link-type="linkType" />
		<link-underline />
		<link-icon />
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import LinkBasic from './basic/index.vue'
import LinkDisabled from './disabled/index.vue'
import LinkUnderline from './underline/index.vue'
import LinkIcon from './icon/index.vue'

const linkType = ref([
	{ type: '', text: '默认链接' },
	{ type: 'primary', text: '主要链接' },
	{ type: 'success', text: '成功链接' },
	{ type: 'warning', text: '警告链接' },
	{ type: 'danger', text: '危险链接' },
	{ type: 'info', text: '信息链接' },
])
</script>

<style lang="scss">
.link {
	&-content {
		display: flex;
		flex-direction: column;
		width: 800px;
		border: 1px solid #e4e7ed;
		padding: 30px;
		border-radius: 5px;

		& > div {
			margin-bottom: 15px;

			&:last-child {
				margin: 0;
			}
		}
	}
}
</style>
