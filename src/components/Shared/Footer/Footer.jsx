import React from 'react';
import { SlSocialFacebook, SlSocialTwitter, SlSocialInstagram } from "react-icons/sl";
import { AiOutlineYoutube } from "react-icons/ai";
import { TiSocialPinterest } from "react-icons/ti";
import { BiMapAlt } from "react-icons/bi";
import { SiMaildotru } from "react-icons/si";
import { FiPhoneCall } from "react-icons/fi";

const Footer = () => {
    return (
        <div className='mt-6 md:mt-32'>
            <div className='md:flex bg-[#8edbf448] p-10'>
                <div>
                    <img src="https://i.ibb.co/xS6X8zY/logo.png" alt="" />
                    <p className='my-4 text-slate-600 w-3/4'>A kids toy shop is a store that specializes in selling toys and games designed specifically for children.</p>
                    <p className='flex items-center mb-4 text-slate-600'><BiMapAlt className='mr-5 text-3xl text-primary' />Addresss: 1800 Abbot Kinney Nebraska UK</p>
                    <p className='flex items-center mb-4 text-slate-600'><SiMaildotru className='mr-5 text-3xl text-primary' />Email: toyman@example.com</p>
                    <p className='flex items-center mb-4 text-slate-600'><FiPhoneCall className='mr-5 text-3xl text-primary' />Phone: (012) 345 6789</p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  w-1/2'>
                    <div>
                        <h1 className='text-2xl font-bold text-slate-600 mb-6'>Quick Links</h1>
                        <p className='text-slate-600 hover:text-[#2ebeef] duration-300 cursor-pointer mb-6'>Help Center</p>
                        <p className='text-slate-600 hover:text-[#2ebeef] duration-300 cursor-pointer mb-6'>Random Voucher</p>
                        <p className='text-slate-600 hover:text-[#2ebeef] duration-300 cursor-pointer mb-6'>Contact Us</p>
                        <p className='text-slate-600 hover:text-[#2ebeef] duration-300 cursor-pointer mb-6'>Policies & Rules</p>
                        <p className='text-slate-600 hover:text-[#2ebeef] duration-300 cursor-pointer mb-6'>Check Offer List</p>

                    </div>

                    <div>
                        <h1 className='text-2xl font-bold text-slate-600 mb-6'>Information</h1>
                        <p className='text-slate-600 hover:text-[#2ebeef] duration-300 cursor-pointer mb-6'>Product Support</p>
                        <p className='text-slate-600 hover:text-[#2ebeef] duration-300 cursor-pointer mb-6'>Checkout</p>
                        <p className='text-slate-600 hover:text-[#2ebeef] duration-300 cursor-pointer mb-6'>License Policy</p>
                        <p className='text-slate-600 hover:text-[#2ebeef] duration-300 cursor-pointer mb-6'>Affiliate</p>
                        <p className='text-slate-600 hover:text-[#2ebeef] duration-300 cursor-pointer mb-6'>About Us</p>
                    </div>

                    <div>
                        <h1 className='text-2xl font-bold text-slate-600 mb-6'>Follow Us On</h1>
                        <p className='flex items-center text-slate-600 hover:text-[#2ebeef] duration-300 cursor-pointer mb-6'><SlSocialFacebook className='mr-5' />Facebook</p>
                        <p className='flex items-center text-slate-600 hover:text-[#2ebeef] duration-300 cursor-pointer mb-6'><SlSocialTwitter className='mr-5' />Twitter</p>
                        <p className='flex items-center text-slate-600 hover:text-[#2ebeef] duration-300 cursor-pointer mb-6'><SlSocialInstagram className='mr-5' />Instagram</p>
                        <p className='flex items-center text-slate-600 hover:text-[#2ebeef] duration-300 cursor-pointer mb-6'><AiOutlineYoutube className='mr-5' />Youtube</p>
                        <p className='flex items-center text-slate-600 hover:text-[#2ebeef] duration-300 cursor-pointer mb-6'><TiSocialPinterest className='mr-5' />Pinterest</p>

                    </div>
                </div>
            </div>
            <div className='bg-secondary py-8'>
                <p className='text-center text-lg text-slate-500'>©Copyright Toyman | 2023</p>
            </div>
        </div>
    );
};

export default Footer;