import { useState, useEffect } from 'react';

export default function useLocale(fallback: string = 'en-US') {
  const [systemLocale, setSystemLocale] = useState<string>();
  const [userLocale, setUserLocale] = useState<string>();

  useEffect(() => {
    const n = window.navigator;
    const detected = n.languages?.length ? n.languages[0] : n.language;
    setSystemLocale(detected || fallback);
    setUserLocale(detected || fallback);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [userLocale, systemLocale];
}
