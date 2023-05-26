import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from '../../ActiveLink/ActiveLink';
import { AuthContext } from '../../../Provider/AuthProvider';
import { AiFillPlusSquare } from "react-icons/ai"

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleSignOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error.message))
    }
    return (
        <Navbar className='md:my-5'
            fluid={true}
            rounded={true}
        >
            <Navbar.Brand href="/">
                <img
                    src="https://i.ibb.co/xS6X8zY/logo.png"
                    className="mr-3 h-10 sm:h-9"
                    alt="Logo"
                />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">

                </span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                {
                    user ?
                       <div className='flex items-center'>
                        <Link to='/addtoy' className='flex items-center font-bold text-primary mr-3 uppercase' title='Add Toy'>Add toy< AiFillPlusSquare className='text-4xl' /></Link>
                       <Dropdown
                       arrowIcon={false}
                       inline={true}
                       label={<Avatar alt="User settings" title={user?.displayName} img={user.photoURL} rounded={true} />}
                   >
                       <Dropdown.Header>
                           <div>
                               <span className="block text-sm">
                                   {
                                       user?.displayName
                                   }
                               </span>
                               <span className="block truncate text-sm font-medium">
                                   {user?.email}
                               </span>
                           </div>
                       </Dropdown.Header>

                       <Dropdown.Divider />
                       <Dropdown.Item onClick={handleSignOut}>
                           Sign out
                       </Dropdown.Item>
                   </Dropdown> 
                   </div> : <Link to='/login' className="bg-[#2ebeef] hover:bg-[#ff6799] duration-300 text-white font-bold py-2 px-4 mt-4 rounded-full">Login</Link>
                }
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <ActiveLink to='/'>Home</ActiveLink>
                <ActiveLink to='/alltoys'>All Toys</ActiveLink>
                {
                    user ? <ActiveLink to='/mytoys'>My Toys</ActiveLink>:<></>
                }
                <ActiveLink to='/blog'>Blog</ActiveLink>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;