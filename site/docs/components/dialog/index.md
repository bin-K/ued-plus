# Dialog 弹窗

在保留当前页面状态的情况下，告知用户并承载相关操作。

<!--@include: ./basic/index.md-->

<!--@include: ./fullscreen/index.md-->

<!--@include: ./modal/index.md-->

<!--@include: ./center/index.md-->

<!--@include: ./delay/index.md-->

<!--@include: ./draggable/index.md-->

<!--@include: ./close-icon/index.md-->

<!--@include: ./event/index.md-->

<!--@include: ./header/index.md-->

<!--@include: ./nested/index.md-->

<script lang="ts" setup>
import { ref } from 'vue'
import { Star, CirclePlus } from '@ued-plus/components'

// basic
const visible = ref(false)
type DoneFn = (cancel?: boolean) => void
const beforeClose = (done: DoneFn) => {
	console.log('关闭前执行')
	done()
}
// fullscreen
const fullscreenVisible = ref(false)
// modal
const modalVisible = ref(false)
// center
const centerVisible = ref(false)
const dialogCenterVisible = ref(false)
// delay
const openDelayVisible = ref(false)
// draggable
const openDraggableVisible = ref(false)
const openDraggableOverflowVisible = ref(false)
// close-icon
const closeIconVisible1 = ref(false)
const closeIconVisible2 = ref(false)
// event
const eventVisible = ref(false)
const content = ref('')
const open = () => {
	content.value = 'open'
}
const opened = () => {
	content.value = 'opened'
}
const close = () => {
	console.log('close')
}
const closed = () => {
	console.log('closed')
}
// header
const headerVisible = ref(false)
const customHeaderVisible = ref(false)
// nested
const outerVisible = ref(false)
const innerVisible = ref(false)
</script>

<style lang="scss">
.dialog-content {
	display: block;
}
</style>

## API

### 属性

| 属性名                |                                              说明                                               |           类型           | 默认值  |
| --------------------- | :---------------------------------------------------------------------------------------------: | :----------------------: | ------- |
| model-value/v-model   |                                         是否显示 Dialog                                         |        `boolean`         | -       |
| title                 |                                 对话框的标题,可通过具名slot传入                                 |         `string`         | -       |
| width                 |                                   对话框的宽度，默认值为 50%                                    |    `string`/`number`     | ''      |
| fullscreen            |                                        是否为全屏 Dialog                                        |        `boolean`         | `false` |
| top                   |                                   margin-top 值，默认为 15vh                                    |         `string`         | `15vh`  |
| modal                 |                                         是否需要遮罩层                                          |        `boolean`         | `true`  |
| modal-class           |                                        遮罩的自定义类名                                         |         `string`         | -       |
| append-to-body        |             自身是否插入至 body 元素上。 嵌套的 Dialog 必须指定该属性并赋值为 true              |        `boolean`         | `false` |
| append-to             |                        Dialog 挂载到哪个 DOM 元素 将覆盖 append-to-body                         |         `string`         | `body`  |
| lock-scroll           |                              是否在 Dialog 出现时将 body 滚动锁定                               |        `boolean`         | `true`  |
| open-delay            |                                 dialog 打开的延时时间，单位毫秒                                 |         `number`         | `0`     |
| close-delay           |                                 dialog 关闭的延时时间，单位毫秒                                 |         `number`         | `0`     |
| close-on-click-modal  |                               是否可以通过点击 modal 关闭 Dialog                                |        `boolean`         | `true`  |
| close-on-press-escape |                                是否可以通过按下 ESC 关闭 Dialog                                 |        `boolean`         | `true`  |
| show-close            |                                        是否显示关闭按钮                                         |        `boolean`         | `true`  |
| before-close          | 关闭前的回调，会暂停 Dialog 的关闭. 回调函数内执行 done 参数方法的时候才是真正关闭对话框的时候. | `(done: DoneFn) => void` | -       |
| draggable             |                                    为 Dialog 启用可拖拽功能                                     |        `boolean`         | `fasle` |
| overflow              |                                     拖动范围可以超出可视区                                      |        `boolean`         | `fasle` |
| center                |                         是否让 Dialog 的 header 和 footer 部分居中排列                          |        `boolean`         | `fasle` |
| align-center          |                                     是否水平垂直对齐对话框                                      |        `boolean`         | `fasle` |
| close-icon            |                                   自定义关闭图标，默认 Close                                    |   `string`/`Component`   | -       |
| z-index               |                          和原生的 CSS 的 z-index 相同，改变 z 轴的顺序                          |         `number`         | -       |

### 插槽

| 插槽名 |                         说明                         |
| ------ | :--------------------------------------------------: |
| -      |                    Dialog 的内容                     |
| header | 对话框标题的内容；会替换标题部分，但不会移除关闭按钮 |
| footer |               Dialog 按钮操作区的内容                |

### 事件

| 事件名 |            说明             | 类型         |
| ------ | :-------------------------: | ------------ |
| open   |      Dialog 打开的回调      | `() => void` |
| opened | Dialog 打开动画结束时的回调 | `() => void` |
| close  |      Dialog 关闭的回调      | `() => void` |
| closed | Dialog 关闭动画结束时的回调 | `() => void` |
