import type { MDXComponents } from 'mdx/types'
import './pre.scss'

export const MdxPre: Required<MDXComponents>['pre'] = ({ children, ...props }) => {
  return <pre {...props}>{children}</pre>
}
