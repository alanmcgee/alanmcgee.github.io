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
    <article className="prose prose-neutral dark:prose-invert max-w-none">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
        <time className="text-sm text-gray-500">{post.date}</time>
      </header>
      <div 
        className="mt-8"
        dangerouslySetInnerHTML={{ __html: post.content }} 
      />
    </article>
  )
} 