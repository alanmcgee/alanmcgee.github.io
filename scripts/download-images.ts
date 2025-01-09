import fs from 'fs'
import path from 'path'
import https from 'https'
import matter from 'gray-matter'

const WEBFLOW_IMAGE_REGEX = /https:\/\/uploads-ssl\.webflow\.com\/[^)\s]+/g
const postsDirectory = path.join(process.cwd(), 'src/content/blog')
const publicImagesDirectory = path.join(process.cwd(), 'public/images/blog')

async function downloadImage(url: string, fileName: string): Promise<void> {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}`))
        return
      }

      const filePath = path.join(publicImagesDirectory, fileName)
      const fileStream = fs.createWriteStream(filePath)
      response.pipe(fileStream)
      
      fileStream.on('finish', () => {
        fileStream.close()
        resolve()
      })
    }).on('error', reject)
  })
}

async function main() {
  // Create images directory if it doesn't exist
  if (!fs.existsSync(publicImagesDirectory)) {
    fs.mkdirSync(publicImagesDirectory, { recursive: true })
  }

  const files = fs.readdirSync(postsDirectory)
  
  for (const file of files) {
    if (!file.endsWith('.md')) continue
    
    const filePath = path.join(postsDirectory, file)
    const content = fs.readFileSync(filePath, 'utf8')
    const { data, content: markdownContent } = matter(content)
    
    let updatedContent = markdownContent
    const matches = markdownContent.match(WEBFLOW_IMAGE_REGEX) || []
    
    for (const url of matches) {
      const urlObj = new URL(url)
      const fileName = path.basename(urlObj.pathname)
      
      try {
        await downloadImage(url, fileName)
        updatedContent = updatedContent.replace(url, `/images/blog/${fileName}`)
        console.log(`Downloaded: ${fileName}`)
      } catch (error) {
        console.error(`Failed to download ${url}:`, error)
      }
    }
    
    const newContent = matter.stringify(updatedContent, data)
    fs.writeFileSync(filePath, newContent)
  }
}

main().catch(console.error) 