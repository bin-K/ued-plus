## Button 按钮

常用的操作按钮

<script setup>
import { Plus, Search, Minus, CirclePlus } from "@ued-plus/components"
import { ref } from 'vue'
const buttonType = ref([
	{ type: '', text: '默认按钮' },
	{ type: 'primary', text: '主要按钮' },
	{ type: 'success', text: '成功按钮' },
	{ type: 'warning', text: '警告按钮' },
	{ type: 'danger', text: '危险按钮' },
	{ type: 'info', text: '信息按钮' },
])
</script>

<!--@include: ./basic/index.md-->

<!--@include: ./disabled/index.md-->

<!--@include: ./link/index.md-->

<!--@include: ./size/index.md-->

<!--@include: ./tag/index.md-->

<!--@include: ./button-icon/index.md-->

<!--@include: ./loading/index.md-->

<!--@include: ./button-group/index.md  -->

<style>
.button-content {
	display: flex;
	flex-direction: column;
  border: 1px solid #e4e7ed;
	padding: 30px;
	border-radius: 5px;
}

.button-content > div {
	margin-bottom: 15px;
}

.button-content > div:last-child {
	margin: 0;
}

</style>

## Button API

### 属性

| 属性名       |           说明           |                     类型                      | 默认值 |
| ------------ | :----------------------: | :-------------------------------------------: | ------ |
| size         |           尺寸           |           `large`/`default`/`small`           | -      |
| type         |           类型           | `default`/`success`/`warning`/`danger`/`info` | -      |
| plain        |      是否为朴素按钮      |                   `boolean`                   | false  |
| text         |      是否为文字按钮      |                   `boolean`                   | false  |
| bg           | 是否显示文字按钮背景颜色 |                   `boolean`                   | false  |
| link         |      是否为链接按钮      |                   `boolean`                   | false  |
| round        |      是否为圆角按钮      |                   `boolean`                   | false  |
| circle       |      是否为圆形按钮      |                   `boolean`                   | false  |
| loading      |     是否为加载中状态     |                   `boolean`                   | false  |
| loading-icon | 自定义加载中状态图标组件 |                  `Component`                  | false  |
| disabled     |    按钮是否为禁用状态    |                   `Boolean`                   | false  |
| icon         |         图标组件         |                  `Component`                  | false  |
| autofocus    |  原生 `autofocus` 属性   |                   `boolean`                   | false  |
| tag          |      自定义元素标签      |             `String`/`Component`              | button |

### 插槽

| 插槽名  |      说明      |
| ------- | :------------: |
| defalut | 自定义默认内容 |
| icon    | 自定义图标组件 |

### 方法

| 属性名   |      说明      | 类型 |
| -------- | :------------: | ---- |
| ref      | 按钮 html 元素 | 类型 |
| size     |    按钮尺寸    | 类型 |
| type     |    按钮类型    | 类型 |
| disabled |   按钮已禁用   | 类型 |

## ButtonGroup API

### 属性

| 属性名 |             说明             |                     类型                      | 默认值 |
| ------ | :--------------------------: | :-------------------------------------------: | ------ |
| size   | 用于控制该按钮组内按钮的大小 |           `large`/`default`/`small`           | -      |
| type   | 用于控制该按钮组内按钮的类型 | `default`/`success`/`warning`/`danger`/`info` | -      |

### 插槽

| 插槽名  |      说明      | 子标签 |
| ------- | :------------: | ------ |
| defalut | 自定义默认内容 | Button |
