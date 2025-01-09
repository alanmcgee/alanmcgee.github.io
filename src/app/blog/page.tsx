import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

interface BlogPost {
  id: string
  title: string
  date: string
  content: string
}

export default async function BlogPage() {
  const postsDirectory = path.join(process.cwd(), 'src/content/blog')
  const fileNames = fs.readdirSync(postsDirectory)
  
  const posts: BlogPost[] = await Promise.all(
    fileNames
      .filter(fileName => {
        return fileName.endsWith('.md') && 
               fs.statSync(path.join(postsDirectory, fileName)).isFile()
      })
      .map(async fileName => {
        const id = fileName.replace(/\.md$/, '')
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const { data, content } = matter(fileContents)
        
        const processedContent = await remark()
          .use(html)
          .process(content)

        return {
          id,
          title: data.title as string,
          date: data.date as string,
          content: processedContent.toString()
        }
      })
  )
  
  // Sort posts by date (newest first)
  const sortedPosts = posts.sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <div className="space-y-16">
        {sortedPosts.map((post) => (
          <article key={post.id} className="group">
            <header className="mb-4">
              <h2 className="text-2xl font-semibold tracking-tight mb-2">
                <a 
                  href={`/blog/${post.id}`}
                  
                >
                  {post.title}
                </a>
              </h2>
              <time className="text-sm text-gray-500">
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            </header>
            
            <div 
              className="prose prose-neutral dark:prose-invert max-w-none
                prose-a:text-teal-500 hover:prose-a:text-teal-600"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            <div className="mt-4">
              <a 
                href={`/blog/${post.id}`}
                className="text-teal-500 hover:text-teal-600 transition-colors text-sm"
              >
                Read more →
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
} 