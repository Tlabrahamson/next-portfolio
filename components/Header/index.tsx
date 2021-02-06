import React from "react";
// I want to create an icon for each nav link

const Header = () => {
  return (
    <header className="md:flex justify-between align-center py-4 px-8 bg-gray-800 text-white">
      <h1 className="text-2xl">TA</h1>
      <div className="flex justify-center">
        <nav className="fixed w-11/12 bg-gray-800 bottom-8 flex justify-evenly py-4 gap-4 rounded-lg md:static md:py-0">
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
