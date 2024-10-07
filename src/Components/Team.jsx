import React from 'react';
import logo1 from '../assets/MadhurSir.jpeg';
import logo2 from '../assets/Punya2.jpg';
import logo3 from '../assets/Ritu.jpg';
import logo4 from '../assets/Tushar3.jpeg';

const services = [
  {
    icon: logo1,
    title: 'Mr. Madhur Bhandari',
    title2: 'CMD (Chairman and Managing Director)',
    description: 'A hardcore professional with excellent management and networking skills. He has been associated with packaging and specifically flexible packaging industry for over 20 years. He is a strategic thinker delivering exceptional results while fostering a culture of innovation and excellence. His leadership skills stand out by displaying qualities such as integrity, clear communication, accountability , vision and self awareness',
  },
  {
    icon: logo2,
    title: 'Mr. Punya Galundia',
    title2: 'Technical Director',
    description: "Punya Galundia is graduating in Computer Science from the University of Massachusetts, USA, which ranks #24 in the nation by U.S. News & World Report. Punya has diverse experience in app development, website design, and software development. Combining a scientific mindset with creativity, Punya has achieved exceptional results in projects related to NFTs, Cryptos, game simulations, training, supply chain management, manufacturing process improvement, and innovative thinking.",
  },
  {
    icon: logo3,
    title: 'Ms. Ritu Patle',
    title2: 'Executive Director',
    description: "Ritu Patle is an accomplished MBA graduate with a dual specialization in Finance and Human Resources. With a strong foundation in financial analysis, management, and human capital strategies, Ritu brings a unique blend of analytical acumen and people management skills to the table. Her expertise allows her to seamlessly navigate the complexities of modern organizations by aligning financial goals with HR initiatives.",
  },
  {
    icon: logo4,
    title: 'Mr. Tushar Patle',
    title2: 'Sr. Software Development Engineer',
    description: (
      <>
        Tushar Patle is a skilled Software Development Engineer with more than three years of experience in the field. He is well-versed in programming languages, along with a solid grasp of software development methodologies. Throughout his career, Tushar has actively engaged in various phases of the software development lifecycle, from gathering requirements to coding, testing, and deployment. 
        <br />
        <div className='text-center items-center mt-3'>
        <a href="https://tushar-patle-portfolio-w-r.vercel.app/" target='_blank' className="text-purple-600  underline">View Portfolio</a>
        </div>
      </>
    ),
  },
];

const ServiceCard = ({ icon, title, title2, description }) => (
  <div className="group relative overflow-hidden rounded-lg bg-white shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-3 hover:shadow-2xl">
    <div className="overflow-hidden">
      <img
        src={icon}
        alt={title}
        className="object-cover w-full h-64 transition-transform duration-500 group-hover:scale-110"
      />
    </div>
    <div className="p-5 text-center relative z-10">
      <h3 className="text-xl font-bold text-gray-900 mb-1 transition-colors duration-300 group-hover:text-purple-600">
        {title}
      </h3>
      <h6 className="text-sm font-semibold text-purple-500 group-hover:text-purple-700">{title2}</h6>
      <p className="mt-4 text-gray-600 text-sm text-justify">{description}</p>
    </div>
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-600 opacity-0 group-hover:opacity-50 transition-opacity duration-300 pointer-events-none"></div>
  </div>
);

export default function Teams() {
  return (
    <div className="relative py-10 select-text bg-gray-100">
      <h2 className="gallery-title lg:pt-[100px] pt-[100px]">OUR TEAM</h2>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map(service => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
}














// import React from 'react';
// import logo1 from '../assets/MadhurSir.jpeg';
// import logo2 from '../assets/Punya2.jpg';
// import logo3 from '../assets/Ritu.jpg';
// import logo4 from '../assets/Tushar3.jpeg';

// const services = [
//     { icon: logo1, title: 'Mr. Madhur Bhandari', title2: 'CMD (Chairmain Managing Director)', description: 'A hardcore professional with excellent management and networking skills. He has been associated with packaging and specifically flexible packaging industry for over 20 years. He is a strategic thinker and delivering exceptional results while fostering a culture of innovation and excellence.' },
//     { icon: logo2, title: 'Mr. Punya Galundia', title2: 'Technical Director', description: "Punya Galundia, graduating in Computer Science at University of Massachusetts, USA. The University of Massachusetts Amherst's computer science program is ranked #24 in the nation by U.S. News & World Report. Punya has a varied exposure of app development, Website designing and software development." },
//     { icon: logo3, title: 'Ms. Ritu Patle', title2: 'Executive Director', description: "Ritu Patle is an accomplished MBA graduate with a dual specialization in Finance and Human Resources. With a strong foundation in financial analysis, management, and human capital strategies, Ritu brings a unique blend of analytical acumen and people management skills to the table. Her expertise allows her to seamlessly navigate the complexities of modern organizations by aligning financial goals with HR initiatives" },
//     { icon: logo4, title: 'Mr. Tushar Patle', title2: 'Sr. Software Development Engineer', description: "Tushar Patle is a skilled Software Development Engineer with more than three years of experience in the field. He is well-versed in programming languages, along with a solid grasp of software development methodologies. Throughout his career, Tushar has actively engaged in various phases of the software development lifecycle, from gathering requirements to coding, testing, and deployment." },
// ];

// const ServiceCard = ({ icon, title, title2, description }) => (
//   <div className="group relative overflow-hidden rounded-lg bg-white shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-3 hover:shadow-2xl">
//     <div className="overflow-hidden">
//       <img
//         src={icon}
//         alt={title}
//         className="object-cover w-full h-64 transition-transform duration-500 group-hover:scale-110"
//       />
//     </div>
//     <div className="p-5 text-center">
//       <h3 className="text-xl font-bold text-gray-900 mb-1 transition-colors duration-300 group-hover:text-purple-600">
//         {title}
//       </h3>
//       <h6 className="text-sm font-semibold text-purple-500 group-hover:text-purple-700">{title2}</h6>
//       <p className="mt-4 text-gray-600 text-sm">{description}</p>
//     </div>
//     <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-600 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
//   </div>
// );

// export default function Teams() {
//   return (
//     <div className="relative py-10 bg-gray-100">
//       <h2 className="gallery-title lg:pt-[100px] pt-[100px]">OUR TEAM</h2>
//       <div className="container mx-auto px-6 lg:px-8">
//         {/* <h1 className="text-center text-4xl font-bold text-gray-900 mb-12">Our Team</h1> */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {services.map(service => (
//             <ServiceCard key={service.title} {...service} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }





