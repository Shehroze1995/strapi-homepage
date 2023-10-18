import React from "react";
import sublinks from "./data";
import close from "../assets/close.png";
import { useGlobally } from "./Context";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobally();
  return (
    <div
      className={`absolute top-0 left-0 w-full max-w-md h-screen bg-white p-4 flex flex-col gap-6 transition-all duration-300 ${
        isSidebarOpen ? "translate-x-0" : "translate-x-[-100%]"
      }`}
    >
      {sublinks.map((link, index) => {
        const { page, links } = link;
        return (
          <ul className="" key={index}>
            <h1 className="capitalize text-3xl font-bold mb-2">{page}:</h1>
            {links.map((link, index) => {
              const { label, icon, url } = link;
              return (
                <a
                  className="flex items-center gap-2 mb-1 px-2"
                  href={url}
                  key={index}
                >
                  <img
                    className="h-6 w-6 object-cover mt-[-3px]"
                    src={icon}
                    alt={label}
                  />
                  <p className="capitalize text-2xl text-blue-700">{label}</p>
                </a>
              );
            })}
          </ul>
        );
      })}
      <button onClick={closeSidebar}>
        <img
          src={close}
          className="w-6 absolute top-4 right-4 cursor-pointer"
          alt="close"
        />
      </button>
    </div>
  );
};

export default Sidebar;
