import React from 'react';
import { Outlet } from 'react-router-dom';
import GlobalNavbar from '@/components/GlobalNavbar';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <GlobalNavbar />
      <main className="flex-1 pt-16">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;