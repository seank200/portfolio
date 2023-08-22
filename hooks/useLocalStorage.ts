import { Dispatch, SetStateAction, useEffect, useState } from 'react';

const PREFIX = 'ywk-';

export default function useLocalStorage<T extends Object | null | undefined>(
  key: string,
  initialValue: T | (() => T)
): [T, Dispatch<SetStateAction<T>>] {
  const prefixedKey = `${PREFIX}${key}`;

  const [loaded, setLoaded] = useState<boolean>(false);
  const [value, setValue] = useState<T>(() =>
    typeof initialValue === 'function' ? initialValue() : initialValue
  );

  useEffect(() => {
    const ls = window.localStorage.getItem(prefixedKey);
    if (ls) setValue(JSON.parse(ls));
    setLoaded(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (loaded) window.localStorage.setItem(prefixedKey, JSON.stringify(value));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loaded, value]);

  return [value, setValue];
}
