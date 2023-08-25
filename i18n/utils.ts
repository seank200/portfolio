import xor from 'lodash/xor';

export type SupportedLang = 'kr' | 'en';
export const SUPPORTED_LANGS: SupportedLang[] = ['en', 'kr'];
export const DEFAULT_LANG = SUPPORTED_LANGS[0];

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
  if (options.base === 'kr') {
    return Object.freeze({
      en: { ...base, ...other },
      kr: base,
    });
  }
  return Object.freeze({
    en: base,
    kr: { ...base, ...other },
  });
};
