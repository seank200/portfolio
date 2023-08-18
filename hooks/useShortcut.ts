import { useEffect } from 'react';

export default function useShortcut(
  keyCode: string,
  callback: (ev?: KeyboardEvent) => any
) {
  useEffect(() => {
    const _callback = (e: KeyboardEvent) => {
      if (e.code == keyCode) callback(e);
    };
    window.addEventListener('keydown', _callback);
    return () => {
      window.removeEventListener('keydown', _callback);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
