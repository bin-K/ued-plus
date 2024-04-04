## 省略

通过 truncated 属性，在文本超过视图或最大宽度设置时展示省略符。
通过 line-clamp 属性控制多行的样式

<div class="text-content text-truncated">
  <div class="text-truncated-default">
    <ued-text class="single-line" truncated>
      默认文本默认文本默认文本默认文本
    </ued-text>
  </div>
  <div class="text-truncated-line-clamp">
    <ued-text class="multiple-line" line-clamp="2">
      默认文本默认文本默认文本默认文本 <br />
      默认文本默认文本默认文本默认文本 <br />
      默认文本默认文本默认文本默认文本
    </ued-text>
  </div>
</div>

<style scoped>
.text-truncated-default > .single-line,
.text-truncated-line-clamp > .multiple-line {
	width: 150px;
}
</style>

::: details 显示代码

```vue
<template>
	<div>
		<ued-text class="single-line" truncated>
			默认文本默认文本默认文本默认文本
		</ued-text>
	</div>
	<div>
		<ued-text class="multiple-line" line-clamp="2">
			默认文本默认文本默认文本默认文本<br />
			默认文本默认文本默认文本默认文本<br />
			默认文本默认文本默认文本默认文本
		</ued-text>
	</div>
</template>

<style lang="scss" scoped>
.single-line,
.multiple-line {
	width: 150px;
}
</style>
```

:::
