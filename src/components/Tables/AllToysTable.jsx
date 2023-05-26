import React from 'react';
import { Link } from 'react-router-dom';

const AllToysTable = ({toy}) => {
    const { _id, seller, toy_name, sub_category, price, quantity } = toy;
    return (
        <>
            <tr className='ml-6'>
                <td class="py-2 px-4 border-b">{seller}</td>
                <td class="py-2 px-4 border-b">{toy_name}</td>
                <td class="py-2 px-4 border-b">{sub_category}</td>
                <td class="py-2 px-4 border-b">${price}</td>
                <td class="py-2 px-4 border-b">{quantity}</td>
                <td class="py-2 px-4 border-b">
                    <Link to={`/toydetails/${_id}`} class="text-secondary hover:text-[#ff6799] duration-300 font-medium">View Details</Link>
                </td>
            </tr>
        </>
    );
};

export default AllToysTable;