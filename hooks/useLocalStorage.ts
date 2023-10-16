'use client';

import { Dispatch, SetStateAction, useEffect, useState } from 'react';

const PREFIX = 'yw-';

export default function useLocalStorage<
  T extends string | number | boolean | object | null | undefined
>(key: string, initialValue: T | (() => T)): [T, Dispatch<SetStateAction<T>>] {
  const pKey = PREFIX + key;

  const [init, setInit] = useState(false);

  const [value, setValue] = useState<T>(() => {
    return typeof initialValue === 'function' ? initialValue() : initialValue;
  });

  useEffect(() => {
    const ls = window?.localStorage.getItem(pKey);
    if (ls !== null && ls !== undefined) {
      setValue(JSON.parse(ls));
    }
    setInit(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (init) localStorage.setItem(pKey, JSON.stringify(value));
  }, [pKey, value, init]);

  return [value, setValue];
}
