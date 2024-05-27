// vite.config.ts
import { defineConfig } from "file:///D:/Data/Code/Frontend/Project/ued-plus/node_modules/.pnpm/vite@5.2.2_@types+node@20.11.30_sass@1.72.0/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/Data/Code/Frontend/Project/ued-plus/node_modules/.pnpm/@vitejs+plugin-vue@5.0.4_vite@5.2.2_@types+node@20.11.30_sass@1.72.0__vue@3.4.21_typescript@5.4.2_/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import dts from "file:///D:/Data/Code/Frontend/Project/ued-plus/node_modules/.pnpm/vite-plugin-dts@3.7.3_@types+node@20.11.30_rollup@4.13.0_typescript@5.4.2_vite@5.2.2_@types+node@20.11.30_sass@1.72.0_/node_modules/vite-plugin-dts/dist/index.mjs";
import vueJsx from "file:///D:/Data/Code/Frontend/Project/ued-plus/node_modules/.pnpm/@vitejs+plugin-vue-jsx@3.1.0_vite@5.2.2_@types+node@20.11.30_sass@1.72.0__vue@3.4.21_typescript@5.4.2_/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
var vite_config_default = defineConfig({
  build: {
    // 打包后文件目录
    outDir: "ued-plus",
    // 压缩
    minify: false,
    rollupOptions: {
      // 忽略打包vue文件
      external: ["vue", /\.scss/],
      input: ["index.ts"],
      output: [
        {
          // 打包格式
          format: "es",
          // 打包后文件名
          entryFileNames: "[name].mjs",
          // 让打包目录和我们目录对应
          preserveModules: true,
          // https://cn.rollupjs.org/configuration-options/#output-preservemodulesroot
          preserveModulesRoot: "..",
          exports: "named",
          // 配置打包根目录
          dir: "../ued-plus/es"
        },
        {
          // 打包格式
          format: "cjs",
          // 打包后文件名
          entryFileNames: "[name].js",
          // 让打包目录和我们目录对应
          preserveModules: true,
          // https://cn.rollupjs.org/configuration-options/#output-preservemodulesroot
          preserveModulesRoot: "..",
          exports: "named",
          // 配置打包根目录
          dir: "../ued-plus/lib"
        }
      ]
    },
    lib: {
      entry: "./index.ts"
    }
  },
  plugins: [
    vue(),
    vueJsx(),
    dts({
      entryRoot: ".",
      outDir: ["../ued-plus/es", "../ued-plus/lib"],
      // 指定使用的tsconfig.json为我们整个项目根目录下,如果不配置,你也可以在components下新建tsconfig.json
      tsconfigPath: "../../tsconfig.json"
    }),
    {
      name: "style",
      generateBundle(config, bundle) {
        const keys = Object.keys(bundle);
        for (const key of keys) {
          const bundler = bundle[key];
          this.emitFile({
            type: "asset",
            fileName: key,
            // 文件名名不变
            source: bundler.code.replace(/\.scss/g, ".css")
          });
        }
      }
    }
  ],
  test: {
    environment: "happy-dom"
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxEYXRhXFxcXENvZGVcXFxcRnJvbnRlbmRcXFxcUHJvamVjdFxcXFx1ZWQtcGx1c1xcXFxwYWNrYWdlc1xcXFxjb21wb25lbnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxEYXRhXFxcXENvZGVcXFxcRnJvbnRlbmRcXFxcUHJvamVjdFxcXFx1ZWQtcGx1c1xcXFxwYWNrYWdlc1xcXFxjb21wb25lbnRzXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9EYXRhL0NvZGUvRnJvbnRlbmQvUHJvamVjdC91ZWQtcGx1cy9wYWNrYWdlcy9jb21wb25lbnRzL3ZpdGUuY29uZmlnLnRzXCI7Ly8vIDxyZWZlcmVuY2UgdHlwZXM9XCJ2aXRlc3RcIiAvPlxyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xyXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcclxuaW1wb3J0IGR0cyBmcm9tICd2aXRlLXBsdWdpbi1kdHMnXHJcbmltcG9ydCB2dWVKc3ggZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlLWpzeCdcclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuXHRidWlsZDoge1xyXG5cdFx0Ly8gXHU2MjUzXHU1MzA1XHU1NDBFXHU2NTg3XHU0RUY2XHU3NkVFXHU1RjU1XHJcblx0XHRvdXREaXI6ICd1ZWQtcGx1cycsXHJcblx0XHQvLyBcdTUzOEJcdTdGMjlcclxuXHRcdG1pbmlmeTogZmFsc2UsXHJcblx0XHRyb2xsdXBPcHRpb25zOiB7XHJcblx0XHRcdC8vIFx1NUZGRFx1NzU2NVx1NjI1M1x1NTMwNXZ1ZVx1NjU4N1x1NEVGNlxyXG5cdFx0XHRleHRlcm5hbDogWyd2dWUnLCAvXFwuc2Nzcy9dLFxyXG5cdFx0XHRpbnB1dDogWydpbmRleC50cyddLFxyXG5cdFx0XHRvdXRwdXQ6IFtcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvLyBcdTYyNTNcdTUzMDVcdTY4M0NcdTVGMEZcclxuXHRcdFx0XHRcdGZvcm1hdDogJ2VzJyxcclxuXHRcdFx0XHRcdC8vIFx1NjI1M1x1NTMwNVx1NTQwRVx1NjU4N1x1NEVGNlx1NTQwRFxyXG5cdFx0XHRcdFx0ZW50cnlGaWxlTmFtZXM6ICdbbmFtZV0ubWpzJyxcclxuXHRcdFx0XHRcdC8vIFx1OEJBOVx1NjI1M1x1NTMwNVx1NzZFRVx1NUY1NVx1NTQ4Q1x1NjIxMVx1NEVFQ1x1NzZFRVx1NUY1NVx1NUJGOVx1NUU5NFxyXG5cdFx0XHRcdFx0cHJlc2VydmVNb2R1bGVzOiB0cnVlLFxyXG5cdFx0XHRcdFx0Ly8gaHR0cHM6Ly9jbi5yb2xsdXBqcy5vcmcvY29uZmlndXJhdGlvbi1vcHRpb25zLyNvdXRwdXQtcHJlc2VydmVtb2R1bGVzcm9vdFxyXG5cdFx0XHRcdFx0cHJlc2VydmVNb2R1bGVzUm9vdDogJy4uJyxcclxuXHRcdFx0XHRcdGV4cG9ydHM6ICduYW1lZCcsXHJcblx0XHRcdFx0XHQvLyBcdTkxNERcdTdGNkVcdTYyNTNcdTUzMDVcdTY4MzlcdTc2RUVcdTVGNTVcclxuXHRcdFx0XHRcdGRpcjogJy4uL3VlZC1wbHVzL2VzJyxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdC8vIFx1NjI1M1x1NTMwNVx1NjgzQ1x1NUYwRlxyXG5cdFx0XHRcdFx0Zm9ybWF0OiAnY2pzJyxcclxuXHRcdFx0XHRcdC8vIFx1NjI1M1x1NTMwNVx1NTQwRVx1NjU4N1x1NEVGNlx1NTQwRFxyXG5cdFx0XHRcdFx0ZW50cnlGaWxlTmFtZXM6ICdbbmFtZV0uanMnLFxyXG5cdFx0XHRcdFx0Ly8gXHU4QkE5XHU2MjUzXHU1MzA1XHU3NkVFXHU1RjU1XHU1NDhDXHU2MjExXHU0RUVDXHU3NkVFXHU1RjU1XHU1QkY5XHU1RTk0XHJcblx0XHRcdFx0XHRwcmVzZXJ2ZU1vZHVsZXM6IHRydWUsXHJcblx0XHRcdFx0XHQvLyBodHRwczovL2NuLnJvbGx1cGpzLm9yZy9jb25maWd1cmF0aW9uLW9wdGlvbnMvI291dHB1dC1wcmVzZXJ2ZW1vZHVsZXNyb290XHJcblx0XHRcdFx0XHRwcmVzZXJ2ZU1vZHVsZXNSb290OiAnLi4nLFxyXG5cdFx0XHRcdFx0ZXhwb3J0czogJ25hbWVkJyxcclxuXHRcdFx0XHRcdC8vIFx1OTE0RFx1N0Y2RVx1NjI1M1x1NTMwNVx1NjgzOVx1NzZFRVx1NUY1NVxyXG5cdFx0XHRcdFx0ZGlyOiAnLi4vdWVkLXBsdXMvbGliJyxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRdLFxyXG5cdFx0fSxcclxuXHRcdGxpYjoge1xyXG5cdFx0XHRlbnRyeTogJy4vaW5kZXgudHMnLFxyXG5cdFx0fSxcclxuXHR9LFxyXG5cdHBsdWdpbnM6IFtcclxuXHRcdHZ1ZSgpLFxyXG5cdFx0dnVlSnN4KCksXHJcblx0XHRkdHMoe1xyXG5cdFx0XHRlbnRyeVJvb3Q6ICcuJyxcclxuXHRcdFx0b3V0RGlyOiBbJy4uL3VlZC1wbHVzL2VzJywgJy4uL3VlZC1wbHVzL2xpYiddLFxyXG5cdFx0XHQvLyBcdTYzMDdcdTVCOUFcdTRGN0ZcdTc1MjhcdTc2ODR0c2NvbmZpZy5qc29uXHU0RTNBXHU2MjExXHU0RUVDXHU2NTc0XHU0RTJBXHU5ODc5XHU3NkVFXHU2ODM5XHU3NkVFXHU1RjU1XHU0RTBCLFx1NTk4Mlx1Njc5Q1x1NEUwRFx1OTE0RFx1N0Y2RSxcdTRGNjBcdTRFNUZcdTUzRUZcdTRFRTVcdTU3Mjhjb21wb25lbnRzXHU0RTBCXHU2NUIwXHU1RUZBdHNjb25maWcuanNvblxyXG5cdFx0XHR0c2NvbmZpZ1BhdGg6ICcuLi8uLi90c2NvbmZpZy5qc29uJyxcclxuXHRcdH0pLFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiAnc3R5bGUnLFxyXG5cdFx0XHRnZW5lcmF0ZUJ1bmRsZShjb25maWcsIGJ1bmRsZSkge1xyXG5cdFx0XHRcdC8vIFx1OEZEOVx1OTFDQ1x1NTNFRlx1NEVFNVx1ODNCN1x1NTNENlx1NjI1M1x1NTMwNVx1NTQwRVx1NzY4NFx1NjU4N1x1NEVGNlx1NzZFRVx1NUY1NVx1NEVFNVx1NTNDQVx1NEVFM1x1NzgwMWNvZGVcclxuXHRcdFx0XHRjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoYnVuZGxlKVxyXG5cclxuXHRcdFx0XHRmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XHJcblx0XHRcdFx0XHRjb25zdCBidW5kbGVyOiBhbnkgPSBidW5kbGVba2V5IGFzIGFueV1cclxuXHRcdFx0XHRcdC8vIHJvbGx1cFx1NTE4NVx1N0Y2RVx1NjVCOVx1NkNENSxcdTVDMDZcdTYyNDBcdTY3MDlcdThGOTNcdTUxRkFcdTY1ODdcdTRFRjZjb2RlXHU0RTJEXHU3Njg0LnNjc3NcdTYzNjJcdTYyMTAuY3NzLFx1NTZFMFx1NEUzQVx1NjIxMVx1NEVFQ1x1NUY1M1x1NjVGNlx1NkNBMVx1NjcwOVx1NjI1M1x1NTMwNXNjc3NcdTY1ODdcdTRFRjZcclxuXHJcblx0XHRcdFx0XHR0aGlzLmVtaXRGaWxlKHtcclxuXHRcdFx0XHRcdFx0dHlwZTogJ2Fzc2V0JyxcclxuXHRcdFx0XHRcdFx0ZmlsZU5hbWU6IGtleSwgLy8gXHU2NTg3XHU0RUY2XHU1NDBEXHU1NDBEXHU0RTBEXHU1M0Q4XHJcblx0XHRcdFx0XHRcdHNvdXJjZTogYnVuZGxlci5jb2RlLnJlcGxhY2UoL1xcLnNjc3MvZywgJy5jc3MnKSxcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHRdLFxyXG5cdHRlc3Q6IHtcclxuXHRcdGVudmlyb25tZW50OiAnaGFwcHktZG9tJyxcclxuXHR9LFxyXG59KVxyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQ0EsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sU0FBUztBQUNoQixPQUFPLFlBQVk7QUFDbkIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDM0IsT0FBTztBQUFBO0FBQUEsSUFFTixRQUFRO0FBQUE7QUFBQSxJQUVSLFFBQVE7QUFBQSxJQUNSLGVBQWU7QUFBQTtBQUFBLE1BRWQsVUFBVSxDQUFDLE9BQU8sUUFBUTtBQUFBLE1BQzFCLE9BQU8sQ0FBQyxVQUFVO0FBQUEsTUFDbEIsUUFBUTtBQUFBLFFBQ1A7QUFBQTtBQUFBLFVBRUMsUUFBUTtBQUFBO0FBQUEsVUFFUixnQkFBZ0I7QUFBQTtBQUFBLFVBRWhCLGlCQUFpQjtBQUFBO0FBQUEsVUFFakIscUJBQXFCO0FBQUEsVUFDckIsU0FBUztBQUFBO0FBQUEsVUFFVCxLQUFLO0FBQUEsUUFDTjtBQUFBLFFBQ0E7QUFBQTtBQUFBLFVBRUMsUUFBUTtBQUFBO0FBQUEsVUFFUixnQkFBZ0I7QUFBQTtBQUFBLFVBRWhCLGlCQUFpQjtBQUFBO0FBQUEsVUFFakIscUJBQXFCO0FBQUEsVUFDckIsU0FBUztBQUFBO0FBQUEsVUFFVCxLQUFLO0FBQUEsUUFDTjtBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDQSxLQUFLO0FBQUEsTUFDSixPQUFPO0FBQUEsSUFDUjtBQUFBLEVBQ0Q7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNSLElBQUk7QUFBQSxJQUNKLE9BQU87QUFBQSxJQUNQLElBQUk7QUFBQSxNQUNILFdBQVc7QUFBQSxNQUNYLFFBQVEsQ0FBQyxrQkFBa0IsaUJBQWlCO0FBQUE7QUFBQSxNQUU1QyxjQUFjO0FBQUEsSUFDZixDQUFDO0FBQUEsSUFDRDtBQUFBLE1BQ0MsTUFBTTtBQUFBLE1BQ04sZUFBZSxRQUFRLFFBQVE7QUFFOUIsY0FBTSxPQUFPLE9BQU8sS0FBSyxNQUFNO0FBRS9CLG1CQUFXLE9BQU8sTUFBTTtBQUN2QixnQkFBTSxVQUFlLE9BQU8sR0FBVTtBQUd0QyxlQUFLLFNBQVM7QUFBQSxZQUNiLE1BQU07QUFBQSxZQUNOLFVBQVU7QUFBQTtBQUFBLFlBQ1YsUUFBUSxRQUFRLEtBQUssUUFBUSxXQUFXLE1BQU07QUFBQSxVQUMvQyxDQUFDO0FBQUEsUUFDRjtBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsRUFDRDtBQUFBLEVBQ0EsTUFBTTtBQUFBLElBQ0wsYUFBYTtBQUFBLEVBQ2Q7QUFDRCxDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
