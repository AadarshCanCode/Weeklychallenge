import React from 'react';
import { Outlet } from 'react-router-dom';
import GlobalNavbar from '@/components/GlobalNavbar';
import ScrollToTop from '@/components/ScrollToTop';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <GlobalNavbar />
        <main className="flex-1 pt-16">
          <ScrollToTop />
          <Outlet />
        </main>
    </div>
  );
};

export default Layout;