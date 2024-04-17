## 按钮组

以按钮组的方式出现，常用于多项类似操作。

使用 `<ued-button-group>` 对多个按钮分组。

使用 size type 可以设置按钮组内按钮的 size 和 type,优先级高于原按钮的 size 和 type

<div class="common-content button-content button-group">
  <div class="button-group-defalut">
    <ued-button-group>
      <ued-button type="primary" :icon="Minus">主要按钮</ued-button>
      <ued-button type="primary">
        主要按钮<ued-icon class="ued-icon--right"><Plus /></ued-icon>
      </ued-button>
    </ued-button-group>
    <ued-button-group size="small">
      <ued-button type="success" :icon="Minus">成功按钮</ued-button>
      <ued-button type="success">
        成功按钮<ued-icon class="ued-icon--right"><Plus /></ued-icon>
      </ued-button>
    </ued-button-group>
  </div>
  <div class="button-group-round">
    <ued-button-group type="warning">
      <ued-button :icon="Minus" round> 警告按钮 </ued-button>
      <ued-button round>
        警告按钮<ued-icon class="ued-icon--right"><Plus /></ued-icon>
      </ued-button>
    </ued-button-group>
  </div>
  <div class="button-group-cirle">
    <ued-button-group type="danger">
      <ued-button :icon="Search" circle />
      <ued-button>
        <ued-icon name="Message" circle />
      </ued-button>
      <ued-button circle>
        <ued-icon>
          <Delete />
        </ued-icon>
      </ued-button>
    </ued-button-group>
  </div>
  <div class="button-group-icon">
    <ued-button-group type="info">
      <ued-button :icon="Search" />
      <ued-button>
        <ued-icon name="Message" />
      </ued-button>
      <ued-button>
        <ued-icon>
          <Delete />
        </ued-icon>
      </ued-button>
    </ued-button-group>
  </div>
</div>

::: details 显示代码

```vue
<template>
	<div class="button-group-defalut">
		<ued-button-group>
			<ued-button type="primary" :icon="Minus">主要按钮</ued-button>
			<ued-button type="primary">
				主要按钮<ued-icon class="ued-icon--right"><Plus /></ued-icon>
			</ued-button>
		</ued-button-group>
		<ued-button-group size="small">
			<ued-button type="success" :icon="Minus">成功按钮</ued-button>
			<ued-button type="success">
				成功按钮<ued-icon class="ued-icon--right"><Plus /></ued-icon>
			</ued-button>
		</ued-button-group>
	</div>
	<div class="button-group-round">
		<ued-button-group type="warning">
			<ued-button :icon="Minus" round> 警告按钮 </ued-button>
			<ued-button round>
				警告按钮<ued-icon class="ued-icon--right"><Plus /></ued-icon>
			</ued-button>
		</ued-button-group>
	</div>
	<div class="button-group-circle">
		<ued-button-group type="danger">
			<ued-button :icon="Search" circle />
			<ued-button>
				<ued-icon name="Message" circle />
			</ued-button>
			<ued-button circle>
				<ued-icon>
					<Delete />
				</ued-icon>
			</ued-button>
		</ued-button-group>
	</div>
	<div class="button-group-icon">
		<ued-button-group type="info">
			<ued-button :icon="Search" />
			<ued-button>
				<ued-icon name="Message" />
			</ued-button>
			<ued-button>
				<ued-icon>
					<Delete />
				</ued-icon>
			</ued-button>
		</ued-button-group>
	</div>
</template>

<script lang="ts" setup>
import { Minus, Search } from '@ued-plus/components'
</script>
```

:::
