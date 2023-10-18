import logo from "../assets/strap.png";
import arrow from "../assets/down-arrow.png";
import sublinks from "./data";
import { useGlobally } from "./Context";
import bars from "../assets/bars.png";

const Navbar = () => {
  const { openSubmenu, closeSubmenu, openSidebar } = useGlobally();

  const showSubmenu = (e) => {
    const btnText = e.currentTarget.textContent;
    const btnLocation = e.currentTarget.getBoundingClientRect();
    const center = (btnLocation.left + btnLocation.right) / 2;
    const bottom = btnLocation.bottom;
    openSubmenu(btnText, { center, bottom });
  };

  const hideSubmenu = (e) => {
    if (!e.target.classList.contains("capitalize")) closeSubmenu();
  };

  return (
    <div
      onMouseOver={hideSubmenu}
      className="fixed top-0 left-[50%] translate-x-[-50%] text-white px-6 py-4 w-full max-w-7xl items-center flex justify-between md:px-12"
    >
      <section className="text-4xl font-bold flex items-center gap-1">
        <img className="h-8" src={logo} alt="logo" />
        <p>strapi</p>
      </section>
      <section className="flex max-[800px]:hidden">
        {sublinks.map((link, index) => {
          const { page } = link;
          return (
            <button
              onMouseOver={showSubmenu}
              className="capitalize px-4 py-2 flex items-center gap-2 rounded hover:bg-gray-800"
              key={index}
            >
              {page}
              <img
                className="w-[10px] mb-[-3px] capitalize"
                src={arrow}
                alt="arrow"
              />
            </button>
          );
        })}
      </section>
      <button className="bg-[#4945FE] py-2 px-6 rounded transition-all duration-300 hover:scale-105 max-[800px]:hidden">
        Get Started
      </button>
      <button onClick={openSidebar} className="w-8 min-[800px]:hidden">
        <img src={bars} alt="sidebar" />
      </button>
    </div>
  );
};

export default Navbar;
