import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/http://sohail13.com.np/",
  plugins: [react()],
   // Ensures correct paths for assets
});