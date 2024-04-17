# Layout

通过基础的 24 分栏，迅速简便地创建布局。

> [!TIP]
> 组件默认使用 Flex 布局，不需要手动设置 type="flex"。
> 请注意父容器避免使用 inline 相关样式，会导致组件宽度不能撑满。

<!--@include: ./basic/index.md-->

<!--@include: ./gutter/index.md-->

<!--@include: ./mixin/index.md-->

<!--@include: ./offset/index.md-->

<!--@include: ./justify-align/index.md-->

<!--@include: ./pull-push/index.md-->

<!--@include: ./bootstrap/index.md-->

<style lang="scss" scoped>
.ued-row {
	margin-bottom: 20px;
	&:last-child {
		margin-bottom: 0;
	}
}
.ued-col {
	border-radius: 4px;
}

.grid-content {
	border-radius: 4px;
	min-height: 36px;
	background-color: var(--ued-color-primary-light-7);

	&-light {
		border-radius: 4px;
		min-height: 36px;
		background-color: var(--ued-color-primary-light-5);
	}
}
</style>

## RowAPI

### 属性

| 属性名  |           说明            |                                 类型                                  | 默认值  |
| ------- | :-----------------------: | :-------------------------------------------------------------------: | ------- |
| gutter  |         栅格间隔          |                               `number`                                | 0       |
| justify | flex 布局下的水平排列方式 | `start`/`end`/`center`/`space-around`/`space-between`/ `space-evenly` | `start` |
| align   | flex 布局下的垂直排列方式 |                        `top`/`middle`/`bottom`                        | -       |
| tag     |      自定义元素标签       |                         `string`/`Component`                          | `div`   |

### 插槽

| 插槽名  |      说明      |
| ------- | :------------: |
| defalut | 自定义默认内容 |

## ColAPI

### 属性

| 属性名 |                  说明                  |                                      类型                                       | 默认值 |
| ------ | :------------------------------------: | :-----------------------------------------------------------------------------: | ------ |
| span   |             栅格占据的列数             |                                    `number`                                     | 24     |
| offset |           栅格左侧的间隔格数           |                                    `number`                                     | 0      |
| push   |            栅格向右移动格数            |                                    `number`                                     | 0      |
| pull   |            栅格向左移动格数            |                                    `number`                                     | 0      |
| xs     | `<768px` 响应式栅格数或者栅格属性对象  | `number`/`Object{span?: number, offset?: number, pull?: number, push?: number}` | -      |
| sm     | `≥768px `响应式栅格数或者栅格属性对象  | `number`/`Object{span?: number, offset?: number, pull?: number, push?: number}` | -      |
| md     | `≥992px `响应式栅格数或者栅格属性对象  | `number`/`Object{span?: number, offset?: number, pull?: number, push?: number}` | -      |
| lg     | `≥1200px `响应式栅格数或者栅格属性对象 | `number`/`Object{span?: number, offset?: number, pull?: number, push?: number}` | -      |
| xl     | `≥1920px `响应式栅格数或者栅格属性对象 | `number`/`Object{span?: number, offset?: number, pull?: number, push?: number}` | -      |
| tag    |             自定义元素标签             |                              `string`/`Component`                               | `div`  |

### 插槽

| 插槽名  |      说明      |
| ------- | :------------: |
| defalut | 自定义默认内容 |
