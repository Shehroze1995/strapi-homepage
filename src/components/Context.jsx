import React, { useContext, useState } from "react";
import sublinks from "./data";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [location, setLocation] = useState({});
  const [page, setPage] = useState({ page: "", links: [] });

  const openSubmenu = (text, coordinates) => {
    setPage(sublinks.find((link) => link.page == text));
    setLocation(coordinates);
    setIsSubmenuOpen(true);
  };

  const closeSubmenu = () => setIsSubmenuOpen(false);

  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <AppContext.Provider
      value={{
        isSubmenuOpen,
        openSubmenu,
        closeSubmenu,
        location,
        page,
        isSidebarOpen,
        openSidebar,
        closeSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobally = () => useContext(AppContext);
