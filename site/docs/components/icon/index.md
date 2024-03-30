## Icon 图标

常用的icon图标

<script setup>
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

<!--@include: ./basic/index.md-->
<!--@include: ./svg/index.md-->
<!--@include: ./dot/index.md-->

<style>
.icon-content {
	display: flex;
	flex-direction: column;
	border-radius: 5px;
}

.icon-content > div {
	margin-bottom: 15px;
}

.icon-content > div:last-child {
	margin: 0;
}

</style>

## API

| 属性名 |            说明            |       类型        | 默认值       |
| ------ | :------------------------: | :---------------: | ------------ |
| size   | SVG 图标的大小,size x size | `number`/`string` | 继承字体大小 |
| color  |      svg 的 fill 颜色      |     `string`      | 继承颜色     |
| dot    |          红点角标          |     `boolean`     | false        |
| badge  | 角标数字,大于100时显示99+  |     `number`      | undefined    |
