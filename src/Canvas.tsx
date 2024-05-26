import { PropsWithChildren } from 'react'

export function Canvas({
  width,
  height,
  children,
}: PropsWithChildren<{ width: number; height: number }>) {
  return (
    <svg id="canvas" width={width} height={height}>
      {children}
    </svg>
  )
}
