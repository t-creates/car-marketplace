/*eslint-disable*/
import React from 'react';

import Link from 'next/link';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { BsCurrencyDollar } from 'react-icons/bs';
import { TbManualGearbox } from 'react-icons/tb';
import { MdLocalGasStation } from 'react-icons/md';


const CarCards = ({name, mpg, img , seats, transmission, monthlyPrice}) => {
    return (
    <div className="box-border h-50 my-5 text-slate-900 shadow-2xl backdrop-blur-sm">
        <Box className="rounded-xl flex-row backdrop-blur-md bg-white "
            sx={{
                width: 250,
                height: 330,
            }}
            >   
                <Box 
                    display="flex" 
                    width={250} height={30} 
                    alignItems="center"
                    justifyContent="center">
                <h2 className="text-slate-900 font-[Helvetica] font-bold  ">
                    {name}
                </h2> 
                </Box>
                <hr className="bg-gradient-to-r from-gray-700 via-gray-900 to-black h-1"/>
                <Box 
                    display="flex-row" 
                    alignItems="center"
                    justifyContent="center">
                    <BsCurrencyDollar className="absolute mt-1" size={24}  />
                    <h2 className="pl-5 font-bold text-2xl">{monthlyPrice}<span className="font-light text-xs text-slate-500"></span> </h2>
                    <Box >
                        <img className="object-scale-down h-40 w-96" alt="car-image" src={`${img}`}/>
                    </Box>
                </Box>
                <Box display="flex" 
                        width={250} height={30} 
                        alignItems="center"
                        justifyContent="space-evenly "
                        className="bg-gradient-to-r from-gray-600 to-gray-500 ">
                            <Box display="flex"
                                alignItems="center"
                                backgroundColor="grey.600"
                                className="rounded ml-1">
                                    <TbManualGearbox className="ml-1"/>
                                    <h5 className="font-medium mr-1"> {transmission} </h5>
                            </Box>
                            <Box 
                                display="flex"
                                alignItems="center"
                                backgroundColor="grey.600"
                                className="rounded ml-2">
                                    <img src="https://cdn-icons.flaticon.com/png/512/5557/premium/5557123.png?token=exp=1660179279~hmac=d4843cbc3ef4d2fbcc213f061761cd29" width="20"/>
                                    <h5 className="font-medium mr-1"> {seats} </h5>
                            </Box>
                            <Box 
                                display="flex"
                                alignItems="center"
                                backgroundColor="grey.600"
                                className="rounded ml-2">
                                    <MdLocalGasStation className="ml-1"/> 
                                    <h5 className="font-medium mr-1"> {mpg} </h5>
                            </Box>
                </Box>
                <Box 
                    display="flex"
                    alignItems="center"
                    backgroundColor="white"
                    justifyContent="center"
                    className="rounded mt-3">
                    <Link href={`/car-details/${name}`}>


                    <Button 
                        variant="contained" 
                        style={{
                            backgroundColor: "#F43131",
                            fontSize: "18px",         
                        }} 
                        className="bg-red-600 hover:scale-110">Buy Now</Button>
                        </Link>
                </Box>
        </Box>
    
    </div>
  );
};

export default CarCards;
