import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import bg3 from '../public/hammer-1868956_960_720.jpg'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className='font-poppins text-gray bg-secondary'>
      <Head>
        <title>Team Woods | Home</title>
        <meta name="description" content="Structural engineer, Carpenter" />
      </Head>

      <div className='mx-auto container py-8 md:py-20 tracking-wider  px-8'>
        
        <div className='text-center '>
          <p className='text-2xl md:text-3xl lg:text-4xl mt-8 font-bold text-white'>
            Welcome To <span className='font-stylish text-3xl text-main'>TEAM WOODS</span>
          </p>

          <div className='mt-4'>
          <Image src={bg3} alt='tools' layout='responsive' className='rounded border-white'/>
          </div>


          <p className='text-xl md:text-2xl lg:text-3xl mt-6 text-main'>
            Furniture Frame Work, Roof Frame Work, Insulation & General Building Maintenance
          </p>

          


          <p className='text-xl md:text-2xl lg:text-3xl font-light mt-6 text-main'>
            Quality Craftsmanship, Remodel Your House Into Your Dream Home & Get The Beautiful Home You Want
          </p>


          <div className='flex justify-center gap-2 py-2 md:mt-10 text-xl font-light mt-6'>
            <p className=''>
              Ready To Work Together?
            </p>

            <button className=''>
              <Link  href="/contact"><a className='bg-main px-4 md:px-6 py-2 text-gray rounded-full hover:bg-gray hover:text-main'>Conact Us</a></Link>
            </button>
          </div>
        </div>
        
      </div>

      
    </div>
  )
}
