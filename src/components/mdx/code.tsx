import type { MDXComponents } from 'mdx/types'
import './code.scss'

export const MdxCode: Required<MDXComponents>['code'] = ({ children, ...props }) => {
  return (<code className="block" {...props}>{children}</code>)
}
