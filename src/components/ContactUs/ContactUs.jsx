import React, { useEffect } from 'react';
import { HiOutlineDeviceMobile, HiOutlineLocationMarker } from "react-icons/hi";
import { MdOutlineEmail } from "react-icons/md";
import AOS from 'aos';
import 'aos/dist/aos.css';


const ContactUs = () => {

    useEffect(() => {
        AOS.init({
          duration: 1000,
          once: true,
        });
      }, []);
    return (
        <section className="flex flex-col md:flex-row items-center justify-center py-16 px-8 mt-20 border-2 border-[#ff679a45]">
            <div data-aos="fade-right" className="md:w-1/2">
                <div>
                    <h1 className='text-4xl font-bold mb-6'>Get in touch</h1>
                    <p className='text-slate-600 md:w-[70%] mb-6'>We'd love to hear from you, lets get in touch! lorem ipsum is not simply random text. It has roots in a piece of classical.</p>
                </div>
                <div className="mb-8 flex gap-5 items-center">
                    <HiOutlineLocationMarker className='text-5xl rounded-full bg-[#ff679a] text-white p-2'/>
                    <div>
                        <h2 className="text-2xl text-slate-600 font-bold mb-4">Headquarters</h2>
                        <p className="text-gray-600">123 Main Street</p>
                        <p className="text-gray-600">City, State, ZIP</p>
                    </div>
                </div>
                <div className="mb-8 flex gap-5 items-center">
                    <HiOutlineDeviceMobile className='text-5xl rounded-full bg-[#ff679a] text-white p-2'/>
                    <div>
                        <h2 className="text-2xl text-slate-600 font-bold mb-4">Phone Number</h2>
                        <p className="text-gray-600">123-456-7890</p>
                    </div>
                </div>
                <div className='mb-8 flex gap-5 items-center'>
                    <MdOutlineEmail className='text-5xl rounded-full bg-[#ff679a] text-white p-2'/>
                    <div>
                        <h2 className="text-2xl text-slate-600 font-bold mb-4">Email Us</h2>
                        <p className="text-gray-600">info@example.com</p>
                    </div>
                </div>
            </div>
            <div className="md:w-1/2">
                <div data-aos="zoom-in-up"  data-aos-duration="3000" className="bg-white p-8 shadow-lg rounded-lg">
                    <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
                    <form>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="w-full p-2 border border-gray-300 rounded-md input"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full p-2 border border-gray-300 rounded-md input"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows="4"
                                className="w-full p-2 border border-gray-300 rounded-md input"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="bg-[#ff6799] hover:bg-[#2ebeef] text-xl text-white font-semibold py-2 px-4 rounded-full"
                        >
                            Send message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;