import Script from 'next/script'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Highlight() {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url, { }) => {
      if (typeof hljs !== "undefined") {
        hljs.highlightAll();
      }
    }

    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [])

  return (
    <>
      <Script
        id="highlightJs"
        src="/js/highlight.min.js"onLoad={() => {
          hljs.highlightAll();
        }}
      />
    </>
  )
}