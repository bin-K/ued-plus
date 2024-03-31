## loading 加载状态

点击按钮来加载数据，并向用户反馈加载状态。

通过设置 loading 属性为 true 来显示加载中状态。

> [!TIP]
> 您可以使用icon插槽或 loadingIcon属性自定义您的loading图标
> icon插槽优先级高于loadingIcon属性

<div class="button-content button-loading">
  <div class="button-loading-defalut">
    <ued-button type="primary" loading>加载中</ued-button>
    <ued-button type="primary" loading :loading-icon="Plus">
      加载中
    </ued-button>
    <ued-button type="primary" loading>
      <template #icon>
        <CirclePlus />
      </template>
      加载中
    </ued-button>
  </div>
</div>
