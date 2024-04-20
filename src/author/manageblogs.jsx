import NavBar2 from "./navBar";
import Footer from "../landingpages/footer";
import SpacesApi from "../Api/baseUrl/spacesApi";
import LocalStorage from "../components/localstorage";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Manageblogs2 = () => {
    const [blogs, setBlogs] = useState([]);
    const [uid, setID] = useState('');

    const fetchBlogs = async (id) => {
        await SpacesApi.blogs.getBlogByUID(id)
            .then(response => {
                setBlogs(response.data)
            }).catch(error => {
                // alert(error.message)
                console.log(error.message)
            })
    }

    const handleDeleteBlog = async (id) => {
        const response = await SpacesApi.blogs.deleteBlog(id)
        alert(response.data)
    }

    // const handleEditBlog = async () => {
    //     alert("youve Edited")
    // }

    useEffect(() => {
        const storedUser = LocalStorage.getUserFromLocalStorage()
        if (!storedUser) {
            alert("login again")
        } else {
            const user = JSON.parse(storedUser);
            setID(user.id)
        }
        fetchBlogs(uid)
    })

    return (
        <div className="bg-gray-300">
            <NavBar2 />

            <section className="py-20 px-4 lg:px-16">
                <div className="container mx-auto px-[16px] md:px-16 xl:px-16 max-w-[1300px] nanum2">
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">

                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Blog ID
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Blog Title
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Date Created
                                    </th>
                                    <th scope="col-2" className="px-6 py-3" colSpan="2">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {blogs.length == 0 ? (
                                    <tr>
                                        <td className="items-center text-gray-950" colSpan="5">No Blog created</td>
                                    </tr>
                                ) : (
                                    blogs.map((blog, index) => (
                                        <tr key={index} className="bg-white border-b dark:bg-gray-600 dark:border-gray-700">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {blog.id}
                                            </th>
                                            <td className="px-6 py-4">
                                                {blog.title}
                                            </td>
                                            <td className="px-6 py-4">
                                                {new Date(blog.created_at).toLocaleDateString()}
                                            </td>
                                            <td className="px-6 py-4">
                                                <Link to={`/edit/${blog.id}`}
                                                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                                    Edit
                                                </Link>
                                            </td>
                                            <td className="px-6 py-4">
                                                <button
                                                    onClick={() => handleDeleteBlog(blog.id)}
                                                    className="font-medium text-red-600 dark:text-red-500 hover:underline">
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                )}

                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default Manageblogs2;
