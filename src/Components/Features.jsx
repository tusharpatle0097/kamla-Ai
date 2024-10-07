import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import logo1 from '../assets/F5.png';
import logo2 from '../assets/F6.png';
import logo3 from '../assets/F7.png';
import logo4 from '../assets/F8.webp';

const features = [
    { icon: logo1, title: "Custom Software Development", description: "Tailor-made solutions designed to meet your unique business needs and requirements, ensuring optimal functionality and performance." },
    { icon: logo2, title: "User-Friendly Interfaces", description: "Intuitive and engaging user interfaces that enhance user experience and facilitate ease of use, driving higher adoption and satisfaction." },
    { icon: logo3, title: "Scalability", description: "Flexible and scalable software solutions that grow with your business, accommodating increased demand and evolving requirements seamlessly." },
    { icon: logo4, title: "Automated Processes", description: "Automation of repetitive tasks to increase productivity, reduce errors, and streamline your business processes, freeing up valuable resources." },
];

function Feature({ icon, title, description }) {
    const boxVariant = {
        visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
        hidden: { opacity: 0, scale: 0.85 },
    };

    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: false,
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
        <motion.div
            ref={ref}
            variants={boxVariant}
            initial="hidden"
            animate={controls}
            className="flex flex-col items-center p-6 md:p-8 bg-white shadow-lg rounded-lg transform transition-transform duration-500 hover:scale-105"
        >
            <img src={icon} alt={title} className="w-20 h-20 mb-4" />
            <h3 className="text-xl md:text-2xl font-bold text-center mb-2">{title}</h3>
            <p className="text-sm md:text-base text-center text-gray-600">{description}</p>
        </motion.div>
    );
}

function Features() {
    return (
        <section className="bg-gray-100 text-black py-20">
            <div className="container mx-auto">
            <h1 className="gallery-title pb-[30px] pt-[100px] lg:pt-[70px]">OUR FEATURES</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
                    {features.map((feature, index) => (
                        <Feature key={index} {...feature} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Features;




// import { motion, useAnimation } from "framer-motion";
// import { useInView } from 'react-intersection-observer';
// import { useEffect } from 'react';
// import logo1 from '../assets/F5.png';
// import logo2 from '../assets/F6.png';
// import logo3 from '../assets/F7.png';
// import logo4 from '../assets/F8.webp';

// const features = [
//     { icon: logo1, title: "Custom Software Development", description: "Tailor-made solutions designed to meet your unique business needs and requirements, ensuring optimal functionality and performance." },
//     { icon: logo2, title: "User-Friendly Interfaces", description: "Intuitive and engaging user interfaces that enhance user experience and facilitate ease of use, driving higher adoption and satisfaction." },
//     { icon: logo3, title: "Scalability", description: "Flexible and scalable software solutions that grow with your business, accommodating increased demand and evolving requirements seamlessly." },
//     { icon: logo4, title: "Automated Processes", description: "Automation of repetitive tasks to increase productivity, reduce errors, and streamline your business processes, freeing up valuable resources." },
// ];


// function Feature({ icon, title, description }) {
//     const boxVariant = {
//         visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
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
//         <motion.div
//             ref={ref}
//             variants={boxVariant}
//             initial="hidden"
//             animate={controls}
//             className="box"
//         >
//             <div className="flex flex-col items-center p-4 md:p-6 bg-[#f6f6f6] text-black lg:pb-[100px]">
//                 <img src={icon} alt={title} className="w-25 h-20 mb-2" /> {/* Use img tag here */}
//                 <h3 className="text-lg md:text-xl font-semibold">{title}</h3>
//                 <p className="text-sm md:text-base text-center pb-5">{description}</p>
//             </div>
//         </motion.div>
//     );
// }

// function Features() {
//     return (
//         <div className="bg-[#f6f6f6] text-black pt-5">
//             {/* <h2 className="text-2xl md:text-3xl font-bold text-center pb-[30px] pt-[100px] lg:pt-[100px]">OUR FEATURES</h2> */}
//             <h1 className="gallery-title pb-[30px] pt-[100px] lg:pt-[100px]">OUR FEATURES</h1>
//             <div className="flex flex-col md:flex-row justify-around items-center">
//                 {features.map((feature, index) => (
//                     <Feature key={index} {...feature} />
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default Features;
