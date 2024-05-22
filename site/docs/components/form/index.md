# Form 表单

表单包含 `输入框`, `单选框`, `下拉选择`, `多选框` 等用户输入的组件。

使用表单，您可以收集、验证和提交数据。

<!--@include: ./basic/index.md-->

<!--@include: ./disabled/index.md-->

<!--@include: ./inline/index.md-->

<!--@include: ./label-position/index.md-->

<!--@include: ./size/index.md-->

<script lang="ts" setup>
import Basic from './basic/index.vue'
import Disabled from './disabled/index.vue'
import Inline from './inline/index.vue'
import LabelPosition from './label-position/index.vue'
import Size from './size/index.vue'
</script>

## Form API

### 属性

| 属性名         |                                         说明                                          |           类型            | 默认值  |
| -------------- | :-----------------------------------------------------------------------------------: | :-----------------------: | ------- |
| model          |                                     表单数据对象                                      |   `Record<string, any>`   | -       |
| size           |                                         尺寸                                          | `large`/`default`/`small` | -       |
| inline         |                                     行内表单模式                                      |         `boolean`         | `false` |
| label-position |      表单域标签的位置， 当设置为 left 或 right 时，则也需要设置 label-width 属性      |   `left`/`right`/`top`    | `right` |
| label-width    | 标签的长度，例如 '50px'。 作为 Form 直接子元素的 form-item 会继承该值。 可以使用 auto |     `string`/`number`     | ''      |
| disabled       |    是否禁用该表单内的所有组件。 如果设置为 true, 它将设置内部组件的 disabled 属性     |         `boolean`         | `false` |

## FormItem API

### 属性

| 属性名 |   说明   |   类型   | 默认值 |
| ------ | :------: | :------: | ------ |
| label  | 标签文本 | `string` | -      |
