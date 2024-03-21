import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 在 vue 3.3 版本之后 可以直接在 <script setup> 中使用 defineOptions 了
// import DefineOptions from 'unplugin-vue-define-options/vite'
export default defineConfig({
	plugins: [vue()],
})
