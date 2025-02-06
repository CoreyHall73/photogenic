import React, { ReactNode } from 'react';
import SideBar from '../Components/Sidebar/SideBar';

interface SideNavLayoutProps {
  children: ReactNode;
}

const SideNavLayout: React.FC<SideNavLayoutProps> = ({ children }) => {
  return (
    <div>
      <SideBar />
    </div>
  );
};

export default SideNavLayout;
