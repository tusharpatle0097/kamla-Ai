import React from 'react';
import { MdLocationOn } from 'react-icons/md';

const AboutUs = () => {
    return (
        <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mt-24">
                <div className="w-full lg:w-6/12 px-4">
                    <h2 className="text-4xl font-semibold">About Us</h2>
                    <p className="text-lg leading-relaxed m-4 text-gray-600">
                        We are innovators in the IT industry, committed to providing cutting-edge solutions...
                    </p>
                </div>
            </div>
            <div className="flex flex-wrap justify-center gap-10 mt-10">
                <div className="w-full md:w-6/12 lg:w-3/12 p-4 text-center">
                    <div className="text-green-600 p-3 w-12 h-12 mb-1 shadow-lg rounded-full bg-white">
                        <MdLocationOn size="24px" />
                    </div>
                    <h6 className="text-xl font-semibold">Our Headquarters</h6>
                    <p className="mt-2 mb-4 text-gray-600">
                        Located in the heart of Silicon Valley...
                    </p>
                </div>
                <div className="w-full md:w-6/12 lg:w-3/12 p-4 text-center">
                </div>
            </div>
        </div>
    )
}

export default AboutUs