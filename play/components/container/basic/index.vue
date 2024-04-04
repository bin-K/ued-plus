<template>
	<h2>常见页面布局</h2>
	<div class="container-content container-basic">
		<ued-container>
			<ued-header>Header</ued-header>
			<ued-main>Main</ued-main>
		</ued-container>
	</div>
	<div class="container-content container-basic">
		<ued-container>
			<ued-header>Header</ued-header>
			<ued-main>Main</ued-main>
			<ued-footer>Footer</ued-footer>
		</ued-container>
	</div>
	<div class="container-content container-basic">
		<ued-container>
			<ued-aside :width="200">Aside</ued-aside>
			<ued-main>Main</ued-main>
		</ued-container>
	</div>
	<div class="container-content container-basic">
		<ued-container>
			<ued-header>Header</ued-header>
			<ued-container>
				<ued-aside :width="200">Aside</ued-aside>
				<ued-main>Main</ued-main>
			</ued-container>
		</ued-container>
	</div>
	<div class="container-content container-basic">
		<ued-container>
			<ued-header>Header</ued-header>
			<ued-container>
				<ued-aside :width="200">Aside</ued-aside>
				<ued-container>
					<ued-main>Main</ued-main>
					<ued-footer>Footer</ued-footer>
				</ued-container>
			</ued-container>
		</ued-container>
	</div>
	<div class="container-content container-basic">
		<ued-container>
			<ued-aside :width="200">Aside</ued-aside>
			<ued-container>
				<ued-header>Header</ued-header>
				<ued-main>Main</ued-main>
			</ued-container>
		</ued-container>
	</div>
	<div class="container-content container-basic">
		<ued-container>
			<ued-aside :width="200">Aside</ued-aside>
			<ued-container>
				<ued-header>Header</ued-header>
				<ued-main>Main</ued-main>
				<ued-footer>Footer</ued-footer>
			</ued-container>
		</ued-container>
	</div>
</template>
