import { facadeDict } from '@/components/dict/experiences/facade';
import SigmateSection from '@/components/projects/sigmate/SigmateSection';
import { SupportedLang } from '@/i18n';
import { createIntlMetadata } from '@/i18n/metadata';
import { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: { lang: SupportedLang };
}): Promise<Metadata> {
  const { DESCRIPTION } = facadeDict[params.lang];
  const description = typeof DESCRIPTION === 'string' ? DESCRIPTION : undefined;

  const metadata = createIntlMetadata(
    {
      title: 'Sigmate - Project Details',
      description,
    },
    {
      title: '시그메이트(Sigmate) - 프로젝트 상세',
    }
  );

  return metadata[params.lang];
}

export default function page({ params }: { params: { lang: SupportedLang } }) {
  const { lang } = params;
  if (!lang) return null;
  return <SigmateSection lang={lang} />;
}
