# Text

文本的常见操作

<!--@include: ./basic/index.md-->

<!--@include: ./size/index.md-->

<!--@include: ./truncated/index.md-->

<!--@include: ./tag/index.md-->

<!--@include: ./mixin/index.md-->

<script lang="ts" setup>
import { ref } from 'vue'

const textType = ref([
	{ type: '', text: '默认文本' },
	{ type: 'primary', text: '主要文本' },
	{ type: 'success', text: '成功文本' },
	{ type: 'warning', text: '警告文本' },
	{ type: 'danger', text: '危险文本' },
	{ type: 'info', text: '信息文本' },
])

</script>

<style>
.text-content {
	display: flex;
	flex-direction: column;
  border: 1px solid #e4e7ed;
	padding: 30px;
	border-radius: 5px;
}

.text-content > div {
	margin-bottom: 15px;
}

.text-content > div:last-child {
	margin: 0;
}

</style>

## API

### 属性

| 属性名     |      说明      |                     类型                      | 默认值 |
| ---------- | :------------: | :-------------------------------------------: | ------ |
| size       |      尺寸      |           `large`/`default`/`small`           | -      |
| type       |      类型      | `default`/`success`/`warning`/`danger`/`info` | -      |
| truncated  |   显示省略号   |                   `boolean`                   | false  |
| line-clamp |    最大行数    |               `string`/`number`               | -      |
| tag        | 自定义元素标签 |                   `string`                    | span   |

### 插槽

| 插槽名  |      说明      |
| ------- | :------------: |
| defalut | 自定义默认内容 |
