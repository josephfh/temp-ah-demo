import { sv } from 'locales';

/**
 * This is a placeholder translation function, providing limited access
 * to swedish translation strings in the locales package
 * @param str localization key
 * @returns translated string or untranslated key
 */

export const t = (str: string) => {
  const keyParts = str.split('.');
  const defaultLocale = sv as any; // You'd never see this in a real translation function :)
  return defaultLocale?.[keyParts[0]]?.[keyParts[1]] || str;
};
