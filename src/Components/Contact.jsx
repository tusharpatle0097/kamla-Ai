import React, { useRef, useState, useEffect } from 'react';
import ContactImg from '../assets/contact14.jpg';
import ContactImg2 from '../assets/footer-bg2.webp';
import emailjs from '@emailjs/browser';
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const loaderDotStyle = {
    width: '1rem',
    height: '1rem',
    margin: '0 0.2rem',
    borderRadius: '50%',
    background: 'linear-gradient(45deg, #FF5733, #C70039)',
    animation: 'bounce 1.5s infinite',
};

const bouncingDotsContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};

const spinKeyframes = `
@keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
    }
    40% {
        transform: translateY(-1rem);
    }
    60% {
        transform: translateY(-0.5rem);
    }
}
`;

const Contact = () => {
    const boxVariant = {
        visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
        hidden: { opacity: 0, scale: 0 },
    }

    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.5,
        delay: 0.5,
        exitThreshold: 0.5
    });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [controls, inView]);

    const form = useRef();
    const [notification, setNotification] = useState({ message: '', type: '' });
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        message: '',
    });

    const [errors, setErrors] = useState({
        user_name: '',
        user_email: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        if (name === 'user_name' && value.trim() !== '') {
            setErrors((prevErrors) => ({ ...prevErrors, user_name: '' }));
        }

        if (name === 'user_email') {
            if (value.trim() !== '' && value.includes('@')) {
                setErrors((prevErrors) => ({ ...prevErrors, user_email: '' }));
            } else if (value.trim() === '') {
                setErrors((prevErrors) => ({ ...prevErrors, user_email: 'Please enter your email.' }));
            }
        }
    };

    const validateForm = () => {
        let isValid = true;
        const newErrors = { user_name: '', user_email: '' };

        if (formData.user_name.trim() === '') {
            newErrors.user_name = 'Please enter your name.';
            isValid = false;
        }

        if (formData.user_email.trim() === '') {
            newErrors.user_email = 'Please enter your email.';
            isValid = false;
        } else if (!formData.user_email.includes('@')) {
            newErrors.user_email = 'Please enter a valid email address.';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const sendEmail = (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setLoading(true);

        emailjs
            .sendForm('service_t7h4q5e', 'template_wopf02q', form.current, {
                publicKey: 'Gh-dVWW9QSRE7L7Qx',
            })
            .then(
                () => {
                    setNotification({ message: 'Thank you for reaching out to us. We will review your message and respond as soon as possible.!', type: 'success' });
                    form.current.reset();
                    setFormData({ user_name: '', user_email: '', message: '' });
                },
                (error) => {
                    setNotification({ message: `Failed to send email: ${error.text}`, type: 'error' });
                }
            )
            .finally(() => {
                setLoading(false);
            });
    };

    useEffect(() => {
        if (notification.message) {
            const timer = setTimeout(() => {
                setNotification({ message: '', type: '' });
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [notification.message]);

    return (
        <>
            <style>{spinKeyframes}</style>
            <div
                className="text-white py-[70px]"
                style={{
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <section className="text-gray-700 body-font relative">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-col lg:flex-row">
                            <div className="lg:w-1/2 w-full flex justify-center p-6">
                                <div className="flex flex-col items-center">
                                    <div className="text-center">
                                        <p style={{ fontSize: '35px', textShadow: '0 4px 7.2px rgb(0 0 0 / .48)', fontWeight: 'bold' }}>
                                            GET IN TOUCH TODAY
                                        </p>
                                        <p style={{ fontSize: '29px', fontWeight: '600', color: '#03a4f4', textShadow: '0 4px 7.2px rgb(148 222 255)', marginTop: '15px', marginBottom: '15px' }}>
                                            BOOST YOUR BUSINESS TO NEXT LEVEL
                                        </p>
                                        <p style={{ fontSize: '20px', fontWeight: '500' }}>
                                            Implement and build your idea with us today.
                                        </p>
                                    </div>

                                    <div className="mt-6"> {/* Add some margin above the image */}
                                        <motion.div
                                            ref={ref}
                                            variants={boxVariant}
                                            initial="hidden"
                                            animate={controls}
                                            className="box"
                                        >
                                            <img src={ContactImg} style={{ height: "250px", filter: 'blur(0.9px)' }} alt="Office" className="w-full" />
                                        </motion.div>
                                    </div>
                                </div>

                            </div>

                            <div className="lg:w-1/2 w-full lg:pl-10 mt-10 lg:mt-0 flex flex-col justify-center" style={{
                                backgroundImage: `url(${ContactImg2})`, backgroundSize: 'cover', backgroundPosition: 'center',
                                borderRadius: '10px',
                                padding: '20px', // Add some padding for better spacing
                            }}>
                                <div className="flex flex-col text-center w-full mb-12">
                                    <h1 className="gallery-title-text lg:pt-[20px] pt-[2px]">CONTACT US</h1>
                                </div>
                                <form ref={form} onSubmit={sendEmail}>
                                    <div className="lg:w-3/4 md:w-2/3 mx-auto">
                                        <div className="flex flex-wrap -m-2">
                                            <div className="p-2 w-full md:w-1/2">
                                                <div className="relative">
                                                    <label htmlFor="name" className="leading-7 text-sm text-white" style={{ borderRadius: '25px' }}>
                                                        Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="name"
                                                        name="user_name"
                                                        value={formData.user_name}
                                                        onChange={handleInputChange}
                                                        className="rounded-[25px] w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                                    />
                                                    {errors.user_name && (
                                                        <p className="text-red-500 text-xs mt-1">{errors.user_name}</p>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="p-2 w-full md:w-1/2">
                                                <div className="relative">
                                                    <label htmlFor="email" className="leading-7 text-sm text-white">
                                                        Email
                                                    </label>
                                                    <input
                                                        type="email"
                                                        id="email"
                                                        name="user_email"
                                                        value={formData.user_email}
                                                        onChange={handleInputChange}
                                                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out rounded-[25px]"
                                                    />
                                                    {errors.user_email && (
                                                        <p className="text-red-500 text-xs mt-1">{errors.user_email}</p>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="p-2 w-full">
                                                <div className="relative">
                                                    <label htmlFor="message" className="leading-7 text-sm text-white">
                                                        Message
                                                    </label>
                                                    <textarea
                                                        id="message"
                                                        name="message"
                                                        value={formData.message}
                                                        onChange={handleInputChange}
                                                        className="rounded-[25px] w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-24 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                                    ></textarea>
                                                </div>
                                            </div>
                                            <div className="p-2 w-full">
                                                <button
                                                    type="submit"
                                                    className="rounded-[25px] flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                                                >
                                                    Submit
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                {/* Loader */}
                                {loading && (
                                    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
                                        <div style={bouncingDotsContainerStyle}>
                                            <div style={{ ...loaderDotStyle, animationDelay: '0s' }}></div>
                                            <div style={{ ...loaderDotStyle, animationDelay: '0.2s' }}></div>
                                            <div style={{ ...loaderDotStyle, animationDelay: '0.4s' }}></div>
                                        </div>
                                    </div>
                                )}
                                {/* Notification Message */}
                                {notification.message && (
                                    <div
                                        className={`fixed inset-0 flex items-center justify-center z-50`}
                                        style={{
                                            backgroundColor: 'rgba(0,0,0,0.5)',
                                        }}
                                    >
                                        <div
                                            className={`p-4 rounded-lg text-white ${notification.type === 'success' ? 'bg-green-500' : 'bg-red-500'
                                                }`}
                                        >
                                            {notification.message}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        </>
    );
}

export default Contact;
