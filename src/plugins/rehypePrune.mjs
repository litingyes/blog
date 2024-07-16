import { visitParents } from 'unist-util-visit-parents'
import { cloneDeep, omit } from 'lodash-es'

/**
 *
 * @type {import('unified').Plugin}
 */
export function rehypePrune() {
  return (tree) => {
    visitParents(
      tree,
      'element',
      /**
       *
       * @type {import('unist-util-visit-parents').Visitor}
       */
      (node, ancestors) => {
        if (!node || !ancestors.length || ancestors.length < 2) {
          return
        }

        switch (node.tagName) {
          case 'img': {
            const parent = ancestors[ancestors.length - 1]
            if (parent.tagName !== 'p') {
              return
            }

            const root = ancestors[ancestors.length - 2]
            const parentIndex = root.children.findIndex(item => item === parent)

            const imgIndex = parent.children.findIndex(item => item.tagName = 'img')
            const nodes = [
              cloneNodeWithoutChildren(parent),
              node,
              cloneNodeWithoutChildren(parent),
            ]
            nodes[0].children = parent.children.slice(0, imgIndex)
            nodes[2].children = parent.children.slice(imgIndex + 1)

            root.children.splice(parentIndex, 1, ...nodes)
          }
        }
      },
    )
  }
}

/**
 * @typeof {import('unist').Node} Node
 *
 * @param {Node} node
 */
function cloneNodeWithoutChildren(node) {
  return cloneDeep(omit(node, ['children']))
}
