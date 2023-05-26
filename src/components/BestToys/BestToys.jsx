import React from 'react';

const BestToys = () => {
    return (
        <div>
            <h1 className='text-center text-4xl font-bold uppercase text-slate-600 my-20'>Our Best Product</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
                <div class="relative flex flex-col bg-white rounded-lg p-6 shadow-md">
                    <img src="https://i.ibb.co/pQChCHP/gallery-1.png" alt="Product Image" class=" h-80 rounded-md object-cover mb-4" />

                    <span class="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold uppercase px-2 py-1 rounded">New</span>

                    <h3 class="text-lg font-semibold mb-2">Aladin's Jassmin</h3>

                    <div class="flex items-center mb-2">
                        <span class="text-gray-500 text-sm line-through mr-2">$30.99</span>
                        <span class="text-green-500 text-lg font-semibold">$23.99</span>
                    </div>

                    <div class="flex items-center mb-2">
                        <span class="text-yellow-500 text-sm mr-2">⭐⭐⭐⭐⭐</span>
                        <span class="text-gray-600 text-sm">(255 reviews)</span>
                    </div>

                    <button class="bg-[#ff6799] text-white px-4 py-2 rounded-md hover:bg-[#2ebeef] duration-300 ">
                        Add to Cart
                    </button>
                </div>
                <div class="relative flex flex-col bg-white rounded-lg p-6 shadow-md">
                    <img src="https://i.ibb.co/VH7qYYV/gallery-7.png" alt="Product Image" class=" h-80 rounded-md object-cover mb-4" />

                    <span class="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold uppercase px-2 py-1 rounded">New</span>

                    <h3 class="text-lg font-semibold mb-2">Moana</h3>

                    <div class="flex items-center mb-2">
                        <span class="text-gray-500 text-sm line-through mr-2">$20.99</span>
                        <span class="text-green-500 text-lg font-semibold">$15.99</span>
                    </div>

                    <div class="flex items-center mb-2">
                        <span class="text-yellow-500 text-sm mr-2">⭐⭐⭐⭐⭐</span>
                        <span class="text-gray-600 text-sm">(250 reviews)</span>
                    </div>

                    <button class="bg-[#ff6799] text-white px-4 py-2 rounded-md hover:bg-[#2ebeef] duration-300 ">
                        Add to Cart
                    </button>
                </div>
                <div class="relative flex flex-col bg-white rounded-lg p-6 shadow-md">
                    <img src="https://i.ibb.co/f2ZX9pS/gallery-6.png" alt="Product Image" class=" h-80 rounded-md object-cover mb-4" />

                    <span class="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold uppercase px-2 py-1 rounded">New</span>

                    <h3 class="text-lg font-semibold mb-2">Rafanzel</h3>

                    <div class="flex items-center mb-2">
                        <span class="text-gray-500 text-sm line-through mr-2">$49.99</span>
                        <span class="text-green-500 text-lg font-semibold">$39.99</span>
                    </div>

                    <div class="flex items-center mb-2">
                        <span class="text-yellow-500 text-sm mr-2">⭐⭐⭐⭐⭐</span>
                        <span class="text-gray-600 text-sm">(200 reviews)</span>
                    </div>

                    <button class="bg-[#ff6799] text-white px-4 py-2 rounded-md hover:bg-[#2ebeef] duration-300 ">
                        Add to Cart
                    </button>
                </div>
                <div class="relative flex flex-col bg-white rounded-lg p-6 shadow-md">
                    <img src="https://i.ibb.co/xLX6gdH/gallery-5.png" alt="Product Image" class=" h-80 rounded-md object-cover mb-4" />

                    <span class="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold uppercase px-2 py-1 rounded">New</span>

                    <h3 class="text-lg font-semibold mb-2">Frozen Elsa</h3>

                    <div class="flex items-center mb-2">
                        <span class="text-gray-500 text-sm line-through mr-2">$35.99</span>
                        <span class="text-green-500 text-lg font-semibold">$20.99</span>
                    </div>

                    <div class="flex items-center mb-2">
                        <span class="text-yellow-500 text-sm mr-2">⭐⭐⭐⭐⭐</span>
                        <span class="text-gray-600 text-sm">(250 reviews)</span>
                    </div>

                    <button class="bg-[#ff6799] text-white px-4 py-2 rounded-md hover:bg-[#2ebeef] duration-300 ">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BestToys;