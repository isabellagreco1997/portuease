import React from 'react';
import Footer from '../Footer';
import './Layout.scss'

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col">
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
