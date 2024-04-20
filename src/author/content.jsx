import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SpacesApi from "../Api/baseUrl/spacesApi";
import LocalStorage from "../components/localstorage";

const Content2 = () => {
    const [blogsCount, setBlogsCount] = useState([]);
    const [uid, setID] = useState('');

    const fetchBlogCount = async (id) => {
        const response = await SpacesApi.blogs.getBlogCount(id)
        setBlogsCount(response.data)
    }

    useEffect(() => {
        const storedUser = LocalStorage.getUserFromLocalStorage()
        if (!storedUser) {
            alert("login again")
        } else {
            const user = JSON.parse(storedUser);
            setID(user.id)
        }
        fetchBlogCount(uid)
    })
    return (
        <div>
            <section className="px-4 lg:px-16">
                <div className="container mx-auto px-[16px] md:px-16 xl:px-16 max-w-[1300px] nanum2">
                    <div className="p-6">
                        <div className=" mb-10">
                            <div className="bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
                                <div className="flex justify-between mb-6">
                                    <div>
                                        <div className="text-2xl font-semibold mb-1">{blogsCount}</div>
                                        <div className="text-sm font-medium text-gray-400">Blogs</div>
                                    </div>
                                </div>
                                <Link to="/author/manageblogs" className="text-[#f84525] font-medium text-sm hover:text-red-800">View</Link>
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
            </section>

        </div>
    );
}

export default Content2;
