import { getAllMdxData } from '@/utils/mdx'
import './page.scss'

export async function generateStaticParams() {
  const posts = await getAllMdxData()

  return posts.map(post => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: {
  slug: string
} }) {
  const post = (await getAllMdxData()).find(item => item.slug === params.slug)
  if (!post) {
    return
  }

  const { frontmatter } = post

  return {
    title: frontmatter.title,
    description: frontmatter.description,
  }
}

export default async function Post({ params }: { params: {
  slug: string
} }) {
  const post = (await getAllMdxData()).find(item => item.slug === params.slug)
  if (!post) {
    return
  }

  return (
    <section className="post-layout flex justify-center">
      <article className="prose prose-slate w-full max-w-4xl px-6 dark:prose-invert">
        {post.content}
      </article>
    </section>
  )
}
