# Tag

使用属性 tag 覆盖元素

<div class="text-content text-tag">
  <div class="text-tag-span">
    <ued-text>span</ued-text>
  </div>
  <div class="text-tag-p">
    <ued-text tag="p">p</ued-text>
  </div>
  <div class="text-tag-b">
    <ued-text tag="b">bold</ued-text>
  </div>
  <div class="text-tag-i">
    <ued-text tag="i">Italic</ued-text>
  </div>
  <div class="text-tag-sub">
    <ued-text>
      This is
      <ued-text tag="sub" size="small">subscript</ued-text>
    </ued-text>
  </div>
  <div class="text-tag-sup">
    <ued-text>
      This is
      <ued-text tag="sup" size="small">superscript</ued-text>
    </ued-text>
  </div>
  <div class="text-tag-ins">
    <ued-text tag="ins">Inserted</ued-text>
  </div>
  <div class="text-tag-del">
    <ued-text tag="del">Deleted</ued-text>
  </div>
  <div class="text-tag-mark">
    <ued-text tag="mark">Marked</ued-text>
  </div>
</div>

::: details 显示代码

```vue
<template>
	<div class="text-tag-span">
		<ued-text>span</ued-text>
	</div>
	<div class="text-tag-p">
		<ued-text tag="p">p</ued-text>
	</div>
	<div class="text-tag-b">
		<ued-text tag="b">bold</ued-text>
	</div>
	<div class="text-tag-i">
		<ued-text tag="i">Italic</ued-text>
	</div>
	<div class="text-tag-sub">
		<ued-text>
			This is
			<ued-text tag="sub" size="small">subscript</ued-text>
		</ued-text>
	</div>
	<div class="text-tag-sup">
		<ued-text>
			This is
			<ued-text tag="sup" size="small">superscript</ued-text>
		</ued-text>
	</div>
	<div class="text-tag-ins">
		<ued-text tag="ins">Inserted</ued-text>
	</div>
	<div class="text-tag-del">
		<ued-text tag="del">Deleted</ued-text>
	</div>
	<div class="text-tag-mark">
		<ued-text tag="mark">Marked</ued-text>
	</div>
</template>
```

:::
