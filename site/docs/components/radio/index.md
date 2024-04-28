# Radio 单选框

在一组备选项中进行单选

<!--@include: ./basic/index.md-->

<!--@include: ./border/index.md-->

<!--@include: ./button/index.md-->

<!--@include: ./disabled/index.md-->

<!--@include: ./size/index.md-->

<script lang="ts" setup>
import { ref } from 'vue'
const radioBasic = ref(1)
const radioGroupBasic = ref(1)

const border = ref(1)
const borderGroup = ref(1)
const borderGroupDisabled = ref(1)

const button = ref('button1')
const buttonGroup = ref('button1')
const large = ref('button1')
const small = ref('button1')
const style = ref('button1')

const disabled = ref(1)

const largeRadio = ref(1)
const defaultRadio = ref(1)
const smallRadio = ref(1)
</script>

## Radio API

### 属性

| 属性名              |                  说明                   |            类型             | 默认值 |
| ------------------- | :-------------------------------------: | :-------------------------: | ------ |
| model-value/v-model |              选中项绑定值               | `string`/`number`/`boolean` | -      |
| value               | 单选框的值，无label时，value同时为label | `string`/`number`/`boolean` | -      |
| label               |             单选框的 label              | `string`/`number`/`boolean` | -      |
| disabled            |             是否禁用单选框              |          `boolean`          | false  |
| border              |              是否显示边框               |          `boolean`          | false  |
| size                |              单选框的尺寸               |  `large`/`default`/`small`  | -      |
| name                |            原始 `name` 属性             |          `string`           | -      |

### 事件

| 事件名 |          说明          |                      类型                       |
| ------ | :--------------------: | :---------------------------------------------: |
| change | 绑定值变化时触发的事件 | `(value: string \| number \| boolean) => void ` |

### 插槽

| 插槽名  |      说明      |
| ------- | :------------: |
| default | 自定义默认内容 |

## RadioGroup API

### 属性

| 属性名              |                  说明                   |            类型             | 默认值    |
| ------------------- | :-------------------------------------: | :-------------------------: | --------- |
| model-value/v-model |              选中项绑定值               | `string`/`number`/`boolean` | -         |
| disabled            |             是否禁用单选框              |          `boolean`          | false     |
| border              |              是否显示边框               |          `boolean`          | false     |
| size                |              单选框的尺寸               |  `large`/`default`/`small`  | -         |
| name                |            原始 `name` 属性             |          `string`           | -         |
| id                  |             原始 `id` 属性              |          `string`           | -         |
| text-color          |    按钮形式的 Radio 激活时的文本颜色    |          `string`           | `#ffffff` |
| fill                | 按钮形式的 Radio 激活时的填充色和边框色 |          `string`           | `#409eff` |

### 事件

| 事件名 |          说明          |                      类型                       |
| ------ | :--------------------: | :---------------------------------------------: |
| change | 绑定值变化时触发的事件 | `(value: string \| number \| boolean) => void ` |

### 插槽

| 插槽名  |      说明      |       子标签        |
| ------- | :------------: | :-----------------: |
| default | 自定义默认内容 | Radio / RadioButton |

## RadioButton API

| 属性名              |                  说明                   |            类型             | 默认值 |
| ------------------- | :-------------------------------------: | :-------------------------: | ------ |
| model-value/v-model |              选中项绑定值               | `string`/`number`/`boolean` | -      |
| value               | 单选框的值，无label时，value同时为label | `string`/`number`/`boolean` | -      |
| label               |             单选框的 label              | `string`/`number`/`boolean` | -      |
| disabled            |             是否禁用单选框              |          `boolean`          | false  |
| size                |              单选框的尺寸               |  `large`/`default`/`small`  | -      |
| name                |            原始 `name` 属性             |          `string`           | -      |

### 事件

| 事件名 |          说明          |                      类型                       |
| ------ | :--------------------: | :---------------------------------------------: |
| change | 绑定值变化时触发的事件 | `(value: string \| number \| boolean) => void ` |

### 插槽

| 插槽名  |      说明      |
| ------- | :------------: |
| default | 自定义默认内容 |
