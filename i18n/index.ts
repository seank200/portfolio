import { xor } from 'lodash';

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

type KeyLike = string | number | symbol;
type DictValue = NonNullable<React.ReactNode>;

const hasSameKeys = (obj1: object, obj2: object) => {
  const k1 = Object.keys(obj1);
  const k2 = Object.keys(obj2);
  const symDiff = xor(k1, k2);
  return symDiff.length === 0;
};

export const createIntlDict = <
  T extends Record<KeyLike, DictValue>,
  K extends keyof T,
  StrictMode extends boolean | undefined
>(
  base: T,
  other: StrictMode extends true
    ? Record<keyof T, DictValue>
    : Record<K, DictValue> = base,
  options: { strict?: StrictMode; base?: SupportedLang } = {}
): Readonly<Record<SupportedLang, Record<keyof T, DictValue>>> => {
  if (options.strict) {
    if (!hasSameKeys(base, other)) {
      throw new Error('createIntlDict: Dict key discrepency');
    }
  }
  if (options.base === 'ko') {
    return Object.freeze({
      en: { ...base, ...other },
      ko: base,
    });
  }
  return Object.freeze({
    en: base,
    ko: { ...base, ...other },
  });
};
