import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    chunkSizeWarningLimit: 600,
    rolldownOptions: {
      output: {
        // Group vendor libs and heavy data into separate chunks
        advancedChunks: {
          groups: [
            { name: 'vendor-react', test: /node_modules\/(react|react-dom|react-router)/ },
            { name: 'vendor-ui', test: /node_modules\/lucide-react/ },
            { name: 'exam-data', test: /src\/data\/chemistry\/pastExamQuestions/ },
            { name: 'lesson-data', test: /src\/data\/chemistry\/(lessons|questions)/ },
            { name: 'vendor-katex', test: /node_modules\/katex/ },
          ],
        },
      },
    },
  },
})
