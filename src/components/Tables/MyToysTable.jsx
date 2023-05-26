import React, { useState } from 'react';
import { RiDeleteBin5Line } from "react-icons/ri";
import { RxUpdate } from "react-icons/rx";
import UpdateModal from '../UpdateModal/UpdateModal';
import Swal from 'sweetalert2'

const MyToysTable = ({ myToy, setUpdate, myToys, setMyToys }) => {
    const [expanded, setExpanded] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const { _id, url, toy_name, seller, email, sub_category, price, rating, quantity, toy_details
    } = myToy;

    // see more button handler
    const toggleHandler = () => {
        setExpanded(!expanded);
    };

    const openModal = () => {
        setModalOpen(true);
    };
    // update toys
    const handleUpdate = (myToy) => {
        fetch(`https://toy-marketplace-server-seven-eta.vercel.app/updatetoy/${myToy?._id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(myToy)
        })
            .then(res => res.json())
            .then(result => {
                if (result.modifiedCount > 0) {
                    setUpdate(true)
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Toy updated successful',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
    }
    //delete operation
    const deleteHandler = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You won\'t be able to revert this!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://toy-marketplace-server-seven-eta.vercel.app/deletemytoy/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(result => {
                        if (result.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your toy has been deleted.',
                                'success'
                            );
                            const remaining = myToys.filter(myToy => myToy._id !== _id);
                            setMyToys(remaining);
                        }
                    })
                    .catch(error => {
                        Swal.fire(
                            'Error!',
                            'An error occurred while deleting the toy.',
                            'error'
                        );
                    });
            }
        });
    };


    return (
        <tr>
            <td class="px-6 py-4 whitespace-nowrap">
                <img src={url} alt="Toy Image" class="h-10 w-10 rounded-full" />
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                {toy_name}
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                {seller}
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                {email}
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                {sub_category}
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                ${price}
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                {rating}
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                {quantity}
            </td>
            <td className="px-6 py-4 whitespace-normal break-all">
                <div className={`max-h-${expanded ? 'full' : '96'} overflow-hidden`}>
                    {toy_details}
                </div>
                <button onClick={toggleHandler} className="text-slate-950 hover:text-red-400 font-medium">
                    {expanded ? 'See less' : 'See more'}
                </button>
            </td>

            <td class="px-6 py-4 whitespace-nowrap">
                <button onClick={openModal} class="bg-[#2ebeef] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    <RxUpdate />
                </button>
                <button onClick={deleteHandler} class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 ml-1 px-4 rounded">
                    <RiDeleteBin5Line />
                </button>
            </td>
            <UpdateModal myToy={myToy} handleUpdate={handleUpdate} isOpen={modalOpen} onClose={() => setModalOpen(false)} />
        </tr>
    );
};

export default MyToysTable;