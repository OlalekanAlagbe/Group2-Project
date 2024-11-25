import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    root: 'src',
    publicDir: '../public',
    build: {
        outDir: '../dist',
        assetsDir: 'assets',
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'src/index.html')
            }
        }
    },
    server: {
        open: true,
        watch: {
            usePolling: true,
            interval: 100
        },
        hmr: {
            overlay: true
        }
    }
}); 