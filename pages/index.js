import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { BsFillArrowRightSquareFill } from 'react-icons/bs';

import { SearchBar, CardLayout, Banner } from '../components';
import { client } from '../utils/client';
import { carsQuery } from '../utils/queries';

const carOffers = [
  {
    id: 1,
    title: 'Buy a top of the line luxury vehicle or sell it directly on Car Marketplace',
  },
  {
    id: 2,
    title: 'Get an instant offer online that is valid for 7 days.',
  },
  {
    id: 3,
    title: 'We will pick up your car directly from your home and you will get paid via electronic funds transfer.',
  },
];

const Home = () => {
  const [cars, setCars] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client.fetch(carsQuery).then((data) => {
      setSearchResults(data);
      setCars(data);
      setLoading(false);
    });
  }, []);

  if (loading) return 'loading';

  return (
    <div className="">
      <div className="w-full h-full absolute">
        <Banner />
      </div>
      <div className="sm:flex sm:justify-center md:static md:pl-[35%] items-end md:pt-[7%] sm:pt-[180px]">
        <h1 className="raleway mb-2 mt-3 md:text-7xl sm:text-4xl sm:z-10 text-slate-800/90 text-shadow">Luxury Vehicles</h1>
      </div>
      <div className="sm:mb-0 md:mb-24 xl:mb-[350px] lg:mb-[195px] 2xl:mb-[550px] mt-100" />
      <div className="md:flex justify-center items-center mt-[60vh] sm:hidden">
        <div className="flex justify-between gap-10 items-center w-[75%]">
          <div className="flex flex-col justify-center items-start p-10 rounded-md text-slate-800/90 shadow-lg shadow-black/50">
            <h3 className="text-3xl font-bold">Selling Your Vehicle? <br /> Buying A Car? <br /> Geat A Deal Done In Minutes!</h3>
            {carOffers.map((offer) => (
              <div key={offer.id} className="flex justify-center items-start mt-10">
                <BsFillArrowRightSquareFill className="text-3xl mr-2" />
                <p>{offer.title}</p>
              </div>
            ))}
          </div>
          <div className="hover:grow">
            <Image src="/7718861.png" width={750} height={750} className="object-contain bg-transparent" />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center md:mt-[40vh] sm:mt-24">
        <div className="flex w-[75%] justify-center items-center h-fit sm:flex-col md:flex-row">
          <div className="flex flex-col justify-between items-center text-slate-800/90">
            <h3 className="text-5xl pb-10">Best Priced Dealer</h3>
            <p className="">The Best Priced Dealer Award shines a spotlight on the country's top dealerships for their
              commitment to consistently offering transparent pricing and great value for Luxury vehicle shoppers.
            </p>
          </div>
          <Image src="/bestpriced.png" width={750} height={750} className="object-contain" />
          <div className="flex flex-col justify-between items-center text-slate-800/90">
            <h3 className="text-5xl">No Haggling </h3>
            <h3 className="text-5xl pb-10"> No Hidden Fees</h3>
            <p>Our pricing is competitive and transparent. Unlike most dealers, we don't have any hidden fees or other costs.
              The price you see is the price you pay. No hassle. No haggling.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center flex-col sm:pt-24 md:pt-[40vh]">
        <h1 className="text-slate-800 raleway text-shadow-1 text-2xl md:text-4xl mb-2 mt-3 text-center">Search for cars</h1>
        <SearchBar cars={cars} setSearchResults={setSearchResults} />
      </div>
      <div className="flex flex-row flex-wrap justify-evenly grid-flow-row justify-self-auto mt-96 pb-10 sm:mt-0">
        <CardLayout searchResults={searchResults} />
      </div>
    </div>
  );
};

export default Home;
