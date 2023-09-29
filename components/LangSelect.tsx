'use client';

import Link from 'next/link';
import { SupportedLang, createTranslator } from '@/i18n';
import useSwitchLang from '@/hooks/useSwitchLang';

export default function LangSelect({ lang }: { lang: SupportedLang }) {
  const t = createTranslator(lang);
  const href = useSwitchLang(lang);

  return (
    <Link
      href={href}
      title={t('Switch Language', '언어 변경')}
      className="w-10 h-10 rounded-full py-2 flex justify-center items-center text-lg text-center bg-background-on/10 hover:bg-background-on/20"
    >
      {t('🇺🇸', '🇰🇷')}
    </Link>
  );
}
