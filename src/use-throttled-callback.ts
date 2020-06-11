import { useCallback, useRef } from 'react'

/**
 * Permits to generate a throttled version of the `callback` passed as parameter.
 *
 * @param callback The callback to throttle
 * @param wait The milliseconds of throttling
 * @param dependencies Dependencies of the throttled callback
 * @returns The throttled callback and `flush` function with which can be resetted the inner timer.
 */
export const useThrottledCallback = <
  P extends any[],
  R extends unknown | Promise<unknown>,
  D extends unknown
>(
  callback: (...args: P) => R | Promise<R>, // useCallback
  wait: number,
  dependencies: D[],
) => {
  const lastTimeCalled = useRef<number>(0)

  const canBeCalled = useCallback(() => {
    return Date.now() - lastTimeCalled.current > wait
  }, [wait])

  const memoizedCallback = useCallback((...args: P) => {
    lastTimeCalled.current = Date.now()

    return callback(...args)
  }, dependencies)

  const result = useCallback(
    (...args: P) => {
      if (!canBeCalled()) {
        return null
      }

      return memoizedCallback(...args)
    },
    [canBeCalled, memoizedCallback, wait],
  )

  const flush = useCallback(() => {
    lastTimeCalled.current = 0
  }, [])

  return { flush, result }
}
