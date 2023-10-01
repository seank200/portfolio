import SigmateSection from '@/components/projects/SigmateSection';
import { SupportedLang } from '@/i18n';

export default function page({ params }: { params: { lang: SupportedLang } }) {
  const { lang } = params;
  if (!lang) return null;
  return <SigmateSection lang={lang} />;
}
