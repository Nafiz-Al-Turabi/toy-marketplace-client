import React, { useEffect } from 'react';
import { TiArrowRightOutline} from "react-icons/ti";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000,
          once: true,
        });
      }, []);
    return (
        <div className=' bg-[#8edbf448]'>
            <div  data-aos="fade-right" className='grid grid-cols-1 md:grid-cols-2  py-10 px-3 '>
                <div className='text-center md:text-left'>
                    <h1 className='text-4xl mb-2 md:mb-5 md:text-5xl text-slate-600 font-extrabold uppercase'>get your favourite toy</h1>
                    <p className='text-3xl text-gray-500 mb-5'>Flat 10% Off On Order Above $29.99</p>
                    <button className='md:flex items-center bg-[#2ebeef] text-white text-xl px-5 py-3 md:text-2xl md:px-8 md:py-4 font-bold rounded-full hover:bg-[#ff6799] duration-300 ease-out'>SHOP NOW <TiArrowRightOutline className='hidden lg:block invisible lg:visible' /></button>
                    
                </div>
                <div>
                    <img src="https://i.ibb.co/23LCLWr/banner.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;