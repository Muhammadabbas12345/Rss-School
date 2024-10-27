"use client";

import React from "react";
import Link from "next/link";
import SidebarItem from "@/components/Sidebar/SidebarItem";
import ClickOutside from "@/components/ClickOutside";
import useLocalStorage from "@/hooks/useLocalStorage";
import Image from 'next/image';
import { FaCalendarAlt, FaUser,  FaChalkboardTeacher, FaBell, FaClipboardList,  FaCog, FaBars } from 'react-icons/fa';
import {MdOutlineDashboard } from 'react-icons/md';


interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}
const menuGroups = [
  {
    name: "MENU",
    menuItems: [
      {
        icon: <MdOutlineDashboard className="fill-current" />,
        label: "Dashboard",
        route: "dashboard",
      },
      {
        icon: <FaCalendarAlt className="fill-current" />,
        label: "Calendar",
        route: "/calendar",
      },
      {
        icon: <FaUser  className="fill-current" />,
        label: "Students",
        route: "/students",
      },
      {
        icon: <FaChalkboardTeacher className="fill-current" />,
        label: "Teacher",
        route: "/teacher",
      },
      {
        icon: <FaBell className="fill-current" />,
        label: "Events",
        route: "#",
        children: [
          { label: "School Events", route: "/events/school-events" },
          { label: "Local Events", route: "/events/local-events" },
        ],
      },
      {
        icon: <FaClipboardList className="fill-current" />,
        label: "Results",
        route: "/tables",
      },
      {
        icon: <FaUser  className="fill-current" />,
        label: "Profile",
        route: "/profile",
      },
      {
        icon: <FaCog className="fill-current" />,
        label: "Settings",
        route: "/settings",
      },
    ],
  },
];

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
 const [pageName, setPageName] = useLocalStorage("selectedMenu", "dashboard");

  return (
    <ClickOutside onClick={() => setSidebarOpen(false)}>
  <aside
    className={`fixed left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-blue-600 duration-300 ease-linear dark:bg-boxdark lg:translate-x-0 ${
      sidebarOpen ? "translate-x-0" : "-translate-x-full"
    }`}
  >
    <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
    <Link href="/">
        <Image
          src= "/images/logo/logo.png"
          alt="Right Step Montessori & High School Logo"
          width={150}  
          height={50}  
          priority={true} 
        />
      </Link>

      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-controls="sidebar"
        className="block lg:hidden"
      >
     <FaBars />
      </button>
    </div>

    <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
      <nav className="px-4 py-4  lg:px-6">
        {menuGroups.map((group, groupIndex) => (
          <div key={groupIndex}>
            <h3 className="mb-4 ml-4 text-sm font-semibold text-white dark:text-bodydark2">
              {group.name}
            </h3>

            <ul className="mb-6 flex flex-col gap-1.5 ">
              {group.menuItems.map((menuItem, menuIndex) => (
                <SidebarItem
                  key={menuIndex}
                  item={menuItem}
                  pageName={pageName}
                  setPageName={setPageName}
                />
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </div>
  </aside>
</ClickOutside>

  );
};

export default Sidebar;
