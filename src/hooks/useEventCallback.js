import { useCallback, useLayoutEffect, useRef } from 'react';

function useEventCallback(callback) {
  const ref = useRef(() => {
    throw new Error('Cannot call an event handler while rendering.');
  });

  useLayoutEffect(() => {
    ref.current = callback;
  });

  return useCallback((...argz) => {
    const fn = ref.current;
    return fn(...argz);
  }, []);
}

export default useEventCallback;
