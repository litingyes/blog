import type { MDXComponents } from 'mdx/types'

function HeadingA({ href }: { href: string }) {
  return (
    <a className='post-layout__heading-a absolute top-1/2 ml-[-0.875em] -translate-y-1/2 !no-underline transition-all before:content-["#"] hover:!text-blue-500 hover:!underline' href={href} />
  )
}

export const MdxH1: Required<MDXComponents>['h1'] = ({ children }) => {
  return (
    <h1 id={children?.toString()} className="relative flex w-full flex-wrap items-center gap-2 text-4xl font-bold">
      {children}
      <HeadingA href={`#${children?.toString()}`} />
    </h1>
  )
}

export const MdxH2: Required<MDXComponents>['h2'] = ({ children }) => {
  return (
    <h2 id={children?.toString()} className="relative flex w-full flex-wrap items-center gap-2 text-3xl font-bold">
      {children}
      <HeadingA href={`#${children?.toString()}`} />
    </h2>
  )
}

export const MdxH3: Required<MDXComponents>['h3'] = ({ children }) => {
  return (
    <h3 id={children?.toString()} className="relative flex w-full flex-wrap items-center gap-2 text-2xl font-bold">
      {children}
      <HeadingA href={`#${children?.toString()}`} />
    </h3>
  )
}

export const MdxH4: Required<MDXComponents>['h4'] = ({ children }) => {
  return (
    <h4 id={children?.toString()} className="relative flex w-full flex-wrap items-center gap-2 text-xl font-bold">
      {children}
      <HeadingA href={`#${children?.toString()}`} />
    </h4>
  )
}

export const MdxH5: Required<MDXComponents>['h5'] = ({ children }) => {
  return (
    <h5 id={children?.toString()} className="relative flex w-full flex-wrap items-center gap-2 text-xl font-bold">
      {children}
      <HeadingA href={`#${children?.toString()}`} />
    </h5>
  )
}

export const MdxH6: Required<MDXComponents>['h6'] = ({ children }) => {
  return (
    <h6 id={children?.toString()} className="relative flex w-full flex-wrap items-center gap-2 text-xl font-bold">
      {children}
      <HeadingA href={`#${children?.toString()}`} />
    </h6>
  )
}
