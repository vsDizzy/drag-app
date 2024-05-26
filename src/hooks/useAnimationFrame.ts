import { useRef } from 'react'

export function useAnimationFrame<T>([val, setVal]: [T, (val: T) => void]) {
  const reqHandleRef = useRef<number | null>(null)
  const lastValueRef = useRef(val)

  return [
    val,
    (newVal: T) => {
      lastValueRef.current = newVal

      if (!reqHandleRef.current) {
        reqHandleRef.current = requestAnimationFrame(() => {
          reqHandleRef.current = null

          setVal(lastValueRef.current)
        })
      }
    },
  ] as const
}
