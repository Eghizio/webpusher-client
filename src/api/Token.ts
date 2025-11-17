/* Important: User token is stored in LocalStorage as a temporary fix for Demo to enable IOS PWA. */

/* In memory token with LocalStorage persistance */

export class Token {
  static readonly LOCAL_STORAGE_KEY = "_meetjs_webpush";

  static get = (): string | null =>
    localStorage.getItem(Token.LOCAL_STORAGE_KEY);

  static set = (value: string) =>
    localStorage.setItem(Token.LOCAL_STORAGE_KEY, value);

  static clear = () => localStorage.removeItem(Token.LOCAL_STORAGE_KEY);
}
