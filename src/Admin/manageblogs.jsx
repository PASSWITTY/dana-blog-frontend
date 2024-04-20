
import NavBar from "./navBar";
import Footer from "../landingpages/footer";
import SpacesApi from "../Api/baseUrl/spacesApi";
import { useEffect, useState } from "react";

const Manageblogs = () => {
    const [blogs, setBlogs] = useState([]);

    const fetchBlogs = async () => {
        await SpacesApi.blogs.allblogs
            .then(response => {
                setBlogs(response.data)
            }).catch(error => {
                alert(error)
            })
    }

    const handleDeleteBlog = async (id) => {
        const response = await SpacesApi.blogs.deleteBlog(id)
        console.log(response)
    }

    useEffect(() => {
        fetchBlogs()
    })
    return (
        <div className="bg-gray-300">
            <NavBar />

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
                                        Author
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Date Created
                                    </th>
                                    {/* <th scope="col" className="px-6 py-3">
                                        Price
                                    </th> */}
                                    <th scope="col" className="px-6 py-3">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {blogs.map((blog, index) => (
                                    <tr key={index} className="bg-white border-b dark:bg-gray-600 dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {blog.id}
                                        </th>
                                        <td className="px-6 py-4">
                                            {blog.title}
                                        </td>
                                        <td className="px-6 py-4">
                                            {blog.author}
                                        </td>
                                        <td className="px-6 py-4">
                                            {new Date(blog.created_at).toLocaleDateString()}
                                        </td>
                                        <td className="px-6 py-4">
                                            <button
                                                onClick={() => handleDeleteBlog(blog.id)}
                                                className="font-medium text-red-600 dark:text-red-500 hover:underline">
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default Manageblogs;
