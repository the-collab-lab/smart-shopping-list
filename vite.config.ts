import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		outDir: './build',
		target: 'esnext',
		rollupOptions: {
			output: {
				manualChunks: (id) => {
					if (id.includes('node_modules')) {
						if (id.includes('react')) {
							return 'vendor__react';
						}
						if (id.includes('firebase')) {
							return 'vendor__firebase';
						}
						return 'vendor';
					}
				},
			},
		},
	},
	plugins: [react(), svgr()],
	server: { open: true, port: 3000 },
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: './src/tests/setup.ts',
		server: {
			// Prevents Vitest from crashing when it
			// encounters a module that exports CSS.
			deps: { inline: true },
		},
	},
});
