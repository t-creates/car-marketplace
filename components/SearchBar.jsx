/*eslint-disable */
import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { v4 as uuid } from "uuid";

const SearchBar = ({ cars, setSearchResults }) => {
  const handleSearch = (e) => {
    if (!e.target.value) return setSearchResults(cars)
    const resultsArray = cars.filter((car) => car.title.toLowerCase().includes(e.target.value.toLowerCase()));
    setSearchResults(resultsArray);
  }


  return (
    <div className="flex flex-row justify-center align-middle items-center z-20">
      <div className="flex flex-row justify-center align-middle items-center my-4">
        <input
          type="text"
          name="search"
          id={uuid}
          onChange={handleSearch}
          className="lg:w-[750px] lg:h-[35px] md:w-[450px] text-xl rounded font-light p2 shadow-xl bg-slate-700 focus:outline-none capitalize  "
          placeholder=" Search for Cars..." />
        <button className="bg-transparent rounded">
          <BiSearch className="hover:scale-125 ml-1 cursor-pointer" size={35} />
        </button>
      </div>
    </div>
  )
};

export default SearchBar;
