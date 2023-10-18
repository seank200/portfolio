import { poolinkDict } from '@/components/dict/experiences/poolink';
import PoolinkSection from '@/components/projects/poolink/PoolinkSection';
import { SupportedLang } from '@/i18n';
import { createIntlMetadata } from '@/i18n/metadata';
import { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: { lang: SupportedLang };
}): Promise<Metadata> {
  const { DESCRIPTION } = poolinkDict[params.lang];
  const description = typeof DESCRIPTION === 'string' ? DESCRIPTION : undefined;

  const metadata = createIntlMetadata(
    {
      title: 'Poolink - Project Details',
      description,
    },
    {
      title: '풀링(Poolink) - 프로젝트 상세',
    }
  );

  return metadata[params.lang];
}

export default function page({ params }: { params: { lang: SupportedLang } }) {
  const { lang } = params;
  if (!lang) return null;
  return <PoolinkSection lang={lang} />;
}
