import { useEffect, useRef } from 'react'

export const useAnimationRequest = (callback, time, dependsOn = undefined) => {
  const requestRef = useRef()
  const previousTimeRef = useRef()

  const animate = (timestamp) => {
    if (previousTimeRef.current === undefined) {
      previousTimeRef.current = timestamp
    }
    const deltaTime = timestamp - previousTimeRef.current
    if (deltaTime >= time) {
      callback(timestamp, deltaTime)
      previousTimeRef.current = timestamp
    }

    requestRef.current = requestAnimationFrame(animate)
  }

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(requestRef.current)
  }, dependsOn)
}
