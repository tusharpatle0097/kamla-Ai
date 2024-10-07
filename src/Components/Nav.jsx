import React, { useState, useEffect } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import logo from '../assets/logo.svg';

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("#Home");

    const menuBar = () => {
        setMenuOpen(!menuOpen);
    };

    const links = [
        { name: "HOME", link: "#Home" },
        { name: "FEATURES", link: "#Features" },
        { name: "SERVICES", link: "#Services" },
        { name: "ABOUT US", link: "#About" },
        { name: "OUR TEAM", link: "#Team" },
        { name: "CONTACT US", link: "#Contact" },
    ];

    const handleScroll = () => {
        const scrollPosition = window.scrollY;

        links.forEach(link => {
            const section = document.querySelector(link.link);
            if (section) {
                const sectionTop = section.offsetTop - 100; // Adjust offset to match your design
                const sectionHeight = section.offsetHeight;

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    setActiveLink(link.link);
                }
            }
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Function to handle link clicks and update active state
    const handleLinkClick = (link) => {
        setActiveLink(link); // Manually set the active link on click
        setMenuOpen(false); // Close the menu after clicking a link on mobile
    };

    return (
        <>
            <div className='w-full fixed top-0 z-50'
                style={{
                    boxShadow: '0px 1px 10px #999'
                }}
            >
                <nav className="flex items-center justify-between flex-wrap bg-white lg:px-16 lg:py-1">
                    <div className="flex items-center flex-shrink-0 text-white mr-6">
                        <img src={logo} alt="" width={100} />
                        <span className="font-semibold text-xl tracking-tight"></span>
                    </div>
                    <div className="block lg:hidden">
                        <button onClick={menuBar} className="flex items-center px-3 mx-1 py-2 border rounded text-teal-200 border-teal-400 hover:text-black hover:border-white">
                            <div>{menuOpen ? <RxCross1 /> : <GiHamburgerMenu />}</div>
                        </button>
                    </div>
                    <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto lg:text-right ${menuOpen ? 'block' : 'hidden'}`}>
                        <div className="text-sm lg:flex-grow pl-6">
                            {
                                links.map((items, index) => (
                                    <a
                                        href={items.link}
                                        key={index}
                                        onClick={() => handleLinkClick(items.link)} // Update the active link on click
                                        className={`block text-[16px] mt-4 lg:inline-block lg:mt-0 mr-4 ${activeLink === items.link ? 'active-link text-[#A020F0]' : 'text-black'}`} // Conditionally change color when active
                                        style={{ fontFamily: 'system-ui', fontWeight: 'bold' }}
                                    >
                                        {items.name}
                                    </a>
                                ))
                            }
                        </div>

                    </div>
                </nav>
            </div>

            {/* Add styles for smooth underline */}
            <style jsx="true">{`
    a {
        position: relative;
        text-decoration: none;
        color: black; /* Default text color */
    }
    a::after {
        content: '';
        position: absolute;
        width: 0;
        height: 2px;
        background: black; /* Default underline color */
        left: 0;
        bottom: -2px;
        transition: width 0.3s ease, background-color 0.3s ease; /* Smooth transition for underline */
    }
    a.active-link {
        color: #A020F0; /* Change text color for the active link */
    }
    a.active-link::after {
        width: 100%;
        background: #A020F0; /* Change underline color for the active link */
    }
`}</style>

        </>
    );
};

export default Nav;
