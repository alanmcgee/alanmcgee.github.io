import { getPostData, getAllPostIds } from '@/lib/markdown'
import Link from 'next/link'

type Params = { slug: string }

export async function generateStaticParams() {
  try {
    const ids = getAllPostIds()
    return ids.map((id) => ({
      slug: id,
    }))
  } catch (error) {
    console.error('Error generating static params:', error)
    return [] // Return empty array if there's an error
  }
}

export default async function BlogPost({
  params,
}: {
  params: Params
}) {
  const post = await getPostData(params.slug)

  return (
    <article className="max-w-2xl mx-auto px-4 py-12">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <time className="text-sm text-gray-500">
          {new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </time>
      </header>
      
      <div 
        className="prose prose-lg prose-neutral max-w-none
          prose-headings:font-semibold
          prose-a:text-teal-500 hover:prose-a:text-teal-600
          prose-img:rounded-lg prose-img:shadow-lg
          prose-pre:bg-zinc-900 prose-pre:shadow-lg
          prose-blockquote:border-l-teal-500
          prose-hr:border-zinc-200"
        dangerouslySetInnerHTML={{ __html: post.content }} 
      />

      <div className="mt-16 pt-8 border-t border-zinc-200">
        <Link 
          href="/blog"
          className="text-teal-500 hover:text-teal-600 transition-colors"
        >
          ← Back to blog
        </Link>
      </div>
    </article>
  )
} 