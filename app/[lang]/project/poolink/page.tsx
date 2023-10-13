import Footer from '@/components/Footer';
import Nav from '@/components/Nav';
import PoolinkSection from '@/components/projects/poolink/PoolinkSection';
import { SupportedLang } from '@/i18n';

export default function page({ params }: { params: { lang: SupportedLang } }) {
  const { lang } = params;
  if (!lang) return null;
  return (
    <>
      <Nav lang={lang} />
      <PoolinkSection lang={lang} />
      <Footer lang={lang} />
    </>
  );
}
