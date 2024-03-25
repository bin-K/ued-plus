<template>
	<router-link v-for="item in link" :key="item" :to="'/' + item">{{ item }}</router-link>
	<router-view></router-view>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const link = ref(['button'])
</script>
