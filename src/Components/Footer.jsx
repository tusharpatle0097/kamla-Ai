import React from 'react';
import footer from '../assets/foofer_bg1.webp';
import logo from '../assets/logo.svg';

const Footer = () => {
    return (
        <footer
            className="text-white py-[70px]"
            style={{
                backgroundImage: `url(${footer})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="pb-10 container mx-auto pl-5 lg:px-[100px] md:flex md:justify-between" style={{
                borderBottom: '1.25px solid rgba(230, 230, 230, 0.4)',
                marginBottom: '55px'
            }}>
                {/* Logo and Description */}
                <div className="mb-6 md:mb-0">
                    <img src={logo} alt="Kamla ai logo" className="w-40 h-30 mb-4" />
                    {/* <span className="max-w-xs">
                    At KAMLA AI, we deliver innovative IT solutions to <br/> boost your business's efficiency and growth. 
                    
                    <br/> Our expert team is dedicated to  driving your success <br/>through advanced technology and strategic insights.
                    </span> */}
                </div>

                {/* Menus */}
                <div className="flex flex-col md:flex-row md:space-x-8">
                    <span className="max-w-xs">
                        At KAMLA AI, we deliver innovative IT solutions to boost your business's efficiency and growth. Our expert team is dedicated to  driving your success through advanced technology and strategic insights.
                    </span>
                </div>

                <div className="mt-8 md:mt-0 text-white">
                    <h6 className="font-bold uppercase mb-2" style={{
                        borderBottom: '1px solid white',
                        display: 'inline-block'
                    }}>OUR ADDRESS</h6>
                    {/* <p className="mb-2">MIDC Nagpur, Maharashtra 440009</p> */}
                    <p className="mb-2 max-w-xs">807 Celestia, Orbital Empire Phase 3, Jaitala, Nagpur-440036, Maharashtra, India</p>
                  
                </div>

                {/* Contact Info */}
                <div className="mt-8 md:mt-0 text-white">
                    <h6 className="font-bold uppercase mb-2" style={{
                        borderBottom: '1px solid white',
                        display: 'inline-block'
                    }}>Contact Us</h6>
                    {/* <p className="mb-2">MIDC Nagpur, Maharashtra 440009</p> */}
                    <p className="mb-2"><a href="mailto:hr@leocoders.com" className="hover:underline text-white">info@kamlaai.com</a></p>
                    <p className="mb-2"><a href="mailto:rahul@leocoders.com" className="hover:underline text-white">kamlaaiservices@gmail.com</a></p>
                    <p className="mb-2">Ritu (ED): <a href="tel:+918788308817" className="hover:underline text-white">+91 9209245239</a></p>
                    {/* <p>NIsha (SDE): <a href="tel:+919209092567" className="hover:underline text-white">+91 8830628598</a></p> */}
                </div>
            </div>

            {/* Social Icons */}
            <div className="container mx-auto lg:px-4 mt-8 text-center">
                <p className="text-xs ">Copyright © 2024 KAMLA AI All Rights Reserved | Designed by KAMLA AI</p>
            </div>
        </footer>
    );
};

export default Footer;
