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
      image: {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: imageAsset?._id,
        },
      },
      year,
    };

    client.createIfNotExists(car);

    router.push('/');
  };

  return (
    <div className="w-full h-screen bg-slate-800 pt-[60px]">
      <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center pt-10 gap-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Car Title"
          className="outline-none text-2xl sm:text-3xl font-bold w-[400px] rounded p-2 h-10"
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
          placeholder="No.of Seats"
          className="outline-none text-2xl sm:text-3xl font-bold w-[400px] rounded p-2 h-10"
        />
        <input
          type="transmission"
          value={year}
          onChange={(e) => setTransmission(e.target.value)}
          placeholder="Year"
          className="outline-none text-2xl sm:text-3xl font-bold w-[400px] rounded p-2 h-10"
        />
        <label>
          <div className="flex flex-col items-center justify-center h-full cursor-pointer">
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
          />
        </label>
        <button type="submit" className="bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none">Submit</button>
      </form>
    </div>
  );
};

export default CarSale;
