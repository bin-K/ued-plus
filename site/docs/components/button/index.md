## Button 按钮

常用的操作按钮

<script setup>
import { Plus } from "@ued-plus/components"
import { ref } from 'vue'
const buttonType = ref([
	{ type: '', text: '默认按钮' },
	{ type: 'primary', text: '主要按钮' },
	{ type: 'success', text: '成功按钮' },
	{ type: 'warning', text: '警告按钮' },
	{ type: 'danger', text: '危险按钮' },
	{ type: 'info', text: '信息按钮' },
])
</script>

<!--@include: ./basic/index.md-->

<!--@include: ./disabled/index.md-->

<!--@include: ./link/index.md-->

<!--@include: ./size/index.md-->

<!--@include: ./tag/index.md-->

<!--@include: ./button-icon/index.md-->

<style>
.button-content {
	display: flex;
	flex-direction: column;
  border: 1px solid #e4e7ed;
	padding: 30px;
	border-radius: 5px;
}

.button-content > div {
	margin-bottom: 15px;
}

.button-content > div:last-child {
	margin: 0;
}

</style>
