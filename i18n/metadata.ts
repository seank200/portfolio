import type { SupportedLang } from '.';
import type { Metadata } from 'next';

type MetadataValue = {
  title?: string;
  description?: string;
};

type MetadataOptions = {
  noTitleSuffix?: boolean;
};

export const createIntlMetadata = (
  primary: MetadataValue,
  secondary?: Partial<MetadataValue>,
  options?: MetadataOptions
): Record<SupportedLang, Metadata> => {
  const en = primary;
  const ko = { ...primary, ...secondary };

  if (!options?.noTitleSuffix) {
    en.title = en.title ? `${en.title} | Youngwoo Kim` : 'Youngwoo Kim';
    ko.title = ko.title ? `${ko.title} | 김영우` : '김영우';
  }

  return {
    en: {
      title: en.title,
      description: en.description,
    },
    ko: {
      title: ko.title,
      description: ko.description,
    },
  };
};
