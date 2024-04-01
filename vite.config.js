import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base : "/render-props-hoc",
    plugins: [react()],
});