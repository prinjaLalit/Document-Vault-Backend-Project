import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // ✅ Import React plugin

export default defineConfig({
  plugins: [react()], // ✅ Add React plugin
});
