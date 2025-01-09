import fs from 'fs'
import path from 'path'
import { parse } from 'csv-parse/sync'
import TurndownService from 'turndown'

interface BlogPost {
  Name: string;
  Slug: string;
  'Post Content': string;
  'Publish Date': string;
  'Content Summary'?: string;
  'Main Image'?: string;
  Category?: string;
}

const turndown = new TurndownService({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced'
})

const convertToMarkdown = (post: BlogPost): string => {
  const content = turndown.turndown(post['Post Content'])
  const date = new Date(post['Publish Date'])
  const formattedDate = date.toISOString().split('T')[0]

  return `---
title: '${post.Name.replace(/'/g, "''")}'
date: '${formattedDate}'
---

${content}`
}

const main = async () => {
  const csvContent = fs.readFileSync('blog-posts.csv', 'utf-8')
  const posts: BlogPost[] = parse(csvContent, {
    columns: true,
    skip_empty_lines: true
  })

  const outputDir = path.join(process.cwd(), 'src/content/blog')
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true })
  }

  posts.forEach((post) => {
    const markdown = convertToMarkdown(post)
    fs.writeFileSync(path.join(outputDir, `${post.Slug}.md`), markdown)
  })

  console.log(`Converted ${posts.length} posts`)
}

main().catch(console.error) 