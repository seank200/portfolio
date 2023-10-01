import PoolinkSection from '@/components/projects/PoolinkSection';
import { SupportedLang } from '@/i18n';

export default function page({ params }: { params: { lang: SupportedLang } }) {
  const { lang } = params;
  if (!lang) return null;
  return <PoolinkSection lang={lang} />;
}
