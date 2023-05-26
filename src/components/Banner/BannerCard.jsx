import { Carousel } from 'flowbite-react';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const BannerCard = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000,
          once: true,
        });
      }, []);
    return (
        <div data-aos="fade-left" className='hidden lg:block invisible lg:visible'>
            <div   className=" md:w-[75%] mx-auto grid h-56 grid-cols-2 gap-4 sm:h-64 xl:h-80 2xl:h-80 -translate-y-32 md:-translate-y-40 md:-mb-20">
                <Carousel>
                    <div className="relative">
                        <img src="https://i.ibb.co/BCFzkpg/banner-02.png" alt="..." />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-white text-center">
                                <p>Sale on exclusive</p>
                                <h2 className="text-2xl">Accessories kid's toy</h2>
                                <button className="bg-[#2ebeef] hover:bg-[#ff6799] duration-300 text-white font-bold py-2 px-4 mt-4 rounded-full">
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <img src="https://i.ibb.co/0X3PFBL/banner-3.png" alt="..." />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-white text-center">
                                <p>Sale on exclusive</p>
                                <h2 className="text-2xl">Accessories kid's toy</h2>
                                <button className="bg-[#2ebeef] hover:bg-[#ff6799] duration-300 text-white font-bold py-2 px-4 mt-4 rounded-full">
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <img src="https://i.ibb.co/BCFzkpg/banner-02.png" alt="..." />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-white text-center">
                                <p>Sale on exclusive</p>
                                <h2 className="text-2xl">Accessories kid's toy</h2>
                                <button className="bg-[#2ebeef] hover:bg-[#ff6799] duration-300 text-white font-bold py-2 px-4 mt-4 rounded-full">
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <img src="https://i.ibb.co/0X3PFBL/banner-3.png" alt="..." />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-white text-center">
                                <p>Sale on exclusive</p>
                                <h2 className="text-2xl">Accessories kid's toy</h2>
                                <button className="bg-[#2ebeef] hover:bg-[#ff6799] duration-300 text-white font-bold py-2 px-4 mt-4 rounded-full">
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <img src="https://i.ibb.co/BCFzkpg/banner-02.png" alt="..." />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-white text-center">
                                <p>Sale on exclusive</p>
                                <h2 className="text-2xl">Accessories kid's toy</h2>
                                <button className="bg-[#2ebeef] hover:bg-[#ff6799] duration-300 text-white font-bold py-2 px-4 mt-4 rounded-full">
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>
                </Carousel>
                <Carousel indicators={false}>
                    <div className="relative">
                        <img src="https://i.ibb.co/0X3PFBL/banner-3.png" alt="..." />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-white text-center">
                                <p>Sale on exclusive</p>
                                <h2 className="text-2xl">Children Rubber toys</h2>
                                <button className="bg-[#2ebeef] hover:bg-[#ff6799] duration-300 text-white font-bold py-2 px-4 mt-4 rounded-full">
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <img src="https://i.ibb.co/BCFzkpg/banner-02.png" alt="..." />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-white text-center">
                                <p>Sale on exclusive</p>
                                <h2 className="text-2xl">Children Rubber toys</h2>
                                <button className="bg-[#2ebeef] hover:bg-[#ff6799] duration-300 text-white font-bold py-2 px-4 mt-4 rounded-full">
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <img src="https://i.ibb.co/0X3PFBL/banner-3.png" alt="..." />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-white text-center">
                                <p>Sale on exclusive</p>
                                <h2 className="text-2xl">Children Rubber toys</h2>
                                <button className="bg-[#2ebeef] hover:bg-[#ff6799] duration-300 text-white font-bold py-2 px-4 mt-4 rounded-full">
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <img src="https://i.ibb.co/BCFzkpg/banner-02.png" alt="..." />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-white text-center">
                                <p>Sale on exclusive</p>
                                <h2 className="text-2xl">Children Rubber toys</h2>
                                <button className="bg-[#2ebeef] hover:bg-[#ff6799] duration-300 text-white font-bold py-2 px-4 mt-4 rounded-full">
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <img src="https://i.ibb.co/0X3PFBL/banner-3.png" alt="..." />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-white text-center">
                                <p>Sale on exclusive</p>
                                <h2 className="text-2xl">Children Rubber toys</h2>
                                <button className="bg-[#2ebeef] hover:bg-[#ff6799] duration-300 text-white font-bold py-2 px-4 mt-4 rounded-full">
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>
                </Carousel>
            </div>
        </div>
    );
};

export default BannerCard;
