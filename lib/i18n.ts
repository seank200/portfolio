import { type Metadata } from "next";
import { type ReactNode } from "react";
import { splitPath } from "./path";

export type MyLang = "en" | "ko";
export type LangProps = { lang: MyLang };

export const LANG_EN = "en";
export const LANG_KO = "ko";

export const myLangs: MyLang[] = [LANG_EN, LANG_KO];
export const LANG_DEFAULT = myLangs[0];

/** Returns path for navigation while preserving current language */
export function navpath(pathname: string, lang?: string) {
  const pathparts = splitPath(pathname);
  if (!myLangs.includes(pathname[0] as MyLang)) {
    pathparts.splice(0, 0, lang || LANG_DEFAULT);
  }
  return "/" + pathparts.join("/");
}

export function isMyLang(text: string) {
  return myLangs.includes(text as MyLang);
}

type KeyLike = string | number | symbol;

export function createIntlDict<
  T extends Record<KeyLike, V>,
  V extends ReactNode = ReactNode,
>(en: T, ko: { [K in keyof Partial<T>]: V }): Record<MyLang, T> {
  return {
    en: en,
    ko: { ...en, ...ko },
  };
}

export function createIntlMeta<M extends Metadata>(
  en: M,
  ko: { [K in keyof M]: K extends keyof Metadata ? Metadata[K] : M[K] },
): Record<MyLang, Metadata> {
  return { en, ko };
}

export function translator(lang: MyLang) {
  return (en: string, ko: string) => {
    return lang === "ko" ? ko : en;
  };
}
