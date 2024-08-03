import React, { useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi';
import Logo from '../../assets/images/pioneer ventures.jpeg';
import './Header.css';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';

const navLinks = [
  {
    path: '/',
    display: 'Home',
  },
  {
    path: '/about',
    display: 'About Us',
  },
  {
    path: '/services',
    display: 'Our Portfolio',
  },
  {
    path: '/contact',
    display: 'Contact Us',
  }
];

const Header = () => {
  const headerRef = useRef(null);
  const navigate = useNavigate();
  const menuRef = useRef(null);

  const handleStickyHeader = () => {
    window.addEventListener('scroll', () => {
      if (headerRef.current) {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
          headerRef.current.classList.add('sticky_header');
        } else {
          headerRef.current.classList.remove('sticky_header');
        }
      }
    });
  };

  useEffect(() => {
    handleStickyHeader();
    return () => window.removeEventListener('scroll', handleStickyHeader);
  }, []);

  const toggleMenu = () => {
    menuRef.current.classList.toggle('show_menu');
  };

  const handleNavigation = (path) => {
    toggleMenu();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate(path);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target) && !headerRef.current.contains(event.target)) {
      menuRef.current.classList.remove('show_menu');
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);


  return (
    <header ref={headerRef} className="bg-white shadow-md py-4 border-b-2">
      <div className="container mx-auto flex items-center justify-between">
        <span className="md:hidden text-4xl cursor-pointer" onClick={toggleMenu}>
          <BiMenu />
        </span>
        <div className="flex justify-center items-center md:justify-start">
          <Link to={"/"}> <img src={Logo} alt="logo" className="w-24 h-auto mx-auto md:mx-4 my-[-15px]" />
          </Link>
        </div>
        <nav ref={menuRef} className="navigation md:flex md:items-center md:static fixed top-0 left-0 w-full md:w-auto bg-white md:bg-transparent p-5 md:p-0 transition-transform transform md:translate-x-0 translate-x-full md:shadow-none shadow-lg z-40 md:z-0">
          <div onClick={toggleMenu} className='md:hidden text-red-800 absolute top-[35px] bg-gray-200 rounded-xl'>
            <CloseIcon />
          </div>
          <ul className="flex flex-col md:flex-row md:justify-center space-y-4 md:space-y-0 md:space-x-8 mt-4">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  onClick={() => handleNavigation(link.path)}
                  className={(navClass) =>
                    navClass.isActive
                      ? 'text-red-800 font-bold'
                      : 'text-blue-800 font-bold'
                  }>
                  {link.display}
                </NavLink>
      
              </li>
            ))}
          </ul>
        </nav>
      
        </div>
    </header>
  );
};

export default Header;
