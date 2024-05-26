import { useRef, useState } from 'react'
import { useAnimationFrame } from './hooks/useAnimationFrame'
import { useFps } from './hooks/useFps'

export function Rect({ rect, color }: { rect: DOMRect; color: string }) {
  const [pos, setPos] = useAnimationFrame(useState({ x: rect.x, y: rect.y }))
  const originRef = useRef({ x: 0, y: 0 })

  useFps()

  return (
    <svg
      className="part"
      x={pos.x}
      y={pos.y}
      width={rect.width}
      height={rect.height}
      onPointerDown={(e) => {
        const el = e.target as HTMLElement
        el.setPointerCapture(e.pointerId)

        originRef.current.x = e.clientX - pos.x
        originRef.current.y = e.clientY - pos.y
      }}
      onPointerUp={(e) => {
        const el = e.target as HTMLElement
        el.releasePointerCapture(e.pointerId)
      }}
      onPointerMove={(e) => {
        const el = e.target as HTMLElement
        if (!el.hasPointerCapture(e.pointerId)) {
          return
        }

        setPos({
          x: e.clientX - originRef.current.x,
          y: e.clientY - originRef.current.y,
        })
      }}
    >
      <rect width="100%" height="100%" fill={color} />
    </svg>
  )
}
