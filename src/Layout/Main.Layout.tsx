import { Header } from '@/components/nav';
import SideBar from '@/components/nav/Sidebar.nav';
import React, { FC } from 'react';

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <SideBar />
      <div className="flex flex-col items-center justify-center mt-40 space-y-10 md:justify-start md:items-start mb-10 w-full children-zindex-1">
        <div className="w-64 h-64 rounded-full bg-neon fixed mx-auto my-auto blur-xl inset-0 opacity-20 z-0" />
        {children}
      </div>
    </>
  );
};

export default Layout;
