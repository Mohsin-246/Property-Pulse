'use client';
import React, { useEffect, useState } from "react";
import PropertyCard from "@/components/PropertyCard";
import { fetchProperties } from "@/utils/request";



const PropertiesPage = () => {
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
  properties.sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt));
  return (
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
        {properties.length === 0 ? (
          <p>No Property Available</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 text-black">
            {properties.map((property) => (
              <PropertyCard key={property._id} property={property} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PropertiesPage;
