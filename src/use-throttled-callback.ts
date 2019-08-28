// Vendor
import { useCallback, useRef, useEffect } from "react";

/**
 * Throttle the `callback` execution until the `milliseconds` pass.
 *
 * @param callback {function(e: any) => any} The callback to throttle
 * @param milliseconds {number} The milliseconds of throttling
 * @returns The throttled callback
 */
function useThrottledCallback(
  callback: (e: any) => any,
  milliseconds: number
): (e: any) => any {
  const timeoutId = useRef<number>(0);
  const callbackAlreadyCalled = useRef<boolean>(false);
  const memoizedCallback = useCallback(
    (e: any) => {
      callbackAlreadyCalled.current = true;
      callback(e);
    },
    [callback]
  );

  const throttledCallback = useCallback(
    (e: any) => {
      if (!callbackAlreadyCalled.current) {
        memoizedCallback(e);

        timeoutId.current = window.setTimeout(() => {
          callbackAlreadyCalled.current = false;
        }, milliseconds);
      }
    },
    [milliseconds]
  );

  useEffect(() => {
    return () => {
      clearTimeout(timeoutId.current);
    };
  });

  return throttledCallback;
}

export default useThrottledCallback;
