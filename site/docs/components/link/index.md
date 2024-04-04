# Link

文字超链接

<!--@include: ./basic/index.md-->

<!--@include: ./disabled/index.md-->

<!--@include: ./underline/index.md-->

<!--@include: ./icon/index.md-->

<script lang="ts" setup>
import { ref } from 'vue'
import { Plus } from '@ued-plus/components'

const linkType = ref([
	{ type: '', text: '默认链接' },
	{ type: 'primary', text: '主要链接' },
	{ type: 'success', text: '成功链接' },
	{ type: 'warning', text: '警告链接' },
	{ type: 'danger', text: '危险链接' },
	{ type: 'info', text: '信息链接' },
])
</script>

<style>
.link-content {
  display: flex;
  flex-direction: column;
  border: 1px solid #e4e7ed;
  padding: 30px;
  border-radius: 5px;
}

.link-content > div {
  margin-bottom: 15px;
}

.link-content > div:last-child {
  margin: 0;
}
</style>

## API

### 属性

| 属性名    |       说明       |                     类型                      | 默认值 |
| --------- | :--------------: | :-------------------------------------------: | ------ |
| type      |       类型       | `default`/`success`/`warning`/`danger`/`info` | -      |
| underline |    是否下划线    |                   `boolean`                   | true   |
| disabled  |   是否禁用状态   |                   `boolean`                   | false  |
| href      |  原生 href 属性  |                   `string`                    | -      |
| href      | 原生 target 属性 |       `_blank`/`_parent`/`_self`/`_top`       | \_self |
| icon      |     图标组件     |                  `Component`                  | -      |

### 插槽

| 插槽名  |      说明      |
| ------- | :------------: |
| defalut | 自定义默认内容 |
| icon    | 自定义图标组件 |
