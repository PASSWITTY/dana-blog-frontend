
import NavBar from "./navBar";
import Footer from "../landingpages/footer";
import SpacesApi from "../Api/baseUrl/spacesApi";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ManageUsers = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate()

    const fetChAll = async () => {
        await SpacesApi.users.allusers
            .then(response => {
                // console.log(response.data)
                setUsers(response.data)
            }).catch(error => {
                console.log(error)
            })
    }
    const handleDelete = async (id) => {
        try {
            const response = await SpacesApi.users.deleteUser(id)
            alert(response.data);
            navigate("#")
        }
        catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetChAll()
    }, [])

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
                                        User Id
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        User Name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        User Type
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Data Created
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user, index) => (
                                    <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {user.id}
                                        </th>
                                        <td className="px-6 py-4">
                                            {user.fullname}
                                        </td>
                                        <td className="px-6 py-4">
                                            {user.role}
                                        </td>
                                        <td className="px-6 py-4">
                                            {new Date(user.created_at).toLocaleDateString()}
                                        </td>
                                        <td className="px-6 py-4">
                                            <button
                                                onClick={() => handleDelete(user.id)}
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

export default ManageUsers;
