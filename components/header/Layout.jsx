
import React from 'react';
import Navbar from './Navbar';


const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />

      {/* Main content */}
      <main>{children}</main>

      {/* Add your footer here */}
      <footer>
        {/* Add footer content as needed */}
        <p>&copy; {new Date().getFullYear()} Your App</p>
      </footer>
    </div>
  );
};

export default Layout;
