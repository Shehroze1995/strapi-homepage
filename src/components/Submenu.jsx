import React, { useEffect, useRef } from "react";
import { useGlobally } from "./Context";

const Submenu = () => {
  const {
    isSubmenuOpen,
    location,
    page: { page, links },
  } = useGlobally();

  const container = useRef(null);

  useEffect(() => {
    const { center, bottom } = location;
    container.current.style.left = `${center}px`;
    container.current.style.top = `${bottom}px`;
  }, [location]);

  return (
    <div
      ref={container}
      className={`absolute top-[72px] left-[50%] translate-x-[-50%] bg-white p-6 rounded transition-all duration-300 arrow ${
        isSubmenuOpen ? "block " : "hidden"
      }`}
    >
      <p className="capitalize font-bold opacity-60">{page}</p>
      <ul className="flex gap-6 mt-4">
        {links.map((link, index) => {
          const { icon, url, label } = link;
          return <a className="flex items-center gap-1" href={url} key={index}>
            <img className="h-5" src={icon} alt={label} />
            <p className="capitalize text-blue-800 font-extrabold hover:text-black">{label}</p>
          </a>
        })}
      </ul>
    </div>
  );
};

export default Submenu;
