import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Provider/AuthProvider';

const UpdateModal = ({ isOpen, onClose,myToy,handleUpdate }) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data,e )=> {
    };

    return (
        <React.Fragment>
            <Modal show={isOpen} size="md" popup={true} onClose={onClose}>
                <Modal.Header />
                <h1 className='text-center text-xl text-slate-600 font-bold'>Update</h1>
                <Modal.Body>
                    <form onSubmit={handleSubmit(handleUpdate)} >
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                        <div className='mb-3 col-span-3 block invisible'>
                                <input className='w-full h-10 pl-3 input '    placeholder='Total price' defaultValue={myToy._id} {...register("_id")} required />
                            </div>
                            
                            <div className='mb-3'>
                                <input className='w-full h-10 pl-3 input'    placeholder='Total price' defaultValue={myToy.price} {...register("price")} required />
                            </div>
                            
                            <div className='mb-3'>
                                <input className='w-full h-10 pl-3  input' placeholder='Product Quantity' defaultValue={myToy.quantity} {...register("quantity")} required />
                            </div>
                            
                            <div className='mb-3 md:col-span-2 '>
                                <textarea className='w-full h-32 pl-3 border-none input' placeholder='Add toy details...' defaultValue={myToy.toy_details} {...register("toy_details")} />
                            </div>
                        </div>

                        {/* <input {...register("exampleRequired", { required: true })} /> */}
                        {/* errors will return when field validation fails  */}
                        {errors.exampleRequired && <span>This field is required</span>}

                        <input className='w-full  bg-[#2ebeef] hover:bg-[#ff6799] duration-500 text-white font-bold py-2 px-4 mt-4 rounded-full cursor-pointer active:scale-95' type="submit" value='Update now' />
                    </form>
                </Modal.Body>
            </Modal>
        </React.Fragment>
    );
};

export default UpdateModal;
