import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Login from '../components/Login';
import { userQuery, userCreatedCarsQuery } from '../utils/queries';
import { client, urlFor } from '../utils/client';
import CardLayout from '../components/CardLayout';

const Profile = () => {
  const [user, setUser] = useState({});
  const [cars, setCars] = useState();
  const [text, setText] = useState('Created');
  const [loading, setLoading] = useState(true);
  const { userId } = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setUser(JSON.parse(window.localStorage.getItem('user')));
    }
<<<<<<< HEAD
  }, []);

  // useEffect(() => {
  //   if (user) {
  //     const createdCarsQuery = userCreatedCarsQuery(userId);

  //     client.fetch(createdCarsQuery).then((data) => {
  //       setCars(data);
  //     });
  //   }
  // }, [text, userId]);
=======
  }, [user]);
>>>>>>> d8e725264709928a0d459c8bfeb85570e340f6a2

  if (user) {
    return (
      <div>
        <div className="flex flex-col justify-center items-center top-0 right-0 bottom-0 left-0 mt-48 mb-48">
          <div className="text-slate-100 hover:text-slate-600 font-[Poppins] duration-500 mb-5">Login Successful</div>
          <div className="text-slate-100 hover:text-slate-600 font-[Poppins] duration-500 mb-10">Welcome {user.name}</div>
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
