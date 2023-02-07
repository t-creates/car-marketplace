import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { FcGoogle } from 'react-icons/fc';
// import { useRouter } from 'next/router';

import { client } from '../utils/client';

const Login = () => {
  // const router = useRouter();

  const responseGoogle = (response) => {
    const base64Url = response.credential.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map((c) => `%${(`00${c.charCodeAt(0).toString(16)}`).slice(-2)}`).join(''));

    const { name, picture, sub } = JSON.parse(jsonPayload);

    localStorage.setItem('user', jsonPayload);

    const user = {
      _id: sub,
      _type: 'user',
      userName: name,
      image: picture,
    };

    client.createIfNotExists(user);
    console.log(user);
  };

  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="flex flex-col justify-center items-center">
        <div className="p-5">
          <div className="text-3xl font-extrabold raleway text-slate-800">Car Marketplace Login</div>
        </div>
        <div className="shadow-2xl" />
        <GoogleLogin
          clientId={process.env.NEXT_PUBLIC_GOOGLE_GOOGLE_TOKEN}
          render={(renderProps) => (
            <button
              type="button"
              className="bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none"
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              <FcGoogle className="mr-4" /> Sign in with google
            </button>
          )}
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy="single_host_origin"
        />
      </div>
    </div>
  );
};

export default Login;
