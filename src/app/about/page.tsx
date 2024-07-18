import { Avatar, Chip } from '@nextui-org/react'
import Link from 'next/link'
import { IconWork } from '@/components/icons/work'
import { IconZoom } from '@/components/icons/zoom'
import { transformDateStringToDisplayDate } from '@/utils/date'
import { getAllMdxData } from '@/utils/mdx'
import { IconDateRange } from '@/components/icons/dateRange'
import { IconGithub } from '@/components/icons/github'

const SOCIALS = [
  {
    label: 'Github',
    link: 'https://github.com/litingyes',
    icon: <IconGithub />,
  },
]

const PRESENT = 'present'
const WORKS = [
  {
    company: 'ZOOM',
    icon: <IconZoom />,
    onboarding: transformDateStringToDisplayDate('2023-07-03'),
    resignation: PRESENT,
    position: 'R & D Engineer',
  },
]

export default async function AboutPage() {
  const posts = await getAllMdxData()

  return (
    <div className="px-8 pt-16">
      <div className="grid grid-cols-2 gap-8">
        <div>
          <div>
            <Avatar src="/avatar.jpeg" radius="lg" className="!size-36 text-large hover:animate-spin" name="litingyes" />
            <section className="mt-8 text-xl text-slate-600">
              <p>Hi! I'm Luz Liu, a software engineer based in China.</p>
            </section>
            <ul className="mt-8">
              {SOCIALS.map(item => (
                <li key={item.label}>
                  <Link href={item.link} target="_blank" className="flex cursor-pointer items-center gap-2  text-slate-600">
                    <i className="text-2xl">{item.icon}</i>
                    {`follow on ${item.label}`}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-16 rounded-xl border border-solid border-gray-200 p-4">
            <div className="flex items-center gap-2 font-semibold text-slate-600">
              <IconWork />
              <span>Work experience</span>
            </div>
            <ul className="mt-4">
              {WORKS.map(work => (
                <li className="flex items-center gap-4" key={work.onboarding}>
                  <i className="text-4xl">
                    {work.icon}
                  </i>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-base font-semibold text-slate-950">{work.company}</span>
                      <span className="flex items-center gap-2 text-sm text-slate-500">
                        <span>{work.onboarding}</span>
                        <span>-</span>
                        <span>{work.resignation}</span>
                      </span>
                    </div>
                    <div className="text-sm text-slate-600">{work.position}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
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

      </div>
    </div>
  )
}
