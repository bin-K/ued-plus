<template>
	<div class="text">
		<text-basic :text-type="textType" />
		<text-size />
		<text-truncated />
		<text-tag />
		<text-mixin />
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import TextBasic from './basic/index.vue'
import TextSize from './size/index.vue'
import TextTruncated from './truncated/index.vue'
import TextTag from './tag/index.vue'
import TextMixin from './mixin/index.vue'

const textType = ref([
	{ type: '', text: '默认文本' },
	{ type: 'primary', text: '主要文本' },
	{ type: 'success', text: '成功文本' },
	{ type: 'warning', text: '警告文本' },
	{ type: 'danger', text: '危险文本' },
	{ type: 'info', text: '信息文本' },
])
</script>
