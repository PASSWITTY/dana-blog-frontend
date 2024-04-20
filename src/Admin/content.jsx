import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SpacesApi from "../Api/baseUrl/spacesApi";

const Content = () => {
    const [userCount, setUserCount] = useState([]);
    const [blogsCount, setBlogsCount] = useState([]);
    const [admins, setAdmins] = useState([]);

    const fetchUserCount = async () => {
        const response = await SpacesApi.users.userCount
        setUserCount(response.data)
    }
    const fetchBlogCount = async () => {
        const response = await SpacesApi.blogs.blogsCount
        setBlogsCount(response.data)
    }

    const fetchAdminOnly = async () => {
        const response = await SpacesApi.users.adminOnly
        setAdmins(response.data)
        console.log(response.data)
    }

    useEffect(() => {
        fetchUserCount()
        fetchBlogCount()
        fetchAdminOnly()
    })
    return (
        <div>
            <section className="px-4 lg:px-16">
                <div className="container mx-auto px-[16px] md:px-16 xl:px-16 max-w-[1300px] nanum2">
                    <div className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                            <div className="bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
                                <div className="flex justify-between mb-6">
                                    <div>
                                        <div className="flex items-center mb-1">
                                            <div className="text-2xl font-semibold">{userCount.adminCount}</div>
                                        </div>
                                        <div className="text-sm font-medium text-gray-400">Admins</div>
                                    </div>
                                </div>

                                <Link to="/admin/manageusers" className="text-[#f84525] font-medium text-sm hover:text-red-800">View</Link>
                            </div>
                            <div className="bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
                                <div className="flex justify-between mb-4">
                                    <div>
                                        <div className="flex items-center mb-1">
                                            <div className="text-2xl font-semibold">{userCount.authorCount}</div>
                                        </div>
                                        <div className="text-sm font-medium text-gray-400">Authors</div>
                                    </div>
                                </div>
                                <Link to="/admin/manageusers" className="text-[#f84525] font-medium text-sm hover:text-red-800">View</Link>
                            </div>
                            <div className="bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
                                <div className="flex justify-between mb-6">
                                    <div>
                                        <div className="text-2xl font-semibold mb-1">{blogsCount}</div>
                                        <div className="text-sm font-medium text-gray-400">Blogs</div>
                                    </div>
                                </div>
                                <Link to="/admin/manageblogs" className="text-[#f84525] font-medium text-sm hover:text-red-800">View</Link>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                            <div className="p-6 relative flex flex-col min-w-0 mb-4 lg:mb-0 break-words bg-gray-50 dark:bg-gray-800 w-full shadow-lg rounded">
                                <div className="rounded-t mb-0 px-0 border-0">
                                    <div className="flex flex-wrap items-center px-4 py-2">
                                        <div className="relative w-full max-w-full flex-grow flex-1">
                                            <h3 className="font-semibold text-base text-gray-900 dark:text-gray-50">Administrators</h3>
                                        </div>
                                    </div>
                                    <div className="block w-full overflow-x-auto">
                                        <table className="items-center w-full bg-transparent border-collapse">
                                            <thead>
                                                <tr>
                                                    <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">User name</th>
                                                    <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Date Created</th>
                                                    <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px"></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {admins.map((admin, index) => (
                                                    <tr key={index} className="text-gray-700 dark:text-gray-100">
                                                        <th className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">{admin.fullname}</th>
                                                        <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{new Date(admin.created_at).toLocaleDateString()}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white border border-gray-100 shadow-md shadow-black/5 p-6 rounded-md">
                                <div className="flex justify-between mb-4 items-start">
                                    <div className="font-medium">Activities</div>
                                </div>
                                <div className="overflow-hidden">
                                    <table className="w-full min-w-[540px]">
                                        <tbody>
                                            <tr>
                                                <td className="py-2 px-4 border-b border-b-gray-50">
                                                    <div className="flex items-center">
                                                        <a href="#" className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate">Lorem Ipsum</a>
                                                    </div>
                                                </td>
                                                <td className="py-2 px-4 border-b border-b-gray-50">
                                                    <span className="text-[13px] font-medium text-gray-400">02-02-2024</span>
                                                </td>
                                                <td className="py-2 px-4 border-b border-b-gray-50">
                                                    <span className="text-[13px] font-medium text-gray-400">17.45</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="py-2 px-4 border-b border-b-gray-50">
                                                    <div className="flex items-center">
                                                        <a href="#" className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate">Lorem Ipsum</a>
                                                    </div>
                                                </td>
                                                <td className="py-2 px-4 border-b border-b-gray-50">
                                                    <span className="text-[13px] font-medium text-gray-400">02-02-2024</span>
                                                </td>
                                                <td className="py-2 px-4 border-b border-b-gray-50">
                                                    <span className="text-[13px] font-medium text-gray-400">17.45</span>
                                                </td>
                                                <td className="py-2 px-4 border-b border-b-gray-50">
                                                    <div className="dropdown">
                                                        <button type="button" className="dropdown-toggle text-gray-400 hover:text-gray-600 text-sm w-6 h-6 rounded flex items-center justify-center bg-gray-50"><i className="ri-more-2-fill"></i></button>
                                                        <ul className="dropdown-menu shadow-md shadow-black/5 z-30 hidden py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px]">
                                                            <li>
                                                                <a href="#" className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">Profile</a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">Settings</a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">Logout</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Content;
