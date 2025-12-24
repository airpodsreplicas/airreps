import type { Plugin } from 'vite'
import { writeFileSync, mkdirSync } from 'fs'
import { join, dirname } from 'path'

// Redirect mappings for old dictionary pages
const redirects: Record<string, string> = {
  '/dictionary/agent': '/introduction/dictionary',
  '/dictionary/fake-airpods': '/introduction/dictionary',
  '/dictionary/guinea-pig': '/introduction/dictionary',
  '/dictionary/knockoffs': '/introduction/dictionary',
  '/dictionary/legit-check': '/introduction/dictionary',
  '/dictionary/markings': '/introduction/dictionary',
  '/dictionary/quality-control': '/introduction/dictionary',
  '/dictionary/reps-clones': '/introduction/dictionary',
  '/dictionary/w2c': '/introduction/dictionary',
}

const redirectHTML = (to: string) => `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="refresh" content="0; url=${to}">
  <link rel="canonical" href="${to}">
  <script>window.location.replace('${to}')</script>
</head>
<body>
  <p>Redirecting to <a href="${to}">${to}</a>...</p>
</body>
</html>`

export function redirectPlugin(): Plugin {
  return {
    name: 'vitepress-redirect',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url?.split('?')[0] || ''
        const redirect = redirects[url]

        if (redirect) {
          res.writeHead(301, { Location: redirect })
          res.end()
          return
        }

        next()
      })
    },
    writeBundle(options, bundle) {
      // Write redirect files after bundle is written
      const outDir = options.dir || 'dist'

      Object.entries(redirects).forEach(([from, to]) => {
        // Remove leading slash and create directory structure
        const cleanPath = from.replace(/^\//, '').replace(/\/$/, '')
        const indexPath = join(outDir, cleanPath, 'index.html')
        const dir = dirname(indexPath)

        // Create directory if it doesn't exist
        mkdirSync(dir, { recursive: true })

        // Write redirect HTML file
        writeFileSync(indexPath, redirectHTML(to), 'utf-8')
      })
    }
  }
}

