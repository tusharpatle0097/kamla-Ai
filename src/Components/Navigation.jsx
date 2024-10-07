import React, { useState } from 'react';
import logo from '../assets/logo AI.PNG';  

const Navigation = () => {
    const links = [
        { name: "HOME", link: "/" },
        { name: "FEATURES", link: "/" },
        { name: "ABOUT", link: "/" },
        { name: "SERVICE", link: "/" },
        { name: "BLOG'S", link: "/" },
        { name: "CONTACT", link: "/" },
    ];
    const [open, setOpen] = useState(false);

    return (
        <nav className='bg-slate-900 shadow-md w-full fixed top-0 left-0 z-50  py-[15px]'>
            <div className='md:flex items-center justify-between py-4 md:px-10:bg-red-500 px-4 '>
                <div className='font-bold text-xl cursor-pointer flex items-center text-white'>
                    <img src={logo} alt="KAPS Logo" width={30} className="mr-2" />
                    KAPS
                </div>

                <div onClick={() => setOpen(!open)} className='text-3xl absolute right-4 top-4 cursor-pointer md:hidden text-white'>
                    <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                </div>

                <ul className={`absolute md:static  w-full md:w-auto md:flex items-center md:pb-0 pb-4 transition-all duration-500 ease-in ${open ? 'top-16 right-0' : 'top-[-490px]'}`}>
                    {links.map((link, index) => (
                        <li key={index} className='md:ml-8 text-[18px] md:my-0 my-7 text-center'>
                            <a href={link.link} className='text-white hover:text-gray-400 duration-500  block'>{link.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;
