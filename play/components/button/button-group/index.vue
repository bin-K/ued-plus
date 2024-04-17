<template>
	<h2>按钮组</h2>
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
</template>

<script lang="ts" setup>
import { Minus, Search } from '@ued-plus/components'
</script>
