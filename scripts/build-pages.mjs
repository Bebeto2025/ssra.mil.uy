import { spawnSync } from 'node:child_process'
import { copyFileSync } from 'node:fs'

const env = { ...process.env, GITHUB_PAGES: 'true' }

const tsc = spawnSync('npx', ['tsc', '-b'], { stdio: 'inherit', shell: true, env })
if (tsc.status !== 0) process.exit(tsc.status ?? 1)

const vite = spawnSync('npx', ['vite', 'build'], { stdio: 'inherit', shell: true, env })
if (vite.status !== 0) process.exit(vite.status ?? 1)

copyFileSync('dist/index.html', 'dist/404.html')
console.log('GitHub Pages build ready in dist/')
