<template>
	<h2>按钮尺寸</h2>
	<div class="common-content button-content button-size">
		<div class="button-size-large">
			<div style="margin-bottom: 15px">
				<ued-button
					v-for="item in buttonType"
					:key="item.type"
					:type="item.type"
					size="large"
				>
					{{ item.text }}
				</ued-button>
			</div>
			<div>
				<ued-button
					v-for="item in buttonType"
					:key="item.type"
					:type="item.type"
					size="large"
					round
				>
					{{ item.text }}
				</ued-button>
			</div>
		</div>
		<div class="button-size-default">
			<div style="margin-bottom: 15px">
				<ued-button
					v-for="item in buttonType"
					:key="item.type"
					:type="item.type"
				>
					{{ item.text }}
				</ued-button>
			</div>
			<div>
				<ued-button
					v-for="item in buttonType"
					:key="item.type"
					:type="item.type"
					round
				>
					{{ item.text }}
				</ued-button>
			</div>
		</div>
		<div class="button-size-samll">
			<div style="margin-bottom: 15px">
				<ued-button
					v-for="item in buttonType"
					:key="item.type"
					:type="item.type"
					size="small"
				>
					{{ item.text }}
				</ued-button>
			</div>
			<div>
				<ued-button
					v-for="item in buttonType"
					:key="item.type"
					:type="item.type"
					size="small"
					round
				>
					{{ item.text }}
				</ued-button>
			</div>
		</div>
	</div>
</template>
<script lang="ts" setup>
import { PropType } from 'vue'
defineProps({
	buttonType: {
		type: Array as PropType<any>,
		default: () => [],
	},
})
</script>
