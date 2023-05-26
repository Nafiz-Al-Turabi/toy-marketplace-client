import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2'
import PageTitle from '../PageTitle/PageTitle';


const Login = () => {
    const { googleLogin,gitLogin, login } = useContext(AuthContext)
    const location=useLocation()
    const navigate=useNavigate()
    
    const from =location.state?.from?.pathname || '/'

    // Email and password login
    const loginHandler = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(result => {
                const loginUser = result.user
                Swal.fire({
                    title: 'Login Successful!',
                    text: 'Logged in as ' + loginUser.displayName,
                    icon: 'success',
                    confirmButtonText: 'OK',
                    customClass: {
                        confirmButton: 'bg-blue-500 hover:bg-blue-600 text-white',
                    },
                });
                form.reset();
                navigate(from, {replace: true})
            })
            .catch(error => {
                console.log(error);
            })
    }

    // Google login
    const googleLoginHandler = () => {
        googleLogin()
            .then(result => {
                const googleUser = result.user;
                Swal.fire({
                    title: 'Google Login Successful!',
                    text: 'Logged in as ' + googleUser.displayName,
                    icon: 'success',
                    confirmButtonText: 'OK',
                    customClass: {
                        confirmButton: 'bg-blue-500 hover:bg-blue-600 text-white',
                    },
                });
                navigate(from, {replace: true})
            })
            .catch(error => {
                console.log(error);
            })
    }
    // Github login

    const gitLoginHandler=()=>{
        gitLogin()
        .then(result=>{
            const gitUser=result.user;
            Swal.fire({
                title: 'GitHub Login Successful!',
                text: 'Logged in as ' + loginUser.displayName,
                icon: 'success',
                confirmButtonText: 'OK',
                customClass: {
                    confirmButton: 'bg-blue-500 hover:bg-blue-600 text-white',
                },
            });
            navigate(from, {replace: true})
        })
        .catch(error=>{
            console.log(error);
        })
    }
    
    return (
        <div>
            <PageTitle title="Login" />
            <div className='bg-[#8edbf448] text-center md:text-left py-6 pl-2 mb-6 md:mb-32 '>
                <Link to='/' className='text-xl text-secondary font-semibold '>Home / </Link>
                <span className='text-xl text-primary'>Login</span>
            </div>
            <div className='bg-[#8edbf448] md:w-1/4 mx-auto p-6 rounded'>
                <div className='text-center'>
                    <h1 className='text-4xl text-slate-600 font-bold mb-3'>Login </h1>
                    <p className='text-slate-500 mb-6'>Please give your right information and login</p>
                </div>
                <form onSubmit={loginHandler} >
                    <div>
                        <input className='w-full my-2 border-none rounded input' type="email" name="email" id="email" placeholder='Email' required />
                    </div>
                    <div>
                        <input className='w-full my-2 border-none rounded input' type="password" name="password" id="password" placeholder='Password' required />
                    </div>
                    <div className='flex justify-between'>
                        <Link>Forgot Password?</Link><br />
                        <Link to='/signup' className='text-secondary'>Register now</Link>
                    </div>
                    <div className='text-center'>
                        <button className='w-full bg-secondary text-white text-2xl font-bold rounded-md hover:bg-[#ff6799] duration-300 active:scale-95 py-1  my-6 '>Login</button>
                    </div>
                </form>
                <p className='text-center'>-------or-------</p>
                <div className='flex justify-center gap-2 mt-6'>
                    <button onClick={gitLoginHandler}><img className='h-10 w-10 active:scale-95' src="https://i.ibb.co/NrvWqT5/github1.png" alt="" /></button>
                    <button onClick={googleLoginHandler}><img className='h-12 w-12 active:scale-95' src="https://i.ibb.co/2nGNWqf/google.png" alt="" /></button>
                </div>
            </div>
        </div>
    );
};

export default Login;