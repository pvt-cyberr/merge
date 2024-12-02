'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

const ApiV4ConnFailed = () => {
  const { push } = useRouter();
  const [isFading, setIsFading] = useState(true);

  // Toggle the fading effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading((prev) => !prev);
    }, 1000); // Change every 1 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-5 w-screen h-screen bg-black text-gray-600 p-10">
      <div className="flex items-center gap-3">
        <Image src="/image/wc1.png" height={50} width={50} alt="wallet_conn" />
        <h3 className="text-white font-bold">Walletconnect</h3>
      </div>

      {/* Section with fade effect */}
      <div
        className={`bg-red-100 max-w-[500px] rounded-md p-3 cursor-pointer transition-opacity ease duration-500 ${
          isFading ? 'opacity-100' : 'opacity-50'
        }`}
      >
        <h5 className="text-center bg-red-50 text-red-900 text-sm">
          {"Error Connecting! SERVER-BH7R6T7 failed."}
          <span className="font-bold">Try Connecting manually</span>
        </h5>
      </div>

      <button
        className="p-3 px-6 text-white cursor-pointer rounded bg-blue-600 hover:bg-blue-700"
        onClick={() => push('/connection')}
      >
        {'Connect Manually'}
      </button>
    </div>
  );
};

export default ApiV4ConnFailed;