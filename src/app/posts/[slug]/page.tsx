import { getAllMdxData } from '@/utils/mdx'
import './page.scss'
import { IconWordCount } from '@/components/icons/wordCount'
import { IconClockOutline } from '@/components/icons/clock'
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
      <div className="prose prose-slate w-full max-w-4xl px-6 dark:prose-invert">
        <div className="flex items-center gap-3 text-sm text-slate-500">
          <div className="inline-flex items-center gap-1">
            <i className="text-base"><IconWordCount /></i>
            {`${Math.round(post.stats.words)} words`}
          </div>
          <div className="size-1 rounded-full bg-gray-500" />
          <div className="inline-flex items-center gap-1">
            <i className="text-base"><IconClockOutline /></i>
            {`${Math.round(post.stats.minutes)} min`}
          </div>
        </div>
        <article className="mt-4">
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
      </div>

    </section>
  )
}
