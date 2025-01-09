import { getPostData, getAllPostIds } from '@/lib/markdown'

// Generate static params for all blog posts
export async function generateStaticParams() {
  const ids = getAllPostIds()
  return ids.map((id) => ({
    slug: id,
  }))
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string }
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
        className="prose prose-lg prose-neutral dark:prose-invert max-w-none
          prose-headings:font-semibold
          prose-a:text-teal-500 hover:prose-a:text-teal-600
          prose-img:rounded-lg prose-img:shadow-lg
          prose-pre:bg-zinc-900 prose-pre:shadow-lg
          prose-blockquote:border-l-teal-500
          prose-hr:border-zinc-200 dark:prose-hr:border-zinc-700"
        dangerouslySetInnerHTML={{ __html: post.content }} 
      />

      <div className="mt-16 pt-8 border-t border-zinc-200 dark:border-zinc-700">
        <a 
          href="/blog"
          className="text-teal-500 hover:text-teal-600 transition-colors"
        >
          ← Back to blog
        </a>
      </div>
    </article>
  )
} 