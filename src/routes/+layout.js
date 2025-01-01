import { locale, locales, loadTranslations } from '$lib/translations/index';

const defaultLocale = 'en';

// This is a very niave approach. Consider using a library
// that doesn't drop country codes
function getDefaultLanguage(languageSet) {
  const preferredLanguage = (navigator.language || '').split('-')[0].toLowerCase();
  if (languageSet.has(preferredLanguage)) return preferredLanguage;
  return defaultLocale;
}

// Disable server side rendering (SSR)
export const ssr = false;

/** @type {import('@sveltejs/kit').Load} */
export const load = async () => {
  // Load the saved language from localStorage
  const savedLanguage = localStorage.getItem('lang');
  if (savedLanguage) {
    await loadTranslations(savedLanguage);
  } else {
    // Default to the user-selected locale, if set
    // Otherwise try to match the browser language, if available
    const userLanguage = locale.get();
    const initialLocale = (userLanguage) ? userLanguage : getDefaultLanguage(new Set(locales.get()));
    await loadTranslations(initialLocale);
  }

  return { };
};
