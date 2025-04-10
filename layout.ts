import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

interface LayoutProps {
  showNav?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ showNav = true }) => {
  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      <div className="container mx-auto px-4 pt-4 pb-20">
        <Outlet />
      </div>
      
      {showNav && <NavBar />}
    </div>
  );
};

export default Layout;
