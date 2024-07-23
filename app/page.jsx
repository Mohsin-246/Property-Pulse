import React from 'react'
import Link from 'next/link'
import Land from '@/components/Land'
import BoxProp from '@/components/BoxProp'
import Footer from '@/components/Footer'
import HomeProperties from '@/components/HomeProperties'
import connectDB from '@/config/config'

const HomePage = async () => {
  
  return (
    <div>
      {/* {
        await connectDB()
      } */}

     <Land />
     <BoxProp/>
     <HomeProperties/>
     
    </div>
  )
}

export default HomePage
