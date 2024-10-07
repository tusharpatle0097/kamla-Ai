import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import AboutImg from '../assets/about.jpg';

const About = () => {
    const boxVariant = {
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
        hidden: { opacity: 0, scale: 0.85 },
    };

    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [controls, inView]);

    return (
        <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-4">
            <h1 className="gallery-title lg:pt-[100px] pt-[100px]">ABOUT US</h1>

                <div className="flex flex-col md:flex-row items-center">
                    {/* Image Section */}
                    <div className="w-full md:w-1/2 lg:w-2/5 p-4">
                        <motion.div
                            ref={ref}
                            variants={boxVariant}
                            initial="hidden"
                            animate={controls}
                        >
                            <img
                                src={AboutImg}
                                alt="Our Office"
                                className="w-full h-auto lg:h-[400px] rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105"
                            />
                        </motion.div>
                    </div>

                    {/* Content Section */}
                    <div className="w-full md:w-1/2 lg:w-3/5 p-8 lg:px-16">
                        <p className="text-lg text-justify leading-relaxed text-gray-700 mb-6">
                            At <span className="font-semibold text-blue-700">KAMLA AI</span>, we are dedicated to transforming innovative ideas into exceptional software solutions. Established with a passion for technology and a commitment to excellence, our team of experienced developers, designers, and strategists work collaboratively to deliver cutting-edge software tailored to meet the unique needs of our clients. We pride ourselves on our agile approach, ensuring flexibility and adaptability in a rapidly evolving digital landscape.
                        </p>
                        <p className="text-lg text-justify leading-relaxed text-gray-700 mb-6">
                            Our mission is to empower businesses with powerful, intuitive, and reliable software that drives growth and enhances operational efficiency. With a focus on quality, transparency, and customer satisfaction, KAMLA AI is your trusted partner in navigating the complexities of the modern tech world.
                        </p>

                        <h2 className="text-2xl font-bold text-blue-700 mb-4">
                            Why Choose Us?
                        </h2>

                        <ul className="list-none grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-600">
                            <div>
                                <li className="flex items-center">
                                    <span className="mr-2">✔</span> Expert Team
                                </li>
                                <li className="flex items-center">
                                    <span className="mr-2">✔</span> Client-Centric Approach
                                </li>
                                <li className="flex items-center">
                                    <span className="mr-2">✔</span> Agile Methodology
                                </li>
                                <li className="flex items-center">
                                    <span className="mr-2">✔</span> Transparent Communication
                                </li>
                            </div>
                            <div>
                                <li className="flex items-center">
                                    <span className="mr-2">✔</span> Dedicated Support
                                </li>
                                <li className="flex items-center">
                                    <span className="mr-2">✔</span> Competitive Pricing
                                </li>
                                <li className="flex items-center">
                                    <span className="mr-2">✔</span> Innovative Solutions
                                </li>
                                <li className="flex items-center">
                                    <span className="mr-2">✔</span> Customer Satisfaction
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;



// import { motion, useAnimation } from "framer-motion";
// import { useInView } from 'react-intersection-observer';
// import { useEffect } from 'react';
// import AboutImg from '../assets/about.jpg';

// const About = () => {
//     const boxVariant = {
//         visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
//         hidden: { opacity: 0, scale: 0 },
//     }

//     const controls = useAnimation();
//     const [ref, inView] = useInView({
//         triggerOnce: false,
//         threshold: 0.5,
//         delay: 0.5,
//         exitThreshold: 0.5
//     });

//     useEffect(() => {
//         if (inView) {
//             controls.start("visible");
//         } else {
//             controls.start("hidden");
//         }
//     }, [controls, inView]);

//     return (
//         <>
//             <div className="container mx-auto px-4 bg-gray-50 mt-3">
//                 {/* <h2 className="text-[30px] font-bold text-center text-black py-6">ABOUT US</h2> */}
//                 <h1 className="gallery-title lg:pt-[100px] pt-[100px]">ABOUT US</h1>


//                 <div className="flex flex-col md:flex-row justify-center items-center md:items-start">
//                     <div className="p-4 w-full md:w-1/2 lg:w-2/5">
//                         <motion.div
//                             ref={ref}
//                             variants={boxVariant}
//                             initial="hidden"
//                             animate={controls}
//                             className="box"
//                         >
//                             <img src={AboutImg}  alt="Office" className="w-full lg:h-[360px] rounded-lg shadow-lg" />
//                         </motion.div>
//                     </div>

//                     <div className="lg:px-20 py-8 mt-10 md:mt-0 w-full md:w-1/2 lg:w-3/5 ">
//                         <p className="text-justify text-gray-600">At KAMLA AI, we are dedicated to transforming innovative ideas into exceptional software solutions. Established with a passion for technology and a commitment to excellence, our team of experienced developers, designers, and strategists work collaboratively to deliver cutting-edge software tailored to meet the unique needs of our clients. We pride ourselves on our agile approach, ensuring flexibility and adaptability in a rapidly evolving digital landscape. Our mission is to empower businesses with powerful, intuitive, and reliable software that drives growth and enhances operational efficiency. With a focus on quality, transparency, and customer satisfaction, KAMLA AI is your trusted partner in navigating the complexities of the modern tech world.</p>
//                         <h2 className="text-xl md:text-2xl font-bold my-4 text-blue-700">Why Choose Us?</h2>
//                         <ul className="list-none space-y-4">
//                             <div className="grid grid-cols-2 gap-8 ">
//                                 <div>
//                                     <li>✔ Expert Team</li>
//                                     <li>✔ Client-Centric Approach</li>
//                                     <li>✔ Agile Methodology</li>
//                                     <li>✔ Transparent Communication</li>
//                                 </div>
//                                 <div>
//                                     <li>✔ Dedicated Support</li>
//                                     <li>✔ Competitive Pricing</li>
//                                     <li>✔ Innovative Solutions</li>
//                                     <li>✔ Customer Satisfaction</li>
//                                 </div>
//                             </div>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default About;
