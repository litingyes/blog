import { useEffect, useState } from 'react'
import { formatDomId } from '@/utils/format'

export function useHash() {
  const [hash, setHash] = useState(() => window?.location.hash)

  const updateHash = (hashId: string) => {
    document.getElementById(hashId)?.scrollIntoView({
      behavior: 'smooth',
    })

    const hash = `#${formatDomId(hashId)}`

    history.pushState({}, '', `${window?.location.pathname}${hash}`)
    window?.dispatchEvent(
      new HashChangeEvent('hashchange', {
        oldURL: location.hash,
        newURL: hash,
      }),
    )
  }

  const onHashChange = () => {
    setHash(window?.location.hash)
  }

  useEffect(() => {
    window?.addEventListener('hashchange', onHashChange)

    return () => {
      window?.removeEventListener('hashchange', onHashChange)
    }
  })

  return {
    hash,
    updateHash,
  }
}
