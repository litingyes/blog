import type { MDXComponents } from 'mdx/types'
import { Button, Link } from '@nextui-org/react'
import { AnchorLinkIcon } from '@/components/icons/anchor'

export const MdxH1: Required<MDXComponents>['h1'] = ({ children }) => {
  return (
    <h1 className="flex w-full flex-wrap items-center gap-2 text-4xl font-bold">
      {children}
      <Button
        as={Link}
        href={`#${children?.toString()}`}
        className="!size-10 min-w-10 text-[2.25rem]"
        variant="light"
        color="primary"
        radius="sm"
        isIconOnly
      >
        <AnchorLinkIcon />
      </Button>
    </h1>
  )
}

export const MdxH2: Required<MDXComponents>['h2'] = ({ children }) => {
  return (
    <h2 className="flex w-full flex-wrap items-center gap-2 text-3xl font-bold">
      {children}
      <Button
        as={Link}
        href={`#${children?.toString()}`}
        className="!size-9 min-w-9 text-[1.875rem]"
        variant="light"
        color="primary"
        radius="sm"
        isIconOnly
      >
        <AnchorLinkIcon />
      </Button>
    </h2>
  )
}

export const MdxH3: Required<MDXComponents>['h3'] = ({ children }) => {
  return (
    <h3 className="flex w-full flex-wrap items-center gap-2 text-2xl font-bold">
      {children}
      <Button
        as={Link}
        href={`#${children?.toString()}`}
        className="!size-8 min-w-8 text-[1.5rem]"
        variant="light"
        color="primary"
        radius="sm"
        isIconOnly
      >
        <AnchorLinkIcon />
      </Button>
    </h3>
  )
}

export const MdxH4: Required<MDXComponents>['h4'] = ({ children }) => {
  return (
    <h4 className="flex w-full flex-wrap items-center gap-2 text-xl font-bold">
      {children}
      <Button
        as={Link}
        href={`#${children?.toString()}`}
        className="!size-7 min-w-7 text-[1.25rem]"
        variant="light"
        color="primary"
        radius="sm"
        isIconOnly
      >
        <AnchorLinkIcon />
      </Button>
    </h4>
  )
}

export const MdxH5: Required<MDXComponents>['h5'] = ({ children }) => {
  return (
    <h5 className="flex w-full flex-wrap items-center gap-2 text-xl font-bold">
      {children}
      <Button
        as={Link}
        href={`#${children?.toString()}`}
        className="!size-7 min-w-7 text-[1.25rem]"
        variant="light"
        color="primary"
        radius="sm"
        isIconOnly
      >
        <AnchorLinkIcon />
      </Button>
    </h5>
  )
}

export const MdxH6: Required<MDXComponents>['h6'] = ({ children }) => {
  return (
    <h6 className="flex w-full flex-wrap items-center gap-2 text-xl font-bold">
      {children}
      <Button
        as={Link}
        href={`#${children?.toString()}`}
        className="!size-7 min-w-7 text-[1.25rem]"
        variant="light"
        color="primary"
        radius="sm"
        isIconOnly
      >
        <AnchorLinkIcon />
      </Button>
    </h6>
  )
}
