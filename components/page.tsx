"use client";
import React, { useEffect, useState } from 'react';

interface User {
  name: string;
  price: number;
  image: string;
  id: string;
}

const Fruits = () => {
  const [fruits, setFruits] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://677ede2194bde1c1252dd595.mockapi.io/v1/test");
        const data = await response.json();
        setFruits(data);
      } catch (error) {
        console.log("products data not fetch", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className='px-6 py-12 mt-16'>
        <h1 className='text-3xl font-bold mb-8'>Fruits</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
          {fruits.map((fruit) => (
            <div key={fruit.id} className='relative bg-white border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300'>
              <img
                src={fruit.image}
                alt={fruit.name}
                className='w-full h-64 object-cover'
                width={500}
                height={500}
                unoptimized={true}
              />
              <div className='absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity flex justify-center items-center'>
                <button className='text-gray-100 font-semibold text-lg'>
                  Shop Now
                </button>
              </div>
              <div className='p-4 flex justify-between items-center'>
                <div>
                  <h3>{fruit.name}</h3>
                  <p>${fruit.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Fruits;
