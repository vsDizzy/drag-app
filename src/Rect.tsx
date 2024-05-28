export function Rect({ rect, color }: { rect: DOMRect; color: string }) {
  return (
    <svg x={rect.x} y={rect.y} width={rect.width} height={rect.height}>
      <rect width="100%" height="100%" fill={color} />
    </svg>
  )
}
