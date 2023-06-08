import { derived, writable } from "svelte/store";
import { EN_US, PT_BR } from './translations'

export const currentLocale = writable<Locales>("English");
const locales = { English: EN_US, Portuguese: PT_BR };

export type Locales = keyof typeof locales
export type LocaleKeys = keyof typeof locales[Locales]
export const Locales = Object.keys(locales) as Locales[]
export const setLocale = (key: Locales) => currentLocale.set(key)

function translate(locale: Locales, key: LocaleKeys, vars: Record<string, LocaleKeys>) {

  let text = locales[locale][key]

  Object.keys(vars).forEach((key) => {
    const regex = new RegExp(`{{${key}}}`, "g");
    text = text.replace(regex, vars[key]);
  });

  return text;
}

export const t = derived(currentLocale, ($locale) => (key: LocaleKeys, vars = {}) =>
  translate($locale, key, vars)
);

