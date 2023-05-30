import { resolve } from 'path';
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// 文档: https://vitejs.dev/config/
export default defineConfig({
    server: {
        port: 8888,
        open: true,
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, '../src'),
        },
    },
    plugins: [
        vue({ include: [/\.vue$/, /\.md$/] }),
    ],
});