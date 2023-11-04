import { Dispatch, SetStateAction, useEffect, useState } from "react";

const PREFIX = "ywk-";

export default function useLocalStorage<
  T extends string | number | boolean | object | null | undefined,
>(key: string, initialValue: T): [T, Dispatch<SetStateAction<T>>] {
  const prefixedKey = PREFIX + key;

  const [loaded, setLoaded] = useState<boolean>(false);
  const [value, setValue] = useState<T>(initialValue);

  useEffect(() => {
    if (loaded) return;
    const ls = window.localStorage.getItem(prefixedKey);
    if (ls) setValue(JSON.parse(ls));
    setLoaded(true);
  }, [loaded, prefixedKey]);

  useEffect(() => {
    if (!loaded) return;
    window.localStorage.setItem(prefixedKey, JSON.stringify(value));
  }, [loaded, prefixedKey, value]);

  return [value, setValue];
}
