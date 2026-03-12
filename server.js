import express from 'express'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()
const port = process.env.PORT || 3000
const distPath = join(__dirname, 'dist')

// Serve static files from dist directory
app.use(express.static(distPath))

// Handle SPA routing - fallback to index.html for all routes
app.get('*', (req, res) => {
  res.sendFile(join(distPath, 'index.html'))
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
