# Scrollbar

用于替换浏览器原生滚动条。

<!--@include: ./basic/index.md-->

<!--@include: ./horizontal/index.md-->

<!--@include: ./max-height/index.md-->

<!--@include: ./set-scroll/index.md-->

<script lang="ts" setup>
import { ref, onMounted } from 'vue'

const count = ref(3)

const add = () => {
	count.value++
}
const onDelete = () => {
	if (count.value > 0) {
		count.value--
	}
}

const value = ref(0)
const max = ref(0)
const innerRef = ref<HTMLDivElement>()
const scrollbarRef = ref()
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

<style lang="scss">
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px !important;
  text-align: center;
  border-radius: 4px;
  background: var(--ued-color-primary-light-9);
  color: var(--ued-color-primary);
}
</style>

## API

### 属性

| 属性名     |                                 说明                                 |                          类型                           | 默认值 |
| ---------- | :------------------------------------------------------------------: | :-----------------------------------------------------: | ------ |
| height     |                              滚动条高度                              |                    `number`/`string`                    | -      |
| max-height |                            滚动条最大高度                            |                    `number`/`string`                    | -      |
| native     |                        是否使用原生滚动条样式                        |                        `boolean`                        | false  |
| wrap-style |                         包裹容器的自定义样式                         | `string`/`CSSSProperties`/`CSSSProperties[]`/`string[]` | -      |
| wrap-class |                         包裹容器的自定义类名                         |                        `string`                         | -      |
| view-style |                           视图的自定义样式                           | `string`/`CSSSProperties`/`CSSSProperties[]`/`string[]` | -      |
| view-class |                           视图的自定义类名                           |                        `string`                         | -      |
| noresize   | 不响应容器尺寸变化，如果容器尺寸不会发生变化，最好设置它可以优化性能 |                        `boolean`                        | false  |
| tag        |                            视图的元素标签                            |                        `string`                         | div    |
| always     |                            滚动条总是显示                            |                        `boolean`                        | false  |
| min-size   |                            滚动条最小尺寸                            |                        `number`                         | 20     |

### 插槽

| 插槽名  |      说明      |
| ------- | :------------: |
| defalut | 自定义默认内容 |

### 事件

| 插槽名 |               说明               | 类型                                                  |
| ------ | :------------------------------: | ----------------------------------------------------- |
| scroll | 当触发滚动事件时，返回滚动的距离 | `({ scrollLeft: number, scrollTop: number }) => void` |

### 暴露

| 属性名        |          说明          |                              类型                               |
| ------------- | :--------------------: | :-------------------------------------------------------------: |
| handleScroll  |      触发滚动事件      |                          `() => void`                           |
| scrollTo      |   滚动到一组特定坐标   | `(options: ScrollToOptions \| number, yCoord?: number) => void` |
| setScrollTop  | 设置滚动条到顶部的距离 |                  `(scrollTop: number) => void`                  |
| setScrollLeft | 设置滚动条到左边的距离 |                  `(scrollTop: number) => void`                  |
| update        |   手动更新滚动条状态   |                          `() => void`                           |
| wrapRef       | 滚动条包裹的 ref 对象  |                  `object{Ref<HTMLDivElement>}`                  |
