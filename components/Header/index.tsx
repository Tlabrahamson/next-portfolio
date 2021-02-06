import React from "react";

const Header = () => {
  return (
    <header className="md:flex justify-between align-center py-4 px-8">
      <h1>TA</h1>
      <div className="flex justify-center">
        <nav className="fixed w-9/12 bg-gray-800 bottom-8 flex justify-center py-4 gap-4 rounded-lg text-white md:static md:text-black md:bg-white md:py-0">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Projects</a>
          <a href="">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
