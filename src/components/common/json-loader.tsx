import { useEffect } from 'react';
import { useStore } from '@/hooks/use-store';

export const JsonLoader = () => {
  const setData = useStore((state) => state.setData);

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch(console.error);
  }, [setData]);

  return null; 
};
