import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import PageTitle from '../PageTitle/PageTitle';

const ToyDetails = () => {
    const { id } = useParams()
    const [toy, setToy] = useState({})
    useState(() => {
        fetch(`https://toy-marketplace-server-seven-eta.vercel.app/toydetails/${id}`)
            .then(res => res.json())
            .then(result => {
                setToy(result);
            })
            .catch(error => {
                console.log(error);
            })
    }, [])
    const { url, toy_name, seller, email, price, rating, quantity, toy_details } = toy;
    return (
        <div className="container mx-auto p-4">
            <PageTitle title="Toy Details" />
            <div className='bg-[#8edbf448] text-center md:text-left py-6 pl-2 mb-6 md:mb-32 '>
                <Link to='/' className='text-xl text-secondary font-semibold '>Home / </Link>
                <span className='text-xl text-primary'>Details</span>
            </div>
            <div className="max-w-[1000px] mx-auto bg-white rounded-lg overflow-hidden shadow-md">
                <div className="md:flex items-center">
                    <div>
                        <img className="w-full h-auto object-cover object-center" src={url} alt="Toy Image" />
                    </div>
                    <div className="p-6 md:w-2/3">
                        <h2 className="text-2xl font-semibold mb-4">{toy_name}</h2>
                        <div className="flex items-center mb-4">
                            <span className="text-gray-700">Seller:</span>
                            <span className="ml-2 text-gray-900 font-semibold">{seller}</span>
                        </div>
                        <div className="flex items-center mb-4">
                            <span className="text-gray-700">Email:</span>
                            <span className="ml-2 text-gray-900 font-semibold">{email}</span>
                        </div>
                        <div className="flex items-center mb-4">
                            <span className="text-gray-700">Price:</span>
                            <span className="ml-2 text-gray-900 font-semibold">${price}</span>
                        </div>
                        <div className="flex items-center mb-4">
                            <span className="text-gray-700">Rating:</span>
                            <span className="ml-2 text-gray-900 font-semibold">{rating}</span>
                        </div>
                        <div className="flex items-center mb-4">
                            <span className="text-gray-700">Available Quantity:</span>
                            <span className="ml-2 text-gray-900 font-semibold">{quantity}</span>
                        </div>
                        <div className="mb-4">
                            <h3 className="text-lg font-semibold mb-2">Description:</h3>
                            <p className="text-gray-700">{toy_details}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;