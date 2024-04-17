<template>
	<!-- https://www.cnblogs.com/joyce33/p/13396415.html 解决color不生效的方法 -->
	<h2>基本用法</h2>
	<div class="common-content icon-content icon-basic">
		<div class="icon-basic-first">
			<div v-for="item in iconName" :key="item" class="icon-basic-item">
				<div>
					<ued-icon :name="item" :size="20" />
					<span class="icon-name">{{ item }}</span>
				</div>
			</div>
		</div>
		<div class="icon-basic-second">
			<div>
				<ued-icon :size="20" color="#409efc"><Plus /></ued-icon>
			</div>
			<div>
				<ued-icon :size="20"><Minus /></ued-icon>
			</div>
			<div>
				<ued-icon :size="20"><CirclePlus /></ued-icon>
			</div>
			<div>
				<ued-icon :size="20"><CircleMinus /></ued-icon>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const iconName = ref([
	'Plus',
	'Minus',
	'CirclePlus',
	'CircleMinus',
	'Loading',
	'Message',
	'Star',
	'Search',
	'Delete',
	'Check',
])
</script>

<style lang="scss" scoped>
.icon-basic-first {
	display: flex;
	flex-wrap: wrap;
}
.icon-basic-item,
.icon-basic-second > div {
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid #e4e7ed;
	width: 114px;
	height: 90px;
	cursor: pointer;
}
.icon-basic-item > div {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 0 20px;
}

.icon-basic-item .ued-icon {
	margin: 0;
}
.icon-basic-item .icon-name {
	margin-top: 8px;
	font-size: 13px;
}

.icon-basic-second {
	display: flex;
}
</style>
