import React, { useState } from 'react';
import { AiOutlineCloudUpload } from 'react-icons/ai';

import { useRouter } from 'next/router';
import { uuid } from 'uuidv4';

import { client } from '../utils/client';

const CarSale = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [year, setYear] = useState('');
  const [image, setImage] = useState('');
  const [mpg, setMpg] = useState('');
  const [seats, setSeats] = useState('');
  const [transmission, setTransmission] = useState('');
  const [imageAsset, setImageAsset] = useState('');
  const router = useRouter();

  const uploadImage = (e) => {
    const selectedFile = e.target.files[0];
    // uploading asset to sanity

    client.assets
      .upload('image', selectedFile, { contentType: selectedFile.type, filename: selectedFile.name })
      .then((document) => {
        setImageAsset(document);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const car = {
      _id: uuid(),
      _type: 'car',
      title,
      price,
      mpg,
      seats,
      transmission,
      year,
      image: {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: imageAsset?._id,
        },
      },
    };

    client.createIfNotExists(car);

    router.push('/');
  };

  // slice, map for inputs

  return (
    <div className="w-full h-screen pt-[60px] flex items-center justify-center">
      <div className="box-border w-[75%] h-[50%] h-50 my-5 text-slate-900 shadow-2xl backdrop-blur-sm bg-white rounded-b">
        <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center pt-10 gap-4">
          <div className="grid grid-rows-2">
            <label htmlFor={image}>
              <div className="grid cursor-pointer">
                <div className="flex flex-col justify-center items-center m-0 p-0">
                  <p className="mt-1 text-2xl text-gray-200">
                    Upload your car Images
                  </p>
                  <p className="font-bold text-2xl mt-3">
                    <AiOutlineCloudUpload />
                  </p>
                  <p className="text-lg">Click to upload</p>
                </div>
              </div>
              <input
                type="file"
                name="upload-image"
                onChange={uploadImage}
                className="w-0 h-0"
                value={setImage}
              />
            </label>
            <button
              type="submit"
              className="border-2 border-slate-800 text-slate-800 rounded hover:scale-105 h-10 w-60"
            >
              Submit
            </button>
          </div>
          <div>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Car Title"
              className="outline-none text-2xl sm:text-3xl font-bold w-[300px] rounded p-2 h-10"
            />
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Car Price"
              className="outline-none text-2xl sm:text-3xl font-bold w-[400px] rounded p-2 h-10"
            />
            <input
              type="number"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              placeholder="Year"
              className="outline-none text-2xl sm:text-3xl font-bold w-[400px] rounded p-2 h-10"
            />
            <input
              type="number"
              value={mpg}
              onChange={(e) => setMpg(e.target.value)}
              placeholder="Mpg"
              className="outline-none text-2xl sm:text-3xl font-bold w-[400px] rounded p-2 h-10"
            />
            <input
              type="number"
              value={seats}
              onChange={(e) => setSeats(e.target.value)}
              placeholder="Seats"
              className="outline-none text-2xl sm:text-3xl font-bold w-[400px] rounded p-2 h-10"
            />
            <input
              value={year}
              type="transmission"
              placeholder="Year"
              onChange={(e) => setTransmission(e.target.value)}
              className="outline-none text-2xl sm:text-3xl font-bold w-[400px] rounded p-2 h-10"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CarSale;
