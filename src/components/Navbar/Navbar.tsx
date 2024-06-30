import { menuItems } from "@/constants/navbar-config";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed  gap-6 top-0 right-4 h-full flex flex-col justify-center items-end">
      {menuItems.map((menuItem, index) => {
        return (
          <Link
            key={index}
            href={menuItem.href}
            passHref
            className="group relative flex flex-col items-center justify-center"
          >
            <div className="flex flex-row-reverse items-center transition-width duration-300 ease-in-out transition-color  overflow-hidden whitespace-nowrap rounded-full group-hover:bg-[#FFB400]">
              <div className="p-3.5 rounded-full bg-gray-300 group-hover:bg-[#FFB400]">
                {menuItem.icon}
              </div>
              <span className="label font-medium group-hover:translate-x-0 group-hover:text-white">
                {menuItem.label}
              </span>
            </div>
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
