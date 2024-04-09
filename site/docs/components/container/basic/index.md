## 常见的页面布局

<div class="container-content container-basic">
  <div>
     <ued-container>
      <ued-header>Header</ued-header>
      <ued-main>Main</ued-main>
    </ued-container>
  </div>
 
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

::: details 显示代码

```vue
<template>
	<div>
		<div class="container-content container-basic">
			<div>
				<ued-container>
					<ued-header>Header</ued-header>
					<ued-main>Main</ued-main>
				</ued-container>
			</div>
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
	</div>
</template>
```

:::
