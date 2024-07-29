import { useEffect, useState } from 'react'

export function useMountedStatus() {
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => {
    setIsMounted(true)
  }, [])

  return isMounted
}
