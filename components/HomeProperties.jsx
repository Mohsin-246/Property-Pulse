'use client';
import React, { useEffect, useState } from "react";
// import properties from '@/properties.json'
import PropertyCard from '@/components/PropertyCard';
import Link from 'next/link';

import { fetchProperties } from "@/utils/request";







const HomeProperties = async () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProperties = async () => {
      try {
        const data = await fetchProperties();
        setProperties(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    loadProperties();
  }, []);

  if (loading) return <p></p>;
  if (error) return <p>{error}</p>;


    

    const recentProperties = properties.sort(
        ()=> Math.random() - Math.random()
    ).slice(0,3);



  return (

    <div>
    <section className="px-10 py-6 ">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-blue-500 mb-6 text-center">
          Recent Properties
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        { recentProperties === 0 ? (
            <p>No Property Found</p>
        ): recentProperties.map((property)=> (
            <PropertyCard key = {property._id} property = { property } />
        ))
    }
        
        
        </div>
        </div>
    </section>
    <section className="m-auto max-w-lg my-10 px-6">
      <Link
        href='/properties'
        className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >View All Properties</Link
      >
    </section>
    </div>
  )
}

export default HomeProperties