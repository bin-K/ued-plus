## 基础用法

两种方法引入Icon

- 通过图标name，传入到name属性中
- 通过图标组件，包裹在`<ued-icon>`中

通过 size 可以设置图标大小， color 可以设置图标颜色

<div class="icon-content icon-basic">
  <div class="icon-basic-first">
    <div v-for="item in iconName" :key="item" class="icon-basic-item">
      <div>
        <ued-icon :name="item" :size="20" />
        <span class="icon-name">{{ item }}</span>
      </div>
    </div>
  </div>
  <div class="icon-basic-second">
    <div>
      <ued-icon :size="20" color="#409efc"><Plus /></ued-icon>
    </div>
    <div>
      <ued-icon :size="20"><Minus /></ued-icon>
    </div>
    <div>
      <ued-icon :size="20"><CirclePlus /></ued-icon>
    </div>
    <div>
      <ued-icon :size="20"><CircleMinus /></ued-icon>
    </div>
  </div>
</div>

<style>
.icon-basic-first {
	display: flex;
}

.icon-basic-item,
.icon-basic-second > div {
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid #e4e7ed;
	width: 114px;
	height: 90px;
	cursor: pointer;
}

.icon-basic-item > div {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 0 20px;
}

.icon-basic-item .ued-icon {
	margin: 0;
}
.icon-basic-item .icon-name {
	margin-top: 8px;
	font-size: 13px;
}

.icon-basic-second {
	display: flex;
}
</style>

::: details 显示代码

```vue
<template>
	<div>
		<ued-icon v-for="item in iconName" :key="item" :name="item" :size="20" />
	</div>
	<div>
		<ued-icon :size="20" color="#409efc"><Plus /></ued-icon>
		<ued-icon :size="20"><Minus /></ued-icon>
		<ued-icon :size="20"><CirclePlus /></ued-icon>
		<ued-icon :size="20"><CircleMinus /></ued-icon>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Plus, Minus, CirclePlus, CircleMinus } from '@ued-plus/components'
const iconName = ref(['Plus', 'Minus', 'CirclePlus', 'CircleMinus'])
</script>
```

:::
