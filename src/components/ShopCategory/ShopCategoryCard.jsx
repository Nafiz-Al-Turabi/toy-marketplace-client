import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ShopCategoryCard = ({ toy }) => {
    const { _id, rating, price, toy_name, url } = toy;
    // AOS
    useEffect(() => {
        AOS.init({
          duration: 800,
          once: true,
        });
      }, []);
    return (
        <div data-aos="fade-right a" class="bg-white rounded-lg shadow-lg">
            <div class="relative h-64 overflow-hidden rounded-t-lg text-center flex justify-center items-center">
                <img src={url} alt="Toy Image" class="h-full transform hover:scale-105 transition duration-300" />
            </div>
            <div class="p-4">
                <h2 class="text-xl font-bold mb-2">{toy_name}</h2>
                <p class="text-gray-600 font-medium mb-2">${price}</p>
                <div class="flex items-center justify-between mb-2">
                    <div class="flex items-center">
                        <span class="text-gray-700 font-medium">Ratings: {rating}/5.0</span>
                    </div>
                    <Link to={`/toydetails/${_id}`} href="" class="inline-block bg-[#2ebeef] hover:bg-[#ff6799] duration-300 active:scale-95 text-white font-semibold py-2 px-4 rounded">
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ShopCategoryCard;