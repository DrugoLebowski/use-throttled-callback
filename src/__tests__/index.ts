import { renderHook, act } from '@testing-library/react-hooks'
import { useThrottledCallback } from '..'

const wait = (time: number) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, time)
  })

describe('useThrottledCallback', () => {
  it('throttles the callback', () => {
    const callback = jest.fn()

    const {
      result: {
        current: { result: throttledCallback },
      },
    } = renderHook(() => useThrottledCallback(callback, 1000, []))

    act(() => {
      throttledCallback()

      throttledCallback()
    })

    expect(callback).toHaveBeenCalledTimes(1)
  })

  it('calls correctly two times the callback without throttling it after timeout ends', async () => {
    const callback = jest.fn()

    const {
      result: {
        current: { result: throttledCallback },
      },
    } = renderHook(() => useThrottledCallback(callback, 1000, []))

    act(() => {
      throttledCallback()
    })

    await wait(1000)

    act(() => {
      throttledCallback()
    })

    expect(callback).toHaveBeenCalledTimes(2)
  })

  it('calls correctly two times the callback after flushing timeout', () => {
    const callback = jest.fn()

    const {
      result: {
        current: { flush, result: throttledCallback },
      },
    } = renderHook(() => useThrottledCallback(callback, 1000, []))

    act(() => {
      throttledCallback()

      flush()

      throttledCallback()

      throttledCallback()
    })

    expect(callback).toHaveBeenCalledTimes(2)
  })
})
