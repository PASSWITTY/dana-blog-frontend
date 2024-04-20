/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
// import LocalStorage from '../localStorage';
import { Link, useNavigate } from 'react-router-dom';

const NavBar = () => {
    // eslint-disable-next-line no-unused-vars
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    //   const storedUser = LocalStorage.getUserFromLocalStorage();
    // const [isNotificationOpen, setIsNotificationOpen] = useState(false);
    const [user, setUser] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');

    //   useEffect(() => {
    //     const storedUser = LocalStorage.getUserFromLocalStorage();
    //     if (storedUser) {
    //       const user = JSON.parse(storedUser);
    //       setUsername(user.username);
    //       setEmail(user.user_email);
    //     }
    //   }, []);


    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleProfileMenu = () => {
        setIsProfileOpen(!isProfileOpen);
    };

    const handleSignout = () => {
        localStorage.removeItem('user');
        window.location.href = "/"
    }

    return (
        <div>
            <nav className="bg-white border-gray-200 dark:bg-gray-600">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to="/admin/dashboard" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <h2 className="font-bold text-2xl "><span className="text-white px-2 rounded-md">MyBlog</span></h2>
                    </Link>

                    <div className="flex items-right md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse relative">
                    </div>

                    <div>
                        <button data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false" onClick={toggleMenu}>
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>

                    <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto md:order-1`} id="navbar-user">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-600 md:dark:bg-gray-600 dark:border-gray-600">
                            <li>
                                <Link to="/admin/dashboard"
                                    className="block py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Home</Link>
                            </li>
                            <li>
                                <Link to="/admin/manageblogs"
                                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Manage Blogs</Link>
                            </li>
                            <li>
                                <Link to="/admin/manageusers"
                                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Manage Users</Link>
                            </li>
                            <li>
                                <button
                                onClick={handleSignout}
                                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                    Logout
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >
        </div >
    );
}

export default NavBar;
