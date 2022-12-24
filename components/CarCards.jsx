/*eslint-disable*/
import React from 'react';

import Link from 'next/link';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { MdLocalGasStation } from 'react-icons/md';


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
                    <Box className='pb-4'>
                        <Box className='rounded-t' >
                            <img className="object-fit h-44 w-96 rounded-t" alt="car-image" src={`${img}`} />
                        </Box>
                        <Box className="flex flex-col justify-between p-2 pt-5 ">
                            <Box className='pl-1'>
                                $ <span className='font-semibold'>{monthlyPrice}</span>
                            </Box>
                            <Box className='font-semibold text-base pl-1'>
                                {name}
                            </Box>
                            <Box className='flex flex-row items'>
                                <MdLocalGasStation size={20} /> {mpg} MPG
                            </Box>
                            <Box className='pl-1'>
                                {!seats ? (<br />) : (`${seats} Seats`)}
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
