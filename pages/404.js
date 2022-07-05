import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function NotFound() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, []);

  return (
    <div className="container mx-auto text-center text-3xl uppercase">
      <p className='py-12'>Page doesnt exist</p>

      <p className='py-12'>Go back to HomePage in 3 secs</p>
    </div>
  );
}
