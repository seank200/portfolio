export type SupportedLang = 'en' | 'ko';

export const SUPPORTED_LANGS = ['en', 'ko'];

export const DEFAULT_LANG = SUPPORTED_LANGS[0];

export const createTranslator = (lang: string) => {
  if (!SUPPORTED_LANGS.includes(lang)) {
    throw new Error(`Translator: Unsupported langugae "${lang}"`);
  }

  return (en: string, ko?: string) => {
    return lang === 'ko' ? ko || en : en;
  };
};
