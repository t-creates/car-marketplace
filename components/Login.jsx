import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { FcGoogle } from 'react-icons/fc';
import { useRouter } from 'next/router';

import { client } from '../utils/client';

const Login = () => {
  const router = useRouter();

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
  };

  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className="relative w-full h-full bg-slate-800 ">
        <div className="absolute flex flex-col justify-center items-center top-0 right-0 bottom-0 left-0">
          <div className="p-5">
            <div className="text-3xl font-extrabold font-[Raleway] text-slate-100">Car Marketplace Login</div>
          </div>
          <div className="shadow-2xl" />
          <GoogleLogin
            clientId="1020567777273-6rjelg31998d8b8ofb334d8scafube87.apps.googleusercontent.com"
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
    </div>
  );
};

export default Login;
