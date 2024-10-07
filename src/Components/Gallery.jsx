import React from 'react';
import '../Css/Gallery.css'

const images = [
    { src: 'https://kaps-hazel.vercel.app/img/portfolio/01-large.jpg', title: 'Image 1' },
    { src: 'https://kaps-hazel.vercel.app/img/portfolio/02-large.jpg', title: 'Image 1' },
    { src: 'https://kaps-hazel.vercel.app/img/portfolio/03-large.jpg', title: 'Image 1' },
    { src: 'https://kaps-hazel.vercel.app/img/portfolio/04-large.jpg', title: 'Image 1' },
    { src: 'https://kaps-hazel.vercel.app/img/portfolio/05-large.jpg', title: 'Image 1' },
    { src: 'https://kaps-hazel.vercel.app/img/portfolio/06-large.jpg', title: 'Image 1' },
    { src: 'https://kaps-hazel.vercel.app/img/portfolio/07-large.jpg', title: 'Image 1' },
    { src: 'https://kaps-hazel.vercel.app/img/portfolio/09-large.jpg', title: 'Image 1' },

    // Ensure each image has a unique title and ideally unique sources
    // Add more images with unique sources and titles
];

const Gallery = () => {
    // return (
    //     // <div className="gallery-container">
    //     //     {/* <h1 className="gallery-title lg:pt-[100px] pt-[100px]">GALLERY</h1> */}
    //     //     <h1 className="gallery-title lg:pt-[100px] pt-[100px]">GALLERY</h1>

    //     //     <div className="gallery-grid">
    //     //         {images.map((image, index) => (
    //     //             <div key={index} className="gallery-item">
    //     //                 <img src={image.src} alt={image.title} />
    //     //             </div>
    //     //         ))}
    //     //     </div>
    //     // </div>
    // );
};

export default Gallery;
