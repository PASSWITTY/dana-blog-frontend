import { useState } from "react";
import SpacesApi from "../Api/baseUrl/spacesApi";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Leftcards = () => {
    const [allBlogs, setAllBlogs] = useState([]);

    const fetchAllBlogs = async () => {
        const response = await SpacesApi.blogs.allblogs
        // console.log(response.data);
        setAllBlogs(response.data)
    }

    useEffect(() => {
        fetchAllBlogs()
    }, [])

    return (

        <div className="w-full lg:w-2/3 ml-2">
            {allBlogs.map((allblog, index) => (
                <Link to={`/data/${allblog.id}`} key={index} className="block rounded w-full lg:flex mb-10">
                    <div
                        className="max-h-68 lg:w-48 flex-none bg-cover text-center overflow-hidden opacity-75"
                        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80')` }}
                        title="deit is very important"
                    >
                    </div>

                    <div className="bg-white rounded px-4 flex flex-col justify-between leading-normal">
                        <div>
                            <div className="mt-3 md:mt-0 text-gray-700 font-bold text-2xl mb-2">
                                {allblog.title}
                            </div>
                            <p className="text-gray-700 max-h-68 text-base">
                                <div dangerouslySetInnerHTML={{ __html: allblog.text }} />
                            </p>
                        </div>
                        <div className="flex mt-3">
                            <div>
                                <p className="font-semibold text-gray-700 text-sm capitalize"> {allblog.author} </p>
                                <p className="text-gray-600 text-xs"> {new Date(allblog.created_at).toLocaleDateString()} </p>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div >
    )
}
export default Leftcards;  