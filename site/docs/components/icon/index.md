## Icon 图标

常用的icon图标

<script setup>
import { ref } from 'vue'
const iconName = ref(['Plus', 'Minus', 'CirclePlus', 'CircleMinus'])
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
