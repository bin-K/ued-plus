# Checkbox 多选框

在一组备选项中进行多选。

<!-- @include: ./basic/index.md -->

<!-- @include: ./size/index.md -->

<!-- @include: ./disabled/index.md -->

<!-- @include: ./group/index.md -->

<!-- @include: ./border/index.md -->

<!-- @include: ./button/index.md -->

<!-- @include: ./limit/index.md -->

<!-- @include: ./indeterminate/index.md -->

<script lang="ts" setup>
import { ref } from 'vue'

const checkedBasic = ref(true)
const checkedBasic1 = ref(false)

const checkedSize = ref(true)
const checkedSize1 = ref(false)
const checkedSizeList = ref(['Value A', 'Value D'])

const checkedDisabled = ref(true)
const checkedDisabled1 = ref(false)
const checkedDisabled2 = ref(false)
const checkedDiabledList = ref(['Value A', 'Value D'])

const checkGroupList = ref(['Value A', 'Value D'])

const checkBorderList = ref(['Value A'])
const checkBorderList1 = ref(['Value A'])
const checkBorderList2 = ref(['Value A'])

const button1 = ref(true)
const button2 = ref(false)
const button3 = ref(false)
const buttonGroup = ref(['button1'])
const large = ref(['button1'])
const small = ref(['button1'])
const style = ref(['button1'])

const checkLimitList = ref(['Value A', 'Value B'])


const checkAll = ref(false)
const isIndeterminate = ref(true)
const list = ['Value A', 'Value B', 'Value C', 'Value D']
const checkList = ref(['Value A', 'Value B'])

const handleCheckAllChange = (val: boolean) => {
	checkList.value = val ? list : []
	isIndeterminate.value = false
}

const handleCheckedListChange = (value: string[]) => {
	const checkedCount = value.length
	checkAll.value = checkedCount === list.length
	isIndeterminate.value = checkedCount > 0 && checkedCount < list.length
}
</script>

## Checkbox API

### 属性

| 属性名              |                                 说明                                  |                  类型                  | 默认值 |
| ------------------- | :-------------------------------------------------------------------: | :------------------------------------: | ------ |
| model-value/v-model |                             选中项绑定值                              |      `string`/`number`/`boolean`       | -      |
| value               | 选中状态的值（只有在`checkbox-group`或者绑定对象类型为`array`时有效） | `string`/`number`/`boolean` / `Object` | -      |
| label               |           选中状态的值，只有在绑定对象类型为 `array` 时有效           | `string`/`number`/`boolean`/ `Object`  | -      |
| disabled            |                            是否禁用多选框                             |               `boolean`                | false  |
| border              |                             是否显示边框                              |               `boolean`                | false  |
| size                |                             多选框的尺寸                              |       `large`/`default`/`small`        | -      |
| name                |                           原始 `name` 属性                            |                `string`                | -      |
| indeterminate       |                    设置不确定状态，仅负责样式控制                     |               `boolean`                | false  |

### 事件

| 事件名 |          说明          |                      类型                       |
| ------ | :--------------------: | :---------------------------------------------: |
| change | 绑定值变化时触发的事件 | `(value: string \| number \| boolean) => void ` |

### 插槽

| 插槽名  |      说明      |
| ------- | :------------: |
| default | 自定义默认内容 |

## CheckboxGroup API

### 属性

| 属性名              |                    说明                    |           类型            | 默认值    |
| ------------------- | :----------------------------------------: | :-----------------------: | --------- |
| model-value/v-model |                选中项绑定值                |  `string[]`/`number[]`/   | -         |
| disabled            |               是否禁用多选框               |         `boolean`         | false     |
| border              |                是否显示边框                |         `boolean`         | false     |
| size                |                多选框的尺寸                | `large`/`default`/`small` | -         |
| name                |              原始 `name` 属性              |         `string`          | -         |
| id                  |               原始 `id` 属性               |         `string`          | -         |
| text-color          |    按钮形式的 checkbox 激活时的文本颜色    |         `string`          | `#ffffff` |
| fill                | 按钮形式的 checkbox 激活时的填充色和边框色 |         `string`          | `#409eff` |
| max                 |       可被勾选的 checkbox 的最大数量       |         `number`          | -         |
| min                 |       可被勾选的 checkbox 的最小数量       |         `number`          | -         |

### 事件

| 事件名 |          说明          |                   类型                   |
| ------ | :--------------------: | :--------------------------------------: |
| change | 绑定值变化时触发的事件 | `(value: string[] \| number[]) => void ` |

### 插槽

| 插槽名  |      说明      |          子标签           |
| ------- | :------------: | :-----------------------: |
| default | 自定义默认内容 | Checkbox / CheckboxButton |

## CheckboxButton API

### 属性

| 属性名              |                                 说明                                  |                  类型                  | 默认值 |
| ------------------- | :-------------------------------------------------------------------: | :------------------------------------: | ------ |
| model-value/v-model |                             选中项绑定值                              |      `string`/`number`/`boolean`       | -      |
| value               | 选中状态的值（只有在`checkbox-group`或者绑定对象类型为`array`时有效） | `string`/`number`/`boolean` / `Object` | -      |
| label               |           选中状态的值，只有在绑定对象类型为 `array` 时有效           | `string`/`number`/`boolean`/ `Object`  | -      |
| disabled            |                            是否禁用单选框                             |               `boolean`                | false  |
| size                |                             单选框的尺寸                              |       `large`/`default`/`small`        | -      |
| name                |                           原始 `name` 属性                            |                `string`                | -      |

### 事件

| 事件名 |          说明          |                      类型                       |
| ------ | :--------------------: | :---------------------------------------------: |
| change | 绑定值变化时触发的事件 | `(value: string \| number \| boolean) => void ` |

### 插槽

| 插槽名  |      说明      |
| ------- | :------------: |
| default | 自定义默认内容 |
