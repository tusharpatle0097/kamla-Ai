import { useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight, Code, Globe, Server, Cloud, Shield, Brain, ChevronRightCircle } from "lucide-react";
import webDev from '../../src/assets/Web-Development.jpg';

const services = [
  {
    id: 1,
    name: "Software Development",
    discription: "We offer comprehensive software development services, including custom software solutions tailored to your specific business needs. Our expertise spans dynamic web application development, mobile app development for iOS and Android, game developement and SEO. We provide seamless API development and integration, intuitive UI/UX design, and leverage agile methodologies to deliver high-quality software quickly. Our DevOps and continuous integration practices ensure faster deployment and greater reliability. Additionally, we specialize in legacy system modernization, data analytics, and business intelligence solutions to empower businesses with actionable insights. We emphasize rigorous quality assurance and testing, robust security measures, and adherence to industry compliance standards.",
    keyPoints: [
      { icon: Code, text: "Website Developement", image1: webDev },
      { icon: Server, text: "App Developement", image1: '/app-development-image.jpg' },
      { icon: Globe, text: "Game Developement", image1: "/game-development-image.jpg" },
      { icon: Globe, text: "SEO", image1: "/seo.jpg" }

    ],
    imageUrl: "https://media.istockphoto.com/id/1371339413/photo/co-working-team-meeting-concept-businessman-using-smart-phone-and-digital-tablet-and-laptop.jpg?s=612x612&w=0&k=20&c=ysEsVw3q2axYt3oVZAuQjtHRlN3lY-U_e0ikK5yKIXQ=", // Replace with actual image path
  },
  {
    id: 2,
    name: "SEO & Digital Marketing Solutions",
    discription: "Boost your brand's online presence and drive business growth with our comprehensive SEO and digital marketing solutions. We use advanced search engine optimization techniques to improve your website's rankings, combined with targeted pay-per-click campaigns to maximize advertising ROI. Our team manages your social media profiles and strategies, fostering audience engagement and expanding your digital reach. Through ongoing performance tracking and analytics, we continually optimize campaigns for the best results. Whether you're a startup or an established enterprise, our tailored, data-driven strategies enhance visibility, attract more customers, and drive organic traffic while building lasting brand loyalty.",
    keyPoints: [
      { icon: Globe, text: "Advanced SEO Techniques", image1: "/adv.jpg" },
      { icon: Server, text: "Pay-per-click Campaigns", image1: "/ppc.jpg" },
      { icon: Brain, text: "Social Media Strategy", image1: "/Social_Media.jpg" },
      { icon: Brain, text: "Community management", image1: "/community-management.jpg" }
    ],
    imageUrl: "https://kyrosdigital.in/wp-content/uploads/2022/10/6-technical-seo-tips-to-instantly-boost-your-traffic.jpg", // Replace with actual image path
  },
  {
    id: 3,
    name: "Cloud Services",
    discription: "Our cloud services offer scalable, secure, and cost-effective solutions for data storage, computing, and application needs. We provide tailored cloud migration strategies to ensure a smooth transition with minimal disruption. Our comprehensive management and support allow you to focus on your core business while we manage your cloud infrastructure. Our solutions enhance flexibility, enabling real-time collaboration from anywhere, boosting productivity and innovation. With advanced security measures like encryption and industry compliance, we protect your sensitive data. Our analytics tools deliver insights to support data-driven decisions. Whether public, private, or hybrid, we empower your business to thrive in the digital era.",
    keyPoints: [
      { icon: Globe, text: "Infrastructure as a Service", image1: "/laas.jpg" },
      { icon: Server, text: "Platform as a Service", image1: "/paas.jpg" },
      { icon: Brain, text: "Software as a Service", image1: "/saas.jpg" },
      { icon: Brain, text: "Cloud Storage", image1: "/storage.jpg" }
    ],
    imageUrl: "https://kyrosdigital.in/wp-content/uploads/2022/10/6-technical-seo-tips-to-instantly-boost-your-traffic.jpg", // Replace with actual image path
  },
  {
    id: 4,
    name: "Business Services",
    discription: "We provide tailored business services to enhance your operations, including strategic consulting, process optimization, and administrative support. Our solutions streamline workflows, improve efficiency, and drive growth, allowing you to focus on core objectives. We also offer data analysis for informed decision-making, risk management strategies to protect assets, and technology integration to modernize processes. Our expert team works closely with you to understand your challenges and develop customized strategies aligned with your vision. By fostering innovation and collaboration, we empower your organization to adapt to market changes and achieve sustainable success, ensuring you thrive in today’s competitive landscape.",
    keyPoints: [
      { icon: Globe, text: "Strategic Consulting", image1: "/sc.jpg" },
      { icon: Server, text: "Process Optimization", image1: "/po.jpg" },
      { icon: Brain, text: "Administrative Support", image1: "/as.jpg" },
      { icon: Brain, text: "Technology Integration", image1: "/ti.jpg" }
    ],
    imageUrl: "https://kyrosdigital.in/wp-content/uploads/2022/10/6-technical-seo-tips-to-instantly-boost-your-traffic.jpg", // Replace with actual image path
  },
  {
    id: 5,
    name: "Outsourcing Services",
    discription: "We offer comprehensive outsourcing services to optimize your business operations, giving you access to top-tier IT expertise and support. Our solutions include software development, IT support, and system maintenance, tailored to your specific needs for flexibility and scalability. With a focus on efficiency, data security, and compliance, we ensure your sensitive information is protected. Our dedicated project management fosters clear communication and alignment with your goals. With competitive pricing and a commitment to quality, we help you stay ahead in today’s fast-paced market, allowing you to concentrate on driving innovation and achieving your objectives.",
    keyPoints: [
      { icon: Globe, text: "Customer Support Services:", image1: "/css.jpg" },
      { icon: Server, text: "IT Services", image1: "/its.jpg" },
      { icon: Brain, text: "Accounting and Financial Services", image1: "/afs.jpg" },
      { icon: Brain, text: "Human Resources (HR) Services", image1: "/hrs.jpg" }
    ],
    imageUrl: "https://kyrosdigital.in/wp-content/uploads/2022/10/6-technical-seo-tips-to-instantly-boost-your-traffic.jpg", // Replace with actual image path
  },

];

// Array of background colors for each slide
const backgroundColors = ['#040720', 'rgb(0 90 85)', 'rgb(0 94 108)', 'rgb(101 10 90)', 'rgb(114 87 0)'];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [expanded, setExpanded] = useState(Array(services.length).fill(false));

  const nextSlide = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
    }
  }, [isAnimating, services.length]);

  const prevSlide = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length);
    }
  }, [isAnimating, services.length]);

  const toggleExpand = (index) => {
    const newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index];
    setExpanded(newExpanded);
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 300);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const goToSlide = (index) => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex(index);
    }
  };

  return (
    <>
      <h1 className="gallery-title pb-[30px] pt-[70px] lg:pt-[100px]">OUR SERVICES</h1>
      <div className="relative w-full lg:px-10 py-8 " style={{ background: '#fcedff' }}>
        <div className="overflow-hidden">
          <div
            className="flex  transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {
              services.map((service, index) => {
                return (
                  <div key={service.id} className="w-full flex-shrink-0">
                    <div
                      className="rounded-lg  items-center h-full w-full"
                    >
                      <div className="grid lg:grid-cols-[30%_70%] grid-cols-[100%] px-5">
                        <div
                          className="grid lg:grid-cols-1 grid-cols-1  px-5 relative"
                          style={{ backgroundColor: backgroundColors[index % backgroundColors.length] }}
                        >
                          <h2
                            className="text-[35px] mt-3 font-bold text-white relative z-10"
                            style={{
                              // color: 'rgb(188 0 255)',
                              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
                              transition: 'transform 0.3s, text-shadow 0.3s',
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.transform = 'scale(1.05)';
                              e.currentTarget.style.textShadow = '4px 4px 8px rgba(0, 0, 0, 0.5)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.transform = 'scale(1)';
                              e.currentTarget.style.textShadow = '2px 2px 4px rgba(0, 0, 0, 0.3)';
                            }}
                          >
                            {service.name}
                          </h2>
                          <p className="mt-3 text-white">
                            {expanded[index] ? service.discription : `${service.discription.substring(0, 410)}...`}
                          </p>

                          {/* See More Button UI similar to the provided image */}
                          <button
                            onClick={() => toggleExpand(index)}
                            className="flex pt-[20px] pb-[20px] md:pt-0 md:pb-0 bg-transparent border-0 text-white z-20 cursor-pointer"
                            style={{ position: "relative", zIndex: "10", cursor: "pointer" }}
                          >
                            <ChevronRightCircle className="text-white w-6 h-6 mr-2" />
                            <span className="underline">{expanded[index] ? 'See Less' : 'See More'}</span>
                          </button>
                        </div>
                        <div>
                          <div className="grid lg:grid-cols-2 grid-cols-1 ">
                            {service.keyPoints.map((point, idx) => (
                              <div
                                key={idx}
                                className="items-center text-lg  h-25"
                                style={{
                                  backgroundImage: `url(${point.cardImageUrl})`,
                                  backgroundSize: "cover",
                                  backgroundPosition: "center",
                                }}
                              >
                                <div className="absolute inset-0 opacity-20 blur-[20px] z-0"></div>
                                <div className="relative z-10 flex items-center text-black font-bold">
                                  <div className="relative w-full h-64">
                                    <img
                                      src={point.image1}
                                      alt="Sample"
                                      className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                                      <span
                                        className="text-white"
                                        style={{
                                          color: '#FFFFFF',
                                          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7), 2px 2px 4px rgba(0, 0, 0, 0.5), 3px 3px 6px rgba(0, 0, 0, 0.3)',
                                          padding: '2px 5px',
                                          borderRadius: '5px',
                                          backgroundColor: 'rgba(0, 0, 0, 0.6)',
                                          transition: 'transform 0.3s, text-shadow 0.3s',
                                        }}
                                        onMouseEnter={(e) => {
                                          e.currentTarget.style.transform = 'scale(1.1)';
                                          e.currentTarget.style.textShadow = '1px 1px 3px rgba(0, 0, 0, 1), 4px 4px 8px rgba(0, 0, 0, 0.7), 5px 5px 10px rgba(0, 0, 0, 0.5)';
                                        }}
                                        onMouseLeave={(e) => {
                                          e.currentTarget.style.transform = 'scale(1)';
                                          e.currentTarget.style.textShadow = '1px 1px 2px rgba(0, 0, 0, 0.7), 2px 2px 4px rgba(0, 0, 0, 0.5), 3px 3px 6px rgba(0, 0, 0, 0.3)';
                                        }}
                                      >
                                        {point.text}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            }
          </div>
        </div>
        <button
          onClick={prevSlide}
          className="absolute bg-black left-0 top-1/2 transform -translate-y-1/2  rounded-full p-4 shadow-md  focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 text-white " />
        </button>
        <button
          onClick={nextSlide}
          className="absolute bg-black right-0 top-1/2 transform -translate-y-1/2  rounded-full p-4 shadow-md focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </button>
        <div className="flex justify-center mt-4">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full mx-1 ${index === currentIndex ? "bg-black" : "bg-gray-400"
                }`}
            />
          ))}
        </div>
      </div>
    </>
  );
}






// import { useState, useCallback, useEffect } from "react";
// import { ChevronLeft, ChevronRight, Code, Globe, Server, Cloud, Shield, Brain } from "lucide-react";
// import cardBackgraound from '../../src/assets/bg-color-1.png'
// import webDev from '../../src/assets/Web-Development.jpg'
// import service from '../assets/service-image.jpg'

// // Array with service details (including image URL and description)
// const services = [
//   {
//     id: 1,
//     name: "Software Development",
//     discription: "We offer comprehensive software development services, including custom software solutions tailored to your specific business needs. Our expertise spans dynamic web application development, mobile app development for iOS and Android, game developement and SEO. We provide seamless API development and integration, intuitive UI/UX design, and leverage agile methodologies to deliver high-quality software quickly. Our DevOps and continuous integration practices ensure faster deployment and greater reliability. Additionally, we specialize in legacy system modernization, data analytics, and business intelligence solutions to empower businesses with actionable insights. We emphasize rigorous quality assurance and testing, robust security measures, and adherence to industry compliance standards. Our microservices architecture allows for modular, scalable applications that enhance flexibility and simplify maintenance.",
//     keyPoints: [
//       { icon: Code, text: "Website Developement", image1: webDev },
//       { icon: Server, text: "App Developement", image1: '/app-development-image.jpg' },
//       { icon: Globe, text: "Game Developement", image1: "/game-development-image.jpg" },
//       { icon: Globe, text: "SEO", image1: "/seo.jpg" }

//     ],
//     imageUrl: "https://media.istockphoto.com/id/1371339413/photo/co-working-team-meeting-concept-businessman-using-smart-phone-and-digital-tablet-and-laptop.jpg?s=612x612&w=0&k=20&c=ysEsVw3q2axYt3oVZAuQjtHRlN3lY-U_e0ikK5yKIXQ=", // Replace with actual image path
//   },
//   {
//     id: 2,
//     name: "SEO & Digital Marketing Solutions",
//     discription: "Boost your brand's online presence and drive more business with our all-inclusive SEO and digital marketing solutions. We utilize cutting-edge search engine optimization techniques to enhance your website's rankings, complemented by targeted pay-per-click campaigns that maximize your advertising ROI. Our dedicated team manages your social media profiles and strategies to foster effective audience engagement and expand your digital footprint. With ongoing performance tracking and analytical insights, we continuously optimize all campaigns for optimal results. By offering comprehensive solutions, we ensure a data-driven approach that elevates your brand's visibility and attracts more customers. Our tailored strategies are designed to meet the unique needs of your business, whether you're a startup or an established enterprise. We focus on creating valuable content that resonates with your target audience, driving organic traffic and building brand loyalty. ",
//     keyPoints: [
//       { icon: Globe, text: "Advanced SEO Techniques", image1: "/adv.jpg" },
//       { icon: Server, text: "Pay-per-click Campaigns", image1: "/ppc.jpg" },
//       { icon: Brain, text: "Social Media Strategy", image1: "/Social_Media.jpg" },
//       { icon: Brain, text: "Community management", image1: "/community-management.jpg" }
//     ],
//     imageUrl: "https://kyrosdigital.in/wp-content/uploads/2022/10/6-technical-seo-tips-to-instantly-boost-your-traffic.jpg", // Replace with actual image path
//   },
//   {
//     id: 3,
//     name: "Cloud Services",
//     discription: "Our cloud services provide scalable, secure, and cost-effective solutions for your data storage, computing, and application needs. We offer tailored cloud migration strategies to ensure a smooth transition, minimizing downtime and disruption. Our comprehensive management and support services allow you to focus on your core business while we handle the complexities of cloud infrastructure. Additionally, our solutions enhance flexibility, enabling your team to collaborate in real-time from anywhere, improving productivity and innovation. With advanced security measures, including encryption and compliance with industry standards, we safeguard your sensitive data. Furthermore, our analytics tools provide insights into your operations, helping you make data-driven decisions and optimize performance. Whether you need public, private, or hybrid cloud solutions, we are committed to empowering your business to thrive in a digital landscape.",
//     keyPoints: [
//       { icon: Globe, text: "Infrastructure as a Service", image1: "/laas.jpg" },
//       { icon: Server, text: "Platform as a Service", image1: "/paas.jpg" },
//       { icon: Brain, text: "Software as a Service", image1: "/saas.jpg" },
//       { icon: Brain, text: "Cloud Storage", image1: "/storage.jpg" }
//     ],
//     imageUrl: "https://kyrosdigital.in/wp-content/uploads/2022/10/6-technical-seo-tips-to-instantly-boost-your-traffic.jpg", // Replace with actual image path
//   },
//   {
//     id: 4,
//     name: "Business Services",
//     discription: "We offer tailored business services to enhance your operations, including strategic consulting, process optimization, and administrative support. Our comprehensive solutions help streamline your workflow, improve efficiency, and drive growth, enabling you to focus on your core business objectives. Additionally, we provide data analysis and insights to inform decision-making, risk management strategies to safeguard your assets, and technology integration services to modernize your processes. Our expert team collaborates closely with you to understand your unique challenges and develop customized strategies that align with your vision. By fostering innovation and enhancing collaboration, we empower your organization to adapt to changing market dynamics and achieve sustainable success. With our commitment to excellence, we ensure that you have the tools and support needed to thrive in today’s competitive landscape.",
//     keyPoints: [
//       { icon: Globe, text: "Strategic Consulting", image1: "/sc.jpg" },
//       { icon: Server, text: "Process Optimization", image1: "/po.jpg" },
//       { icon: Brain, text: "Administrative Support", image1: "/as.jpg" },
//       { icon: Brain, text: "Technology Integration", image1: "/ti.jpg" }
//     ],
//     imageUrl: "https://kyrosdigital.in/wp-content/uploads/2022/10/6-technical-seo-tips-to-instantly-boost-your-traffic.jpg", // Replace with actual image path
//   },
//   {
//     id: 5,
//     name: "Outsourcing Services",
//     discription: "We offer comprehensive outsourcing services to optimize your business operations, giving you access to top-tier IT expertise and support. Our solutions include software development, IT support, and system maintenance, tailored to your specific needs for flexibility and scalability. With a focus on efficiency, data security, and compliance, we ensure your sensitive information is protected. Our dedicated project management fosters clear communication and alignment with your goals. With competitive pricing and a commitment to quality, we help you stay ahead in today’s fast-paced market, allowing you to concentrate on driving innovation and achieving your objectives.",
//     keyPoints: [
//       { icon: Globe, text: "Customer Support Services:", image1: "/css.jpg" },
//       { icon: Server, text: "IT Services", image1: "/its.jpg" },
//       { icon: Brain, text: "Accounting and Financial Services", image1: "/afs.jpg" },
//       { icon: Brain, text: "Human Resources (HR) Services", image1: "/hrs.jpg" }
//     ],
//     imageUrl: "https://kyrosdigital.in/wp-content/uploads/2022/10/6-technical-seo-tips-to-instantly-boost-your-traffic.jpg", // Replace with actual image path
//   },

// ];

// export default function Carousel() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);

//   const nextSlide = useCallback(() => {
//     if (!isAnimating) {
//       setIsAnimating(true);
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
//     }
//   }, [isAnimating, services.length]);

//   const prevSlide = useCallback(() => {
//     if (!isAnimating) {
//       setIsAnimating(true);
//       setCurrentIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length);
//     }
//   }, [isAnimating, services.length]);

//   useEffect(() => {
//     const timer = setTimeout(() => setIsAnimating(false), 300);
//     return () => clearTimeout(timer);
//   }, [currentIndex]);

//   const goToSlide = (index) => {
//     if (!isAnimating) {
//       setIsAnimating(true);
//       setCurrentIndex(index);
//     }
//   };


//   return (
//     <>
//       <h1 className="gallery-title pb-[30px] pt-[70px] lg:pt-[100px]">OUR SERVICES</h1>
//       <div className="relative w-full lg:px-10 py-8 " style={{ background: '#fcedff' }}>
//         <div className="overflow-hidden">
//           <div
//             className="flex  transition-transform duration-300 ease-in-out"
//             style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//           >
//             {
//               services.map((service) => {
//                 return (

//                   <div key={service.id} className="w-full flex-shrink-0">
//                     <div

//                       className="rounded-lg  items-center h-full w-full"
//                     >
//                       <h2
//                         className="text-3xl text-center font-bold mb-3 relative z-10"
//                         style={{
//                           color: 'rgb(188 0 255)', // Change to your desired solid color
//                           textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
//                           transition: 'transform 0.3s, text-shadow 0.3s',
//                         }}
//                         onMouseEnter={(e) => {
//                           e.currentTarget.style.transform = 'scale(1.05)';
//                           e.currentTarget.style.textShadow = '4px 4px 8px rgba(0, 0, 0, 0.5)';
//                         }}
//                         onMouseLeave={(e) => {
//                           e.currentTarget.style.transform = 'scale(1)';
//                           e.currentTarget.style.textShadow = '2px 2px 4px rgba(0, 0, 0, 0.3)';
//                         }}
//                       >
//                         {service.name}
//                       </h2>

//                       <div class="grid lg:grid-cols-[30%_70%] grid-cols-[100%]  px-5">
//                         <div class="grid lg:grid-cols-1 grid-cols-1 gap-4 bg-black text-white px-5">
//                           <p className="text-justify mt-6">{service.discription}</p>

//                         </div>
//                         <div>
//                           <div class="grid lg:grid-cols-2 grid-cols-1 ">
//                             {service.keyPoints.map((point, index) => (
//                               <div
//                                 key={index}
//                                 className="  items-center text-lg  h-25"
//                                 style={{
//                                   backgroundImage: `url(${service.cardImageUrl})`, // Background image for each key point
//                                   backgroundSize: "cover",
//                                   backgroundPosition: "center",
//                                   // height: '300px'
//                                 }}
//                               >
//                                 {/* Overlay for readability */}
//                                 <div className="absolute inset-0 opacity-20 blur-[20px] z-0"></div>
//                                 <div className="relative z-10 flex items-center text-black font-bold	">
//                                   {/* <img src={point.image1} alt="" />
//                                   <point.icon className="w-6 h-6 mr-2 text-black" /> */}
//                                   {/* {point.text} */}

//                                   <div className="relative w-full h-64">
//                                     {/* Image */}
//                                     <img
//                                       src={point.image1}
//                                       alt="Sample"
//                                       className="w-full h-full object-cover"
//                                     />
//                                     {/* Overlaying Text */}
//                                     <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
//                                       <span
//                                         className="text-white"
//                                         style={{
//                                           color: '#FFFFFF', // White text color
//                                           textShadow: `
//       1px 1px 2px rgba(0, 0, 0, 0.7), // Dark shadow for contrast
//       2px 2px 4px rgba(0, 0, 0, 0.5), // Medium shadow
//       3px 3px 6px rgba(0, 0, 0, 0.3)  // Lighter shadow
//     `,
//                                           padding: '2px 5px', // Padding for better readability
//                                           borderRadius: '5px', // Rounded edges
//                                           backgroundColor: 'rgba(0, 0, 0, 0.6)', // Semi-transparent background for contrast
//                                           transition: 'transform 0.3s, text-shadow 0.3s',
//                                         }}
//                                         onMouseEnter={(e) => {
//                                           e.currentTarget.style.transform = 'scale(1.1)';
//                                           e.currentTarget.style.textShadow = `
//       1px 1px 3px rgba(0, 0, 0, 1), // Stronger dark shadow
//       4px 4px 8px rgba(0, 0, 0, 0.7), // Stronger medium shadow
//       5px 5px 10px rgba(0, 0, 0, 0.5) // Stronger lighter shadow
//     `;
//                                         }}
//                                         onMouseLeave={(e) => {
//                                           e.currentTarget.style.transform = 'scale(1)';
//                                           e.currentTarget.style.textShadow = `
//       1px 1px 2px rgba(0, 0, 0, 0.7),
//       2px 2px 4px rgba(0, 0, 0, 0.5),
//       3px 3px 6px rgba(0, 0, 0, 0.3)
//     `;
//                                         }}
//                                       >
//                                         {point.text}
//                                       </span>

//                                     </div>
//                                   </div>
//                                 </div>
//                               </div>
//                             ))}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 )
//               })
//             }

//           </div>
//         </div>
//         <button
//           onClick={prevSlide}
//           className="absolute bg-black left-0 top-1/2 transform -translate-y-1/2  rounded-full p-4 shadow-md  focus:outline-none focus:ring-2 focus:ring-primary"
//           aria-label="Previous slide"
//         >
//           <ChevronLeft className="w-5 h-5 text-white " />
//         </button>
//         <button
//           onClick={nextSlide}
//           className="absolute bg-black right-0 top-1/2 transform -translate-y-1/2  rounded-full p-4 shadow-md focus:outline-none focus:ring-2 focus:ring-primary"
//           aria-label="Next slide"
//         >
//           <ChevronRight className="w-5 h-5 text-white" />
//         </button>
//         <div className="flex justify-center mt-4">
//           {services.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => goToSlide(index)}
//               className={`w-3 h-3 rounded-full mx-1 ${index === currentIndex ? "bg-black" : "bg-gray-400"
//                 }`}
//             />
//           ))}
//         </div>
//       </div>
//     </>

//   );
// }







