import { useRouter } from 'expo-router';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const timeoutId = setTimeout(() => router.push('/cadastro'), 0); 
    return () => clearTimeout(timeoutId);
  }, []);

  return null;
}