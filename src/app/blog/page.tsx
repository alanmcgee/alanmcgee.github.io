import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

interface BlogPost {
  id: string
  title: string
  date: string
}

export default async function BlogPage() {
  const postsDirectory = path.join(process.cwd(), 'src/content/blog')
  const fileNames = fs.readdirSync(postsDirectory)
  
  const posts: BlogPost[] = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '')
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data } = matter(fileContents)

    return {
      id,
      title: data.title as string,
      date: data.date as string,
    }
  })

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Blog</h1>
      <div className="space-y-4">
        {posts.map((post) => (
          <article key={post.id} className="border-b pb-4">
            <h2 className="text-xl font-semibold">
              <a href={`/blog/${post.id}`} className="hover:underline">
                {post.title}
              </a>
            </h2>
            <time className="text-sm text-gray-500">{post.date}</time>
          </article>
        ))}
      </div>
    </div>
  )
} 