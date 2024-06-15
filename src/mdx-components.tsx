import type { MDXComponents } from 'mdx/types'

console.warn('test')

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
  }
}
