import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../style';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';
import Abdulla_CV from '../assets/download/NEW CV.pdf';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">

        {/* Logo Section */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex items-center">
            ABDULLA &nbsp;&nbsp;<span className="sm:block hidden">|&nbsp;&nbsp; FULL STACK DEVELOPER</span>
          </p>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="list-none hidden sm:flex flex-grow justify-end gap-10">
          {navLinks.map((navLink) => (
            <li
              key={navLink.id}
              className={`${active === navLink.title ? 'text-white' : 'text-secondary'
                } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(navLink.title)}
            >
              <a href={`#${navLink.id}`}>{navLink.title}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Navigation Menu */}
      <div className="flex sm:hidden flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain cursor-pointer"
          onClick={() => setToggle(!toggle)}
        />
        <div
          className={`${!toggle ? 'hidden' : 'flex'} p-6 bg-black absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
        >
          <ul className="list-none flex justify-end items-start flex-col gap-4">
            {navLinks.map((navLink) => (
              <li
                key={navLink.id}
                className={`${active === navLink.title ? 'text-white' : 'text-secondary'} text-[16px] cursor-pointer`}
                onClick={() => { setActive(navLink.title); setToggle(!toggle); }}
              >
                <a href={`#${navLink.id}`}>{navLink.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CV Download */}
      <a
        href={Abdulla_CV}
        download="Abdulla_Full_Stack_CV.pdf"
        className="text-white font-semibold text-[16px] cursor-pointer hover:text-secondary ms-3"
      >
        CV Download
      </a>
    </nav>
  );
};

export default Navbar;
