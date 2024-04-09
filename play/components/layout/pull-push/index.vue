<template>
	<h2>左右偏移</h2>
	<div class="layout-content layout-push-pull">
		<ued-row :gutter="20">
			<ued-col :span="6" :pull="6">
				<div class="grid-content-light" />
			</ued-col>
		</ued-row>
		<ued-row :gutter="20">
			<ued-col :span="6" :offset="18" :push="6">
				<div class="grid-content" />
			</ued-col>
		</ued-row>
	</div>
</template>
