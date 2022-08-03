import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'src/custom-cursor-p5.ts'),
            name: 'custom-cursor-p5',
            formats: ['es', 'umd'],
            fileName: (format) => `custom-cursor-p5.${format}.js`,
        },
    }
})
