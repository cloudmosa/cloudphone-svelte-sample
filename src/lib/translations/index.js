import { dev } from '$app/environment';
import i18n from 'sveltekit-i18n';

export const getLanguageName = (contextLanguage, languageCode) => {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames
  return new Intl.DisplayNames([contextLanguage], {
    type: 'language'
  }).of(languageCode);
};

/** @type {import('sveltekit-i18n').Config} */
const config = ({
  log: {
    level: dev ? 'warn' : 'error',
  },
  translations: {
    en: {
      en: getLanguageName('en-US', 'en'),
      es: getLanguageName('en-US', 'es-MX'),
    },
    es: {
      en: getLanguageName('es-MX', 'en-US'),
      es: getLanguageName('es-MX', 'es-MX'),
    },
  },
  loaders: [
    {
      locale: 'en',
      key: 'common',
      loader: async () => (
        await import('./en/common.json')
      ).default,
    },
    {
      locale: 'es',
      key: 'common',
      loader: async () => (
        await import('./es/common.json')
      ).default,
    },
    {
      locale: 'en',
      key: 'home',
      loader: async () => (
        await import('./en/home.json')
      ).default,
    },
    {
      locale: 'en',
      key: 'about',
      loader: async () => (
        await import('./en/about.json')
      ).default,
    },
    {
      locale: 'es',
      key: 'home',
      loader: async () => (
        await import('./es/home.json')
      ).default,
    },
    {
      locale: 'es',
      key: 'about',
      loader: async () => (
        await import('./es/about.json')
      ).default,
    }
  ],
});

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);
