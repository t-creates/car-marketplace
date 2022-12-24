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

  // map for inputs for cleaner code

  return (
    <div className="w-full h-screen pt-[60px] flex items-center justify-center">
      <div className="box-border w-[75%] h-[70%] pb-10 my-5 text-slate-900 shadow-2xl backdrop-blur-sm bg-white rounded">
        <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center pt-10 gap-4">
          <div className="grid grid-cols-1 pb-10">
            <label htmlFor={image}>
              <div className="grid cursor-pointer">
                <div className="flex flex-col justify-center items-center">
                  <p className="mt-1 text-2xl text-slate-800 raleway">
                    Upload Your Car Images
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
          </div>
          <div className="grid grid-cols-2 w-[90%] gap-4">
            <div>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Car Title"
                className="border-2 bg-slate-50/75 border-slate-800 placeholder-slate-800 hover:bg-slate-50/75 raleway
                text-lg w-[100%] rounded p-2 h-[80%] outline-none"
              />
            </div>
            <div>
              <input
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Car Price"
                className="border-2 bg-slate-50/75 border-slate-800 placeholder-slate-800 hover:bg-slate-50/75 raleway
                text-lg w-[100%] rounded p-2 h-[80%] outline-none"
              />
            </div>
            <div>
              <input
                type="number"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                placeholder="Year"
                className="border-2 bg-slate-50/75 border-slate-800 placeholder-slate-800 hover:bg-slate-50/75 raleway
                text-lg w-[100%] rounded p-2 h-[80%] outline-none"
              />
            </div>
            <div>
              <input
                type="number"
                value={mpg}
                onChange={(e) => setMpg(e.target.value)}
                placeholder="MPG"
                className="border-2 bg-slate-50/75 border-slate-800 placeholder-slate-800 hover:bg-slate-50/75 raleway
                text-lg w-[100%] rounded p-2 h-[80%] outline-none"
              />
            </div>
            <div>
              <input
                type="number"
                value={seats}
                onChange={(e) => setSeats(e.target.value)}
                placeholder="Seats"
                className="border-2 bg-slate-50/75 border-slate-800 placeholder-slate-800 hover:bg-slate-50/75 raleway
                text-lg w-[100%] rounded p-2 h-[80%] outline-none"
              />
            </div>
            <div>
              <input
                value={transmission}
                type="transmission"
                placeholder="Transmission Type"
                onChange={(e) => setTransmission(e.target.value)}
                className="border-2 bg-slate-50/75 border-slate-800 placeholder-slate-800 hover:bg-slate-50/75 raleway
                text-lg w-[100%] rounded p-2 h-[80%] outline-none"
              />
            </div>
          </div>
          <div className="pt-10">
            <button
              type="submit"
              className="border-2 rounded bg-slate-50/75 border-slate-800 text-slate-800 hover:bg-slate-50/75 hover:scale-105 h-10 w-60"
            >
              Post For Sale
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CarSale;
