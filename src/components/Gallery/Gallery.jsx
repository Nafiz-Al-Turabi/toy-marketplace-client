import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Gallery = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000,
          once: true,
        });
      }, []);
    return (
        <div className='mt-10'>
            <h1 className='text-4xl text-slate-600 text-center font-bold mb-10 uppercase'>Toy Gallery</h1>
            <div className='bg-[#ff679a17] py-6 grid grid-cols-1 md:grid-cols-4 gap-5'>
                <div data-aos="fade-right" className="max-w-xs rounded overflow-hidden shadow-lg ml-8">
                    <div className="relative">
                        <img className="w-full h-auto transform hover:scale-110 transition duration-300" src="https://i.ibb.co/pQChCHP/gallery-1.png" alt="Product Image" />
                        <div className="absolute bottom-0 left-0 w-full bg-black text-white text-center p-2 opacity-75 hover:opacity-100 transition duration-300">
                            <span className="text-lg font-bold">Disney Doll</span>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-left" className="max-w-xs rounded overflow-hidden shadow-lg ml-8">
                    <div className="relative">
                        <img className="w-full h-auto transform hover:scale-110 transition duration-300" src="https://i.ibb.co/WyDhfLS/gallery-2.png" alt="Product Image" />
                        <div className="absolute bottom-0 left-0 w-full bg-black text-white text-center p-2 opacity-75 hover:opacity-100 transition duration-300">
                            <span className="text-lg font-bold">Disney Doll</span>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-right" className="max-w-xs rounded overflow-hidden shadow-lg ml-8">
                    <div className="relative">
                        <img className="w-full h-auto transform hover:scale-110 transition duration-300" src="https://i.ibb.co/MNMKvFh/gallery-3.png" alt="Product Image" />
                        <div className="absolute bottom-0 left-0 w-full bg-black text-white text-center p-2 opacity-75 hover:opacity-100 transition duration-300">
                            <span className="text-lg font-bold">Disney Doll</span>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-left" className="max-w-xs rounded overflow-hidden shadow-lg ml-8">
                    <div className="relative">
                        <img className="w-full h-auto transform hover:scale-110 transition duration-300" src="https://i.ibb.co/TbB1fDs/gallery-4.png" alt="Product Image" />
                        <div className="absolute bottom-0 left-0 w-full bg-black text-white text-center p-2 opacity-75 hover:opacity-100 transition duration-300">
                            <span className="text-lg font-bold">Disney Doll</span>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-right" className="max-w-xs rounded overflow-hidden shadow-lg ml-8">
                    <div className="relative">
                        <img className="w-full h-auto transform hover:scale-110 transition duration-300" src="https://i.ibb.co/xLX6gdH/gallery-5.png" alt="Product Image" />
                        <div className="absolute bottom-0 left-0 w-full bg-black text-white text-center p-2 opacity-75 hover:opacity-100 transition duration-300">
                            <span className="text-lg font-bold">Disney Doll</span>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-left" className="max-w-xs rounded overflow-hidden shadow-lg ml-8">
                    <div className="relative">
                        <img className="w-full h-auto transform hover:scale-110 transition duration-300" src="https://i.ibb.co/f2ZX9pS/gallery-6.png" alt="Product Image" />
                        <div className="absolute bottom-0 left-0 w-full bg-black text-white text-center p-2 opacity-75 hover:opacity-100 transition duration-300">
                            <span className="text-lg font-bold">Disney Doll</span>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-right" className="max-w-xs rounded overflow-hidden shadow-lg ml-8">
                    <div className="relative">
                        <img className="w-full h-auto transform hover:scale-110 transition duration-300" src="https://i.ibb.co/VH7qYYV/gallery-7.png" alt="Product Image" />
                        <div className="absolute bottom-0 left-0 w-full bg-black text-white text-center p-2 opacity-75 hover:opacity-100 transition duration-300">
                            <span className="text-lg font-bold">Disney Doll</span>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-left" className="max-w-xs rounded overflow-hidden shadow-lg ml-8">
                    <div className="relative">
                        <img className="w-full h-auto transform hover:scale-110 transition duration-300" src="https://i.ibb.co/x78Dnct/gallery-8.png" alt="Product Image" />
                        <div className="absolute bottom-0 left-0 w-full bg-black text-white text-center p-2 opacity-75 hover:opacity-100 transition duration-300">
                            <span className="text-lg font-bold">Disney Doll</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;