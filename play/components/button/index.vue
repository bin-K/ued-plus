<template>
	<div class="button">
		<button-basic :button-type="buttonType" />
		<button-disabled :button-type="buttonType" />
		<button-link :button-type="buttonType" />
		<button-text :button-type="buttonType" />
		<button-size :button-type="buttonType" />
		<button-tag :button-type="buttonType" />
		<button-icon :button-type="buttonType" />
		<button-loading />
		<button-gruop />
	</div>
</template>

<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'

const ButtonBasic = defineAsyncComponent(() => import('./basic/index.vue'))
const ButtonDisabled = defineAsyncComponent(
	() => import('./disabled/index.vue')
)
const ButtonLink = defineAsyncComponent(() => import('./link/index.vue'))
const ButtonText = defineAsyncComponent(() => import('./text/index.vue'))
const ButtonSize = defineAsyncComponent(() => import('./size/index.vue'))
const ButtonTag = defineAsyncComponent(() => import('./tag/index.vue'))
const ButtonIcon = defineAsyncComponent(() => import('./button-icon/index.vue'))
const ButtonLoading = defineAsyncComponent(() => import('./loading/index.vue'))
const ButtonGruop = defineAsyncComponent(
	() => import('./button-group/index.vue')
)

const buttonType = ref([
	{ type: '', text: '默认按钮' },
	{ type: 'primary', text: '主要按钮' },
	{ type: 'success', text: '成功按钮' },
	{ type: 'warning', text: '警告按钮' },
	{ type: 'danger', text: '危险按钮' },
	{ type: 'info', text: '信息按钮' },
])
</script>
