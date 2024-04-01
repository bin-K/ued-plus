<template>
	<h2>图标</h2>
	<div class="link-content link-underline">
		<div class="link-underline-default">
			<ued-link :icon="Plus"> Plus</ued-link>
			<ued-link>
				CirclePlus<ued-icon class="ued-icon--right"> <CirclePlus /></ued-icon>
			</ued-link>
			<ued-link>
				<template #icon>
					<CirclePlus />
				</template>
				CirclePlus
			</ued-link>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { Plus } from '@ued-plus/components'
</script>
