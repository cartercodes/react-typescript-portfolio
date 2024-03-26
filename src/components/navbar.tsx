import React, { useState } from 'react';
import {
    FaBars,
    FaTimes,
    FaGithub,
    FaLinkedin,
} from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import reactLogo from '../assets/signature.png';
import { Link } from 'react-scroll';
import Resume from '../assets/ATS.pdf';

const menuItems = [
    { name: 'Home', to: '1' },
    { name: 'About', to: '2' },
    { name: 'Skills', to: '3' },
    { name: 'Work', to: '4' },
    { name: 'Contact', to: '5' }
];

const socialLinks = [
    {
        name: 'Linkedin',
        href: 'https://www.linkedin.com/in/mitchcarterd/',
        icon: <FaLinkedin size={30} />,
        backgroundColor: 'bg-blue-600',
    },
    {
        name: 'Github',
        href: 'https://github.com/cartercodes',
        icon: <FaGithub size={30} />,
        backgroundColor: 'bg-[#333333]',
    },
    {
        name: 'Resume',
        href: Resume,
        icon: <BsFillPersonLinesFill size={30} />,
        backgroundColor: 'bg-[#565f69]',
    },
];

const Navbar: React.FC = () => {
    const [nav, setNav] = useState(false);
    const handleClick = (): void => setNav(!nav);

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
            <div>
                <img src={reactLogo} alt='Logo Image' style={{ width: '200px' }} />
            </div>

            {/* menu */}
            <ul className='hidden md:flex'>
                {menuItems.map((item, index) => (
                    <li key={index}>
                        <Link to={item.to} smooth={true} duration={500} className="hover:text-pink-600">
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Hamburger */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* Mobile menu */}
            <ul
                className={
                    !nav
                        ? 'hidden'
                        : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
                }
            >
                {menuItems.map((item, index) => (
                    <li key={index} className='py-6 text-4xl'>
                        <Link onClick={handleClick} to={item.to} smooth={true} duration={500}>
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Social icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    {socialLinks.map((link, index) => (
                        <li
                            className={`w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 ${link.backgroundColor}`}
                            key={index}
                        >
                            <a
                                className='flex justify-between items-center w-full text-gray-300'
                                href={link.href}
                            >
                                {link.name} {link.icon}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;