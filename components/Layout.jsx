import React from 'react';
import { Navbar, Footer } from '.';

const Layout = ({ children }) => {
  return (
    <main>
      <Navbar />
      <div className="bg-slate-50/100">
        {children}
      </div>
      <Footer />
    </main>
  );
};

export default Layout;
