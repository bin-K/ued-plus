<template>
	<h2>dot和badge的使用</h2>
	<div class="common-content icon-content icon-dot">
		<div class="icon-dot-show">
			<ued-icon :size="20" dot><Plus /></ued-icon>
			<ued-icon :size="20" dot><Minus /></ued-icon>
			<ued-icon :size="20" dot><CirclePlus /></ued-icon>
			<ued-icon :size="20" dot><CircleMinus /></ued-icon>
			<ued-icon :size="20" dot :badge="1"><Plus /></ued-icon>
			<ued-icon :size="20" dot :badge="99"><Minus /></ued-icon>
			<ued-icon :size="20" dot :badge="100"><CirclePlus /></ued-icon>
			<ued-icon :size="20" dot :badge="999"><CircleMinus /></ued-icon>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.icon-dot {
	border: 1px solid #e4e7ed;
	border-radius: 5px;

	&-show {
		display: flex;
	}
}

.ued-icon {
	margin-right: 36px;
}
</style>
