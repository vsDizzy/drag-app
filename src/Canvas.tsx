import { PropsWithChildren } from 'react'

export function Canvas({
  width,
  height,
  children,
}: PropsWithChildren<{ width: number; height: number }>) {
  return (
    <svg
      id="canvas"
      width={width}
      height={height}
      onPointerDown={(e) => {
        const el = (e.target as HTMLElement).closest<HTMLElement>('svg')
        if (!el) {
          return
        }

        el.setPointerCapture(e.pointerId)

        const originX = e.clientX - Number(el.getAttribute('x'))
        const originY = e.clientY - Number(el.getAttribute('y'))

        let frameId: number | null = null

        el.onpointermove = (e) => {
          frameId && cancelAnimationFrame(frameId)
          frameId = requestAnimationFrame(() => {
            el.setAttribute('x', String(e.clientX - originX))
            el.setAttribute('y', String(e.clientY - originY))
          })
        }
      }}
      onPointerUp={(e) => {
        const el = e.target as HTMLElement
        el.releasePointerCapture(e.pointerId)

        el.onpointermove = null
      }}
    >
      {children}
    </svg>
  )
}
