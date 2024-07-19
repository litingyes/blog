import { Chip } from '@nextui-org/react'
import Link from 'next/link'
import { getAllMdxData } from '@/utils/mdx'
import { transformDateStringToDisplayDate } from '@/utils/date'
import { IconDateRange } from '@/components/icons/dateRange'

export default async function PostPage() {
  const posts = await getAllMdxData()

  return (
    <div className="mx-auto max-w-[800px] pt-10">
      <ul className="flex flex-col gap-10 border-l-1 border-solid border-gray-300">
        {posts.map(post => (
          <li className="flex" key={post.slug}>
            <div className="w-56 pl-4">
              <div className="flex items-center gap-1 text-slate-400">
                <i className="text-xl">
                  <IconDateRange />
                </i>
                <span>{transformDateStringToDisplayDate(post.frontmatter.lastUpdatedTime as string)}</span>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-slate-800 transition-colors hover:text-blue-600">
                <Link href={`/posts/${post.slug}`}>{post.frontmatter.title as string}</Link>
              </h2>
              <p className="mt-1 text-base text-slate-600">{post.frontmatter.description as string}</p>
              <div className="mt-2">
                { (post.frontmatter.tags as string[])?.map(tag => (<Chip key={tag} size="sm" radius="sm">{tag}</Chip>))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}