import { getAllMdxData } from '@/utils/mdx'
import './page.scss'
import { transformDateStringToDisplayDate } from '@/utils/date'

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
        <div className="mt-6 flex flex-wrap items-center justify-between text-slate-500">
          <span>
            {`Publish time: ${transformDateStringToDisplayDate(post.frontmatter.publishTime as string)}`}
          </span>
          <span>
            {`Last updated time: ${transformDateStringToDisplayDate(post.frontmatter.lastUpdatedTime as string)}`}
          </span>
        </div>
      </article>
    </section>
  )
}
