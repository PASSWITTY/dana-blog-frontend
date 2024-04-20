import Hero from "./hero";
import Header from "./header";
import Footer from "./footer";
import SpacesApi from "../Api/baseUrl/spacesApi";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


const Data = () => {
    const { id } = useParams();
    const [blogData, setBlogData] = useState(null);

    useEffect(() => {
        const fetchBlogData = async () => {
            try {
                const response = await SpacesApi.blogs.getBlogById(id);
                setBlogData(response.data);
            } catch (error) {
                alert("Error fetching blog data:", error)
            }
        };

        fetchBlogData();
    }, [id]);

    if (!blogData) {
        return <div className=" items-center justify-center text-gray-700 text-2xl"><h1>Loading...</h1></div>;
    }
    return (
        <div className="bg-gray-200">
            <Header />
            <Hero />
            <div className="mt-10">
                <div className="block lg:flex lg:space-x-4 px-2 lg:p-0 mt-10">
                    <div className="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">

                        <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">{blogData.title}</h2>
                        <p className="pb-6">{blogData.text}</p>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Data;