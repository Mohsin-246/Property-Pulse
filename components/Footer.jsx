import Image from 'next/image'
import React from 'react'
import logo from '@/assets/images/logo.png'
import Link from 'next/link'

const footer = () => {

    const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-200 py-4 mt-24 ">
      <div
        className="container mx-auto flex flex-col md:flex-row items-center justify-between px-20"
      >
        <div className="mb-4 md:mb-0">
          <Image src={logo} alt="Logo" className="h-8 w-auto" />
        </div>
        <div
          className="flex flex-wrap justify-center md:justify-start mb-4 md:mb-0"
        >
          <ul className="flex md:ml-10 ">
            <li><Link href="/properties" className='md:ml-14 md:px-4'>Properties</Link></li>
            <li><Link href="" className='ml-3 md:ml-3'>Terms of Service</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-sm text-gray-500 mt-2 md:mt-0">
            &copy; {currentYear} PropertyPulse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default footer