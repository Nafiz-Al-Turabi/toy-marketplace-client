import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import Swal from 'sweetalert2'
import PageTitle from '../PageTitle/PageTitle';


const SignUp = () => {
    const { createNewUser } = useContext(AuthContext)

    const registerHandler = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const url = form.url.value;
        console.log(name, email, password, url);

        createNewUser(email, password)
            .then(result => {
                const newUser = result.user
                console.log(newUser);
                updateUser(result.user, name, url)
                event.target.reset();
            })
            .catch(error => {
                console.log(error);
            })
    }

    const updateUser = (user, name, url) => {
        updateProfile(user, {
            displayName: name,
            photoURL: url
        })
            .then(() => {
                Swal.fire({
                    title: 'Registration Successful!',
                    text: 'Do you want to continue',
                    icon: 'success',
                    confirmButtonText: 'Yes',
                    customClass: {
                        confirmButton: 'bg-blue- hover:bg-blue-600 text-white',
                      },
                  })
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div>
            <PageTitle title="Register" />
            <div className='bg-[#8edbf448] text-center md:text-left py-6 pl-2 mb-6 md:mb-32'>
                <Link to='/' className='text-xl text-secondary font-semibold '>Home / </Link>
                <span className='text-xl text-primary'>Register</span>
            </div>
            <div className='bg-[#8edbf448] md:w-1/4 mx-auto p-6 rounded-md'>
                <div className='text-center'>
                    <h1 className='text-4xl text-slate-600 font-bold mb-3'>Login </h1>
                    <p className='text-slate-500 mb-6'>Please give your right information and login</p>
                </div>
                <form onSubmit={registerHandler}>
                    <div>
                        <input className='w-full my-3 border-none rounded-md input' type="text" name="name" id="name" placeholder='Name' required />
                    </div>
                    <div>
                        <input className='w-full my-3 border-none rounded-md input' type="email" name="email" id="email" placeholder='Email' required />
                    </div>
                    <div>
                        <input className='w-full my-3 border-none rounded-md input' type="password" name="password" id="password" placeholder='Password' required />
                    </div>
                    <div>
                        <input className='w-full my-3 border-none rounded-md input' type="url" name="url" id="url" placeholder='Photo URL' required />
                    </div>
                    <div className='flex justify-between'>
                        <p>Already Have account?</p>
                        <Link to='/login' className='text-secondary'>Login now</Link>
                    </div>
                    <div className='text-center'>
                        <button className='w-full bg-secondary text-white text-2xl font-bold rounded hover:bg-[#ff6799] duration-300 active:scale-95 py-1  my-6 '>Sign Up</button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default SignUp;