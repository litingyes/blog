import type { MDXComponents } from 'mdx/types'

export const MdxA: Required<MDXComponents>['a'] = ({ children, ...props }) => {
  return (<a {...props}>{children}</a>)
}
