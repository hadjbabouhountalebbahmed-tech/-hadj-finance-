import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ⚠️ IMPORTANT : Si ton dépôt GitHub a un autre nom que "hadj-finance",
// remplace "hadj-finance" ci-dessous par le nom EXACT du dépôt.
export default defineConfig({
  plugins: [react()],
  base: '/hadj-finance/', // <-- nom exact du dépôt GitHub
})
