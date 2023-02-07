import React from 'react';
import { Navbar, Footer } from '.';

const Layout = ({ children }) => {
  return (
    <main>
      <Navbar />
      <div className="bg-white">
        {children}
      </div>
      <Footer />
    </main>
  );
};

export default Layout;
