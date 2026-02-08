import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Determine the base path based on the GitHub repository name
// If running in GitHub Actions, GITHUB_REPOSITORY is set to "owner/repo"
const repoName = process.env.GITHUB_REPOSITORY
  ? process.env.GITHUB_REPOSITORY.split('/')[1]
  : null;

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: repoName ? `/${repoName}/` : './',
})
