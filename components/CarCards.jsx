/*eslint-disable*/
import React from 'react';
import { urlFor } from '../utils/client';

import Link from 'next/link';
import Box from '@mui/material/Box';
import { MdLocalGasStation } from 'react-icons/md';
import { GiCarSeat } from 'react-icons/gi';

const CarCards = ({ name, mpg, images, seats, monthlyPrice }) => {
    return (
        <div className="box-border text-slate-900 shadow-xl  md:w-fit sm:w-fit md:h-[250px] sm:h-full bg-white rounded
        hover:shadow-2xl hover:shadow-black/50 mt-5 sm:mx-5 hover:scale-105">
            <Box className=" md:w-[450px] md:h-[250px] sm:w-fit sm:h-full">
                <Box className='flex md:flex-row sm:flex-col h-full'>
                    <Box className='h-full md:w-[75%] sm:w-full relative'>
                        <img className="object-fit h-full w-full md:rounded-l sm:rounded-t overflow-hidden object-center" alt="car-image" src={urlFor(images[0])} />
                    </Box>
                    <Box className="flex flex-col justify-between p-2 pt-5 gap-1 items-start h-full md:w-[50%] sm:w-full">
                        <Box className='font-extrabold text-base pl-1 raleway'>
                            {name}
                        </Box>
                        <Box className='pl-1'>
                            $ <span className=''>{monthlyPrice}</span>
                        </Box>
                        <Box className='flex flex-row items'>
                            <MdLocalGasStation size={20} /> <span className='pl-2'>{mpg} MPG</span>
                        </Box>
                        <Box className='pl-1 flex flex-row'>
                            <GiCarSeat size={20} />
                            <span className='pl-2'>{seats} Seats</span>
                        </Box>
                        <Box className='flex flex-1 items-center w-full h-full'>
                            <Box
                                backgroundColor="white"
                                className="rounded mx-3 md:items-end sm:items-center justify-end flex h-full w-full">
                                <Link href={`/car-details/${name}`}>
                                    <button
                                        type="button"
                                        className="border-2 rounded-sm bg-slate-50/75 border-slate-800 text-slate-800
                                     hover:bg-slate-50/75 h-fit w-full hover:bg-slate-800 hover:border-white hover:text-white"
                                    >
                                        See More Details
                                    </button>
                                </Link>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </div>
    );
};

export default CarCards;
