import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../Provider/AuthProvider';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import PageTitle from '../PageTitle/PageTitle';


const AddToy = () => {
    const { user } = useContext(AuthContext)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data,e )=> {
        fetch('https://toy-marketplace-server-seven-eta.vercel.app/postToy',{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result=>{
            console.log(result)
            Swal.fire({
                title: 'Success!',
                text: 'Toy added successfully.',
                icon: 'success',
                confirmButtonText: 'OK',
                customClass: {
                  confirmButton: 'bg-blue-500 hover:bg-blue-600 text-white',
                },
              });
        })
        .catch(error=>{
            console.log(error.message);
            Swal.fire({
                title: 'Error!',
                text: 'An error occurred while adding the toy.',
                icon: 'error',
                confirmButtonText: 'OK',
                customClass: {
                  confirmButton: 'bg-red-500 hover:bg-red-600 text-white',
                },
              });
        })
        e.target.reset();
        
    };
    return (
        <div>
            <PageTitle title="Add Toy" />
            <div className='bg-[#8edbf448] text-center md:text-left py-6 pl-2 mb-6 md:mb-32 '>
                <Link to='/' className='text-xl  text-secondary font-semibold '>Home / </Link>
                <span className='text-xl text-primary '>Add Toy</span>
            </div>
            <div className='bg-[#8edbf448] md:w-3/4 mx-auto rounded p-6'>
                <h1 className='text-center text-2xl md:text-4xl font-bold text-slate-600 mt-5 mb-2'>Add toy</h1>
                <p className='text-center text-slate-500 mb-6'>Fill up proper information and add your toy</p>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                        <div className='mb-3'>
                            <input className='w-full h-10 pl-3 rounded' placeholder='Toy Name' {...register("toy_name")} required />
                        </div>
                        <div className='mb-3'>
                            <input className='w-full h-10 pl-3 rounded' placeholder='Photo url' {...register("url")} required />
                        </div>
                        <div className='mb-3'>
                            <input className='w-full h-10 pl-3 rounded' defaultValue={user?.email} {...register("email")} required />
                        </div>
                        <div className='mb-3'>
                            <input className='w-full h-10 pl-3 rounded' defaultValue={user?.displayName} {...register("seller")} required />
                        </div>

                        <div className='mb-3'>
                            <input className='w-full h-10 pl-3 rounded' placeholder='Total price' {...register("price")} required />
                        </div>
                        <div className='mb-3'>
                            <input className='w-full h-10 pl-3 rounded' placeholder='Ratings' {...register("rating")} required />
                        </div>
                        <div className='mb-3'>
                            <input className='w-full h-10 pl-3 rounded' placeholder='Product Quantity' {...register("quantity")} required />
                        </div>
                        <div className='mb-3'>
                            <select {...register("sub_category")} className='w-full '>
                                <option value="">Select Category</option>
                                <option value="Princess Dolls">Princess Dolls</option>
                                <option value="Pixar Dolls">Pixar Dolls</option>
                                <option value="Classic Character Dolls">Classic Character Dolls</option>
                            </select>
                        </div>
                        <div className='mb-3 md:col-span-2 '>
                            <textarea className='w-full h-10 pl-3 border-none' placeholder='Add toy details...' {...register("toy_details")} />
                        </div>
                    </div>

                    {/* <input {...register("exampleRequired", { required: true })} /> */}
                    {/* errors will return when field validation fails  */}
                    {errors.exampleRequired && <span>This field is required</span>}

                    <input className='w-full  bg-[#2ebeef] hover:bg-[#ff6799] duration-500 text-white font-bold py-2 px-4 mt-4 rounded-full cursor-pointer active:scale-95' type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddToy;


