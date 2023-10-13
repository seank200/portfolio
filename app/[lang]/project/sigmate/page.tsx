import Footer from '@/components/Footer';
import Nav from '@/components/Nav';
import SigmateSection from '@/components/projects/sigmate/SigmateSection';
import { SupportedLang } from '@/i18n';

export default function page({ params }: { params: { lang: SupportedLang } }) {
  const { lang } = params;
  if (!lang) return null;
  return (
    <>
      <Nav lang={lang} />
      <SigmateSection lang={lang} />
      <Footer lang={lang} />
    </>
  );
}
