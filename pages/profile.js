import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Login from '../components/Login';
import { userCreatedCarsQuery } from '../utils/queries';
import { client } from '../utils/client';
import CardLayout from '../components/CardLayout';

const Profile = () => {
  const [user, setUser] = useState({});
  const [cars, setCars] = useState();
  // const [text, setText] = useState('Created');
  // const [loading, setLoading] = useState(true);
  const { userId } = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setUser(JSON.parse(window.localStorage.getItem('user')));
    }
  }, []);

  useEffect(() => {
    if (user) {
      const createdCarsQuery = userCreatedCarsQuery(userId);

      client.fetch(createdCarsQuery).then((data) => {
        setCars(data);
      });
    }
    // }, [text, userId]);
  }, [user]);

  if (user) {
    return (
      <div className="w-screen h-screen">
        <div className="flex flex-col justify-center items-center pt-48 mb-48">
          <div className="text-slate-800 hover:text-slate-600 font-[Poppins] duration-500 mb-5">Login Successful</div>
          <div className="text-slate-800 hover:text-slate-600 font-[Poppins] duration-500 mb-10">Welcome {user.name}</div>
          <img width="100px" height="100px" className="rounded-full" src={user.picture} />
          <div className="flex flex-row flex-wrap justify-evenly grid-flow-row justify-self-auto mt-96  sm:mt-0">
            <CardLayout searchResults={cars} carData={cars} />
          </div>
        </div>
      </div>
    );
  }
  return <Login />;
};

export default Profile;
