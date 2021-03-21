import { useState } from 'react';
import usePrevious from './usePrevious';
import useEventCallback from './useEventCallback';

function useControlProp(externalValue, setExternalValue, initialUncontrolledValue) {
  const [isControlled] = useState(externalValue !== undefined);
  const [internalValue, setInternalValue] = useState(initialUncontrolledValue);

  if (process.env.NODE_ENV !== 'production') {
    const wasControlled = usePrevious(externalValue !== undefined); // eslint-disable-line
    if (wasControlled !== undefined && isControlled !== wasControlled) {
      // eslint-disable-next-line no-console
      console.error(
        'useControlProp: Switching between controlled and uncontrolled is not supported',
      );
    }
  }

  const value = isControlled ? externalValue : internalValue;
  const setValue = useEventCallback(newValue => {
    if (setExternalValue) setExternalValue(newValue);
    if (!isControlled) setInternalValue(newValue);
  });

  return [value, setValue];
}

export default useControlProp;
