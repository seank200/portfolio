'use client';

import useSwitchLang from '@/hooks/useSwitchLang';
import { useEffect, useState } from 'react';
import Container from '@components/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeAsia, faXmark } from '@fortawesome/free-solid-svg-icons';
import { SupportedLang, createTranslator } from '@/i18n';
import Link from 'next/link';
import useLocalStorage from '@/hooks/useLocalStorage';

export default function LangSuggestBanner({ lang }: { lang: SupportedLang }) {
  const t = createTranslator(lang);

  // Suggest language switch
  const [showLangSuggest, setShowLangSuggest] = useState<boolean | null>(null);
  const [neverShowLangSuggest, setNeverShowLangSuggest] = useLocalStorage<
    boolean | null
  >('never-show-lang-suggest', false);
  const otherLangUrl = useSwitchLang(lang);

  useEffect(() => {
    // If user is trying to close, don't run
    if (showLangSuggest === false) return;

    if (neverShowLangSuggest) {
      setShowLangSuggest(false);
    } else {
      // Display language suggest banner
      const deviceLocale = window.navigator?.language;
      const deviceLang: SupportedLang =
        deviceLocale === 'ko-KR' || deviceLocale === 'ko' ? 'ko' : 'en';

      if (deviceLang !== lang) {
        setShowLangSuggest(true);
      }
    }

    // Disable ESLINT:
    // Dependency array intentionally does not include dependency "lang"
    // User manually changing languages should not trigger this effect again
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showLangSuggest, neverShowLangSuggest]);

  return (
    <div
      className={`${
        showLangSuggest ? '' : 'hidden'
      } py-2 bg-primary text-primary-on text-sm`}
    >
      <Container className="flex justify-between items-center">
        <FontAwesomeIcon icon={faGlobeAsia} className="h-em mr-2" />
        <div className="grow px-2">
          <p className="hidden md:inline-block">
            {t(
              '제 포트폴리오는 한국어로도 제공됩니다.',
              'My portfolio is also available in English.'
            )}
          </p>
          <Link
            href={otherLangUrl}
            className="md:ml-4 inline-block font-semibold underline"
          >
            {t('한국어 포트폴리오 보기', 'View English version')}
          </Link>
        </div>
        <div className="flex items-center">
          <button
            className="text-xs hover:underline"
            onClick={() => {
              setShowLangSuggest(false);
              setNeverShowLangSuggest(true);
            }}
          >
            {t('다시 묻지 않기', 'Never ask again')}
          </button>
          <button onClick={() => setShowLangSuggest(false)}>
            <FontAwesomeIcon icon={faXmark} className="ml-4 h-em" />
          </button>
        </div>
      </Container>
    </div>
  );
}
