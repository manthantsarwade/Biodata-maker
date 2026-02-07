export const loadFromStorage = <T,>(key: string, fallback: T): T => {
  if (typeof window === 'undefined') {
    return fallback;
  }
  try {
    const stored = window.localStorage.getItem(key);
    if (!stored) {
      return fallback;
    }
    return JSON.parse(stored) as T;
  } catch (error) {
    console.error('Failed to parse stored data', error);
    return fallback;
  }
};

export const saveToStorage = <T,>(key: string, value: T): void => {
  if (typeof window === 'undefined') {
    return;
  }
  window.localStorage.setItem(key, JSON.stringify(value));
};
