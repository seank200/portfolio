export type SupportedLanguage = 'kr' | 'en';
export type SameKeys<
  T extends Object,
  V extends React.ReactNode = React.ReactNode
> = Readonly<Record<keyof T, V>>;
export type IntlContents<V extends React.ReactNode = React.ReactNode> = Record<
  SupportedLanguage,
  Record<string, V>
>;
