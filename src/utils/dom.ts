import { formatDomId } from '@/utils/format'

export async function copyToClipboard(text?: string) {
  if (!text) {
    return
  }

  try {
    await navigator.clipboard.writeText(text)
  }
  catch (_) {
    const ta = document.createElement('textarea')
    ta.value = text ?? ''
    ta.style.position = 'absolute'
    ta.style.opacity = '0'
    document.body.appendChild(ta)
    ta.select()
    document.execCommand('copy')
    ta.remove()
  }
}

export function updateHash(hashID: string) {
  document.getElementById(hashID)?.scrollIntoView({
    behavior: 'smooth',
  })

  const hash = `#${formatDomId(hashID)}`

  history.pushState({}, '', `${location.pathname}${hash}`)
  window?.dispatchEvent(
    new HashChangeEvent('hashchange', {
      oldURL: location.hash,
      newURL: hash,
    }),
  )
}
