import { useState } from "react";

export default function useControllableState<T>(
  value?: T,
  defaultValue?: T,
  onChange?: (value: T) => void,
) {
  const [innerValue, setInnerValue] = useState(defaultValue);
  const isControllable = value !== undefined;
  const currentVal = isControllable ? value : innerValue;

  const setValue = (val: T) => {
    if (!isControllable) {
      setInnerValue(val);
    }
    onChange?.(val);
  };

  return [currentVal, setValue] as const;
}
