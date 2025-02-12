import { useEffect, useState } from 'react';

export const useLocalStorage = (key: string, initialValue: string) => {
  const [value, setValue] = useState(() => {
    const curValue = localStorage.getItem(key);
    return curValue !== null ? JSON.parse(curValue) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
};
