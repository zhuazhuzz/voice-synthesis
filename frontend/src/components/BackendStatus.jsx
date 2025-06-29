import { useEffect, useState } from 'react';

export default function BackendStatus() {
  const [isUp, setIsUp] = useState(null);

  useEffect(() => {
    const checkStatus = async () => {
      try {
        const res = await fetch('https://api.273460892.xyz/health');
        setIsUp(res.ok);
      } catch {
        setIsUp(false);
      }
    };

    checkStatus();

    const interval = setInterval(checkStatus, 5000);

    return () => clearInterval(interval);
  }, []);

  if (isUp === null) return null;

  return (
    <h1
      className={`rounded text-3xl font-bold text-center mb-8 mt-20 p-4 ${
        isUp ? 'bg-green-200 text-green-900' : 'bg-red-200 text-red-900'
      }`}
    >
      Backend is {isUp ? 'Online ✅' : 'Offline ❌'}
    </h1>
  );
}
