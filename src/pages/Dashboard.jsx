import React, { useContext, useState } from 'react';
import { Header } from '../components/Header';
import { FileUploadSection } from '../components/FileUploadSection';
import { DeveloperSection } from '../components/DeveloperSection';
import { BackgroundBeams } from '../components/ui/background-beams';
import { people } from '../data/developerData';
import { IconBrandTabler, IconUserBolt, IconSettings, IconArrowLeft } from '@tabler/icons-react';
import { Sidebar, SidebarBody, SidebarLink, SidebarProvider } from '../components/ui/SidebarDemo';
import { useNavigate } from 'react-router-dom';
import { BsFillPersonFill } from "react-icons/bs";
import userContext from '../components/context/userContext';

export const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useContext(userContext);
  const handleLogout = async () => {
    try {
      localStorage.removeItem('token');
      navigate('/signin');
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  const links = [
    { label: 'Dashboard', href: '#', icon: <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" /> },
    { label: 'Profile', href: navigate('/profile'), icon: <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" /> },
    { label: 'Settings', href: '#', icon: <IconSettings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" /> },
    { label: 'Logout', href: '/signin', icon: <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />, onClick: handleLogout },
  ];

  return (
    <div className="flex overflow-x-hidden">
      <SidebarProvider>
        <div className="flex w-full">
          <Sidebar>
            <SidebarBody>
              <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                <div className="mt-8 flex flex-col gap-2">
                  {links.map((link, idx) => (
                    <SidebarLink
                      key={idx}
                      link={link}
                      onClick={link.label === 'Logout' ? handleLogout : undefined}
                    />
                  ))}
                </div>
              </div>
              <div>
                <SidebarLink
                  link={{
                    label: `${user.firstname} ${user.lastname}`,
                    href: "#",
                    icon: (
                      // <img
                      //   src="https://assets.aceternity.com/manu.png"
                      //   className="h-7 w-7 flex-shrink-0 rounded-full"
                      //   width={50}
                      //   height={50}
                      //   alt="Avatar"
                      // />
                      <BsFillPersonFill style={{color: "white"}}/>
                    ),
                  }}
                />
              </div>
            </SidebarBody>
          </Sidebar>
          <div className="flex-1 relative">
            <BackgroundBeams className="bg-black fixed inset-0 w-screen h-screen -z-10 bg-cover" />
            <Header />
            <FileUploadSection />
            <DeveloperSection people={people} />
          </div>
        </div>
      </SidebarProvider>
    </div>
  );
};
