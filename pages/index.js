import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import bg3 from '../public/5.jpg';
import logo from '../public/logo.png';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className="font-poppins text-gray bg-secondary">
      <Head>
        <title> Energy Team Woods | Home</title>
        <meta name="description" content="Structural engineer, Carpenter" />
      </Head>

      <div className="mx-auto container py-8 md:py-20 tracking-wider  px-8">
        <div className="text-center ">
          {/* <p className='text-2xl md:text-3xl lg:text-4xl mt-8 font-bold text-white'>
            Welcome To <span className='font-stylish text-3xl text-main'>TEAM WOODS</span>
          </p> */}

          <div>
            <Image
              src={logo}
              alt="logo"
              className="rounded-md bg-blend-overlay"
            />
          </div>

          <div className="mt-2">
            <Image
              src={bg3}
              alt="tools"
              layout="responsive"
              className="rounded border-white bg-blend-color"
            />
          </div>

          <p className="text-xl md:text-2xl lg:text-3xl mt-6 text-main">
            We Offer Roof Frame Work, Stone Coated & Aluminum Insulation,
            Furniture Frame Work & General Building Maintenance
          </p>

          <p className="text-xl md:text-2xl lg:text-3xl font-light mt-6 text-main">
            Quality Craftsmanship, Remodel Your House Into Your Dream Home & Get
            The Beautiful Home You Want
          </p>

          <div className="text-xl font-bold tracking-widest mt-8 md:mt-16 flex flex-col md:flex-row md:justify-center md:gap-40 gap-8">
            <button className="">
              <Link href="/gallery">
                <a className="bg-main px-4 md:px-6 py-2 text-gray rounded-full hover:bg-gray hover:text-main">
                  Our Works
                </a>
              </Link>
            </button>

            <button className="">
              <Link href="/contact">
                <a className="bg-main px-4 md:px-6 py-2 text-gray rounded-full hover:bg-gray hover:text-main">
                  Lets Talk
                </a>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
