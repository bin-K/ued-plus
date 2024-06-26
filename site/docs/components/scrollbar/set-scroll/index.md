## 手动滚动

通过使用 setScrollTop 与 setScrollLeft 方法，可以手动控制滚动条滚动。

<div class="common-content scrollbar-content scrollbar-set-scroll">
  <ued-scrollbar ref="scrollbarRef" height="400px" always @scroll="handleScroll">
    <div ref="innerRef">
      <p v-for="item in 20" :key="item" class="scrollbar-demo-item">
        {{ item }}
      </p>
    </div>
  </ued-scrollbar>
  <ued-button @click="up">上移</ued-button>
  <ued-button @click="down">下移</ued-button>
</div>

<style lang="scss" scoped>
.scrollbar-content.scrollbar-set-scroll {
	display: block;
}
</style>

::: details 显示代码

```vue
<template>
	<div class="scrollbar-content scrollbar-set-scroll">
		<ued-scrollbar
			ref="scrollbarRef"
			height="400px"
			always
			@scroll="handleScroll"
		>
			<div ref="innerRef">
				<p v-for="item in 20" :key="item" class="scrollbar-demo-item">
					{{ item }}
				</p>
			</div>
		</ued-scrollbar>
		<ued-button @click="up">上移</ued-button>
		<ued-button @click="down">下移</ued-button>
	</div>
</template>

<script lang="ts" setup>
import { UedScrollBar } from 'packages/components'
import { ref, onMounted } from 'vue'

const value = ref(0)
const max = ref(0)
const innerRef = ref<HTMLDivElement>()
const scrollbarRef = ref<InstanceType<typeof UedScrollBar>>()
const up = () => {
	value.value = value.value - 25
	if (value.value <= 0) value.value = 0
	scrollbarRef.value!.setScrollTop(value.value)
}

const down = () => {
	value.value = value.value + 25
	if (value.value >= max.value) value.value = max.value
	scrollbarRef.value!.setScrollTop(value.value)
}
const handleScroll = ({ scrollTop }) => {
	value.value = scrollTop
}
onMounted(() => {
	max.value = innerRef.value!.clientHeight - 380
})
</script>

<style lang="scss" scoped>
.scrollbar-demo-item {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 50px;
	margin: 10px;
	text-align: center;
	border-radius: 4px;
	background: var(--ued-color-primary-light-9);
	color: var(--ued-color-primary);
}
</style>
```

:::
