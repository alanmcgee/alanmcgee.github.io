import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'src/content/blog')

export interface BlogPost {
  id: string
  title: string
  date: string
  content: string
}

export async function getPostData(id: string): Promise<BlogPost> {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  
  const processedContent = await remark()
    .use(html)
    .process(content)
  
  return {
    id,
    title: data.title,
    date: data.date,
    content: processedContent.toString()
  }
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory)
  // Filter to only include .md files that actually exist
  return fileNames
    .filter(fileName => {
      const fullPath = path.join(postsDirectory, fileName)
      return fileName.endsWith('.md') && fs.existsSync(fullPath)
    })
    .map(fileName => fileName.replace(/\.md$/, ''))
} 