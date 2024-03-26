<template>
	<div class="button">
		<button-basic :button-type="buttonType" />
		<button-disabled :button-type="buttonType" />
		<div class="button-link">
			<h1>链接按钮</h1>
			<div class="button-link-show">
				<ued-button v-for="item in buttonType" :key="item.type" :type="item.type" link>
					{{ item.text }}
				</ued-button>
			</div>
			<div class="button-link-show">
				<ued-button v-for="item in buttonType" :key="item.type" :type="item.type" link disabled>
					{{ item.text }}
				</ued-button>
			</div>
		</div>
		<div class="button-text">
			<h1>文字按钮</h1>
			<div class="button-text-show">
				<ued-button v-for="item in buttonType" :key="item.type" :type="item.type" text>
					{{ item.text }}
				</ued-button>
			</div>
			<div class="button-text-show">
				<ued-button v-for="item in buttonType" :key="item.type" :type="item.type" text bg>
					{{ item.text }}
				</ued-button>
			</div>
			<div class="button-text-show">
				<ued-button v-for="item in buttonType" :key="item.type" :type="item.type" text disabled>
					{{ item.text }}
				</ued-button>
			</div>
		</div>
		<div class="button-size">
			<h1>按钮尺寸(large)</h1>
			<div class="button-size-show">
				<ued-button v-for="item in buttonType" :key="item.type" :type="item.type" size="large">
					{{ item.text }}
				</ued-button>
			</div>
			<div class="button-size-show">
				<ued-button v-for="item in buttonType" :key="item.type" :type="item.type" size="large" round>
					{{ item.text }}
				</ued-button>
			</div>
			<h1>按钮尺寸(Default)</h1>
			<div class="button-size-show">
				<ued-button v-for="item in buttonType" :key="item.type" :type="item.type">
					{{ item.text }}
				</ued-button>
			</div>
			<div class="button-size-show">
				<ued-button v-for="item in buttonType" :key="item.type" :type="item.type" round>
					{{ item.text }}
				</ued-button>
			</div>
			<h1>按钮尺寸(small)</h1>
			<div class="button-size-show">
				<ued-button v-for="item in buttonType" :key="item.type" :type="item.type" size="small">
					{{ item.text }}
				</ued-button>
			</div>
			<div class="button-size-show">
				<ued-button v-for="item in buttonType" :key="item.type" :type="item.type" size="small" round>
					{{ item.text }}
				</ued-button>
			</div>
		</div>
		<div class="button-tag">
			<h1>Tag</h1>
			<div class="button-tag-show">
				<ued-button>默认按钮</ued-button>
				<ued-button tag="div">div</ued-button>
				<ued-button type="primary" tag="a" href="https://github.com/bin-K/ued-plus" target="_blank" rel="noopener noreferrer">a</ued-button>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'

const ButtonBasic = defineAsyncComponent(() => import('./basic/index.vue'))
const ButtonDisabled = defineAsyncComponent(() => import('./disabled/index.vue'))

const buttonType = ref([
	{ type: '', text: '默认按钮' },
	{ type: 'primary', text: '主要按钮' },
	{ type: 'success', text: '成功按钮' },
	{ type: 'warning', text: '警告按钮' },
	{ type: 'danger', text: '危险按钮' },
	{ type: 'info', text: '信息按钮' },
])
</script>
<style lang="scss">
.button {
	&-content {
		display: flex;
		flex-direction: column;
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
<style lang="scss" scoped>
.button {
	&-base,
	&-disabled,
	&-link,
	&-text,
	&-size,
	&-tag {
		&-show {
			display: flex;
			justify-content: flex-start;
			margin-bottom: 10px;
		}
	}
}
</style>
