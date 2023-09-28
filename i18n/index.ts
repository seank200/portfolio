import { xor } from 'lodash';
import { DateTime } from 'luxon';

export type SupportedLang = 'en' | 'ko';
type TimePrecisionOption = 'year' | 'month' | 'day';

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
    ? Record<keyof T, T[keyof T]>
    : Record<K, T[K]> = base,
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

export function formatTime(
  lang: SupportedLang,
  time: Date | DateTime | null,
  options: { precision?: TimePrecisionOption } = {}
) {
  if (!time) return lang === 'ko' ? '현재' : 'Current';
  const { precision = 'month' } = options;
  const opts: Intl.DateTimeFormatOptions = {};
  switch (precision) {
    case 'day':
      opts.day = 'numeric';
    // eslint-disable-next-line no-fallthrough
    case 'month':
      opts.month = 'short';
    // eslint-disable-next-line no-fallthrough
    case 'year':
      opts.year = 'numeric';
      break;
  }
  const locale = lang === 'ko' ? 'ko-KR' : 'en-US';
  const dtfmt = new Intl.DateTimeFormat(locale, opts);
  return dtfmt.format(time instanceof DateTime ? time.toJSDate() : time);
}

export function formatTimePeriod(
  lang: SupportedLang,
  startedAt: Date | DateTime,
  endedAt: Date | DateTime | null | undefined = null,
  options: { precision?: TimePrecisionOption } = {}
) {
  const { precision = 'month' } = options;
  const sep = lang === 'ko' ? '~' : '-';
  const opts: Intl.DateTimeFormatOptions = {};
  switch (precision) {
    case 'day':
      opts.day = 'numeric';
    // eslint-disable-next-line no-fallthrough
    case 'month':
      opts.month = 'short';
    // eslint-disable-next-line no-fallthrough
    case 'year':
      opts.year = 'numeric';
      break;
  }
  const locale = lang === 'ko' ? 'ko-KR' : 'en-US';
  const current = lang === 'ko' ? '현재' : 'Current';
  const dtfmt = new Intl.DateTimeFormat(locale, opts);
  const startedAtDate =
    startedAt instanceof Date ? startedAt : startedAt.toJSDate();
  const endedAtDate = endedAt instanceof Date ? endedAt : endedAt?.toJSDate();
  const fStartedAt = dtfmt.format(startedAtDate);
  const fSep = endedAt !== undefined ? ` ${sep} ` : '';
  const fEndedAt = endedAt
    ? dtfmt.format(endedAtDate)
    : endedAt === null
    ? current
    : '';
  return fStartedAt + fSep + fEndedAt;
}
