import { Canvas } from './Canvas'
import { Rect } from './Rect'
import { generateRandomRects, rnd } from './generateRandomRects'

function App() {
  const [width, height] = [1000, 800]

  const rects = generateRandomRects(100, width, height)

  return (
    <Canvas width={width} height={height}>
      {rects.map((r, i) => (
        <Rect key={i} rect={r} color={`hsl(${rnd(360)}, 50%, 50%)`} />
      ))}
    </Canvas>
  )
}

export default App
