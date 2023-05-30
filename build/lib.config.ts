import baseConfig from "./base.config";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { resolve } from "path";

export default ({ mode }) => {
  return defineConfig({
    ...baseConfig,
    plugins: [...(baseConfig as any).plugins, dts()],
    build: {
      lib: {
        entry: resolve(__dirname, "../src/index.ts"),
        name: "vueTyperNext",
        fileName: (format) => `vue-typer-next.${format}.ts` // 打包后的文件名
      },
      rollupOptions: {
        // 确保外部化处理那些你不想打包进库的依赖
        external: ["vue"],
        output: {
          // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
          globals: {
            vue: "Vue",
          },
        },
      },
    },
  });
};
