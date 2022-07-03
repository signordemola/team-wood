import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();
  return (
    <div className=' h-20 flex justify-between items-center bg-gray border-b-4 border-main mx-auto px-4 md:px-10 font-stylish text-xl text-secondary'>
      <div className='flex'>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
      <Link href='/'><a className=''>Team Woods</a></Link>
      </div>

      <ul className='flex gap-4 '>
          <Link href="/">
            <a className={router.pathname == "/" ? "border-b-2 border-main" : ""}>
              Home
            </a>
          </Link>
          <Link href="/gallery">
            <a className={router.pathname == "/gallery" ? "border-b-2 border-main" : ""}>
              Gallery
            </a>
          </Link>
          <Link href="/contact">
            <a className={router.pathname == "/contact" ? "border-b-2 border-main" : ""}>
              Contact
            </a>
          </Link>
      </ul>
    </div>
  )
}

export default Navbar