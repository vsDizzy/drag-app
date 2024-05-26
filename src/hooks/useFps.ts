import { useEffect, useRef } from 'react'

export function useFps() {
  const fpsRef = useRef(performance.now())

  useEffect(() => {
    const now = performance.now()
    const renderTime = now - fpsRef.current
    fpsRef.current = now

    const fps = Math.trunc((1000 / renderTime) * 10) / 10
    document.title = `FPS: ${fps}`
  })
}
