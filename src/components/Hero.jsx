import React from "react";
import { useGlobally } from "./Context";

const Hero = () => {
  const { closeSubmenu } = useGlobally();
  return (
    <div onMouseOver={closeSubmenu} className="w-full h-screen bg-[#121180] text-white text-center flex flex-col items-center justify-center gap-4 md:gap-8">
      <section className="text-3xl md:text-5xl font-bold">
        <p>Manage Any Content.</p>
        <p>Anywhere.</p>
      </section>
      <section className="opacity-60">
        <p>The leading open-source headless CMS.</p>
        <p>100% JavaScript / TypeScript and fully customizable.</p>
      </section>
      <div className="flex flex-col gap-2">
      <button className="bg-purple-500 font-bold py-2 px-6 rounded transition-all duration-300 hover:scale-105 min-[800px]:hidden">
        Get Started
      </button>
        <button className="bg-white text-purple-800 py-2 px-6 rounded font-semibold transition-all duration-300 hover:scale-105">
          Try the live demo
        </button>
      </div>
    </div>
  );
};

export default Hero;
