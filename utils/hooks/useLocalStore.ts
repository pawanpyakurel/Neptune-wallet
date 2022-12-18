import { useState, useEffect } from 'react';

type useLocalStoreProps = {
  key: string;
  data?: any;
};

function getStorageValue({ key, data }: useLocalStoreProps) {
  if (typeof window !== 'undefined') {
    const saved = localStorage?.getItem(key) ?? '';
    return !!saved ? JSON.parse(saved) : data;
  }
}

export const useLocalStorage = ({ key, data }: useLocalStoreProps) => {
  const [value, setValue] = useState(() => {
    return getStorageValue({ key, data });
  });

  useEffect(() => {
    data && localStorage?.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
