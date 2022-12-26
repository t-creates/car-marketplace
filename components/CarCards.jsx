/*eslint-disable*/
import React from 'react';

import Link from 'next/link';
import Box from '@mui/material/Box';
import { MdLocalGasStation } from 'react-icons/md';
import { GiCarSeat } from 'react-icons/gi';

const CarCards = ({ name, mpg, img, seats, monthlyPrice }) => {
    return (
        <div className="box-border h-50 my-5 text-slate-900 shadow-2xl backdrop-blur-sm w-full h-full bg-white rounded-b ">
            <Box className="backdrop-blur-md sm:w-[250px]"
                sx={{
                    width: 300,
                    height: 330,
                }}
            >
                <Box className='flex flex-col'>
                    <Box className='pb-2'>
                        <Box className='rounded-t' >
                            <img className="object-fit h-44 w-96 rounded-t" alt="car-image" src={`${img}`} />
                        </Box>
                        <Box className="flex flex-col justify-between p-2 pt-5 gap-1">
                            <Box className='pl-1'>
                                $ <span className='font-semibold'>{monthlyPrice}</span>
                            </Box>
                            <Box className='font-semibold text-base pl-1 raleway'>
                                {name}
                            </Box>
                            <Box className='flex flex-row items'>
                                <MdLocalGasStation size={20} /> <span className='pl-2'>{mpg} MPG</span>
                            </Box>
                            <Box className='pl-1 flex flex-row'>
                                <GiCarSeat size={20} />
                                <span className='pl-2'>{seats} Seats</span>
                            </Box>
                        </Box>
                    </Box>
                    <Box>
                        <Box
                            backgroundColor="white"
                            className="rounded mx-3 items-center justify-center flex">
                            <Link href={`/car-details/${name}`}>
                                <button
                                    type="button"
                                    className="border-2 rounded bg-slate-50/75 border-slate-800 text-slate-800 hover:bg-slate-50/75 hover:scale-105 h-10 w-60"
                                >
                                    See More Details
                                </button>
                            </Link>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </div>
    );
};

export default CarCards;
