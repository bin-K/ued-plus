<template>
	<h2>省略</h2>
	<div class="text-content text-truncated">
		<div class="text-truncated-default">
			<ued-text class="single-line" truncated>
				默认文本默认文本默认文本默认文本
			</ued-text>
		</div>
		<div class="text-truncated-line-clamp">
			<ued-text class="multiple-line" line-clamp="2">
				默认文本默认文本默认文本默认文本<br />
				默认文本默认文本默认文本默认文本<br />
				默认文本默认文本默认文本默认文本
			</ued-text>
		</div>
	</div>
</template>

<style scoped>
.single-line,
.multiple-line {
	width: 150px;
}
</style>
