export function generateRandomRects(
  quantity: number,
  canvasWidth: number,
  canvasHeight: number
) {
  return [...genRandomRects(canvasWidth, canvasHeight).take(quantity)]
}

function* genRandomRects(camvasWidth: number, canvasHeight: number) {
  while (true) {
    const [x, width] = getRandomOffsetAndWidthWithLimit(camvasWidth, 8, 128)
    const [y, height] = getRandomOffsetAndWidthWithLimit(canvasHeight, 8, 128)
    yield new DOMRect(x, y, width, height)
  }
}

function getRandomOffsetAndWidthWithLimit(
  canvasMax: number,
  min: number,
  max: number
) {
  while (true) {
    const res = getRandomOffsetAndWidth(canvasMax)
    if (res[1] >= min && res[1] <= max) {
      return res
    }
  }
}

function getRandomOffsetAndWidth(canvasMax: number) {
  const points = [rnd(canvasMax), rnd(canvasMax)]
  const min = Math.min(...points)
  const max = Math.max(...points)

  return [min, max - min] as const
}

export function rnd(max: number) {
  return Math.trunc(Math.random() * max)
}
