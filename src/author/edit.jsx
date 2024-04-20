import NavBar2 from "./navBar";
import Footer from "../landingpages/footer";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useState, useEffect } from "react";
import SpacesApi from "../Api/baseUrl/spacesApi";
import { useNavigate, useParams } from "react-router-dom";


const EditBlogs = () => {

    const { id } = useParams()
    const navigate = useNavigate();

    const [blogData, setBlogData] = useState({
        title: '',
        author: '',
        text: '',
    })
    const [errors, setErrors] = useState({
        title: '',
        text: '',
    })

    const handleChange = (event, editor) => {
        if (editor) {
            const data = editor.getData();
            setBlogData({
                ...blogData,
                text: data
            });
        } else {
            const { id, value } = event.target;
            setBlogData({
                ...blogData,
                [id]: value
            });
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        let valid = true;
        const newErrors = { ...errors }

        if(!blogData.title){
            newErrors.title = "Enter blog title";
            valid = false;
        }else {
            newErrors.title = ""
        }

        if(!blogData.text){
            newErrors.text = "Enter blog Content";
            valid = false;
        }else {
            newErrors.text = ""
        }
        setErrors(newErrors);

        if (valid) {
            try {
                const response = await SpacesApi.blogs.updateBlog({
                    title: blogData.title,
                    author: blogData.author,
                    text: blogData.text,
                    id: blogData.id,
                })
                alert(response.data);
                navigate("/author/dashboard")
            } catch (error) {
                console.log(error);
            }
        }
    }
    useEffect(() => {
        const fetchBlogData = async () => {
            try {
                const response = await SpacesApi.blogs.getBlogById(id);
                setBlogData(response.data);
                // console.log(id)
            } catch (error) {
                alert("Error fetching blog data:", error)
            }
        };

        fetchBlogData();
    }, [id]);

    return (
        <div className="bg-gray-300">
            <NavBar2 />

            <section className="py-20 px-4 lg:px-16">
                <div className="container mx-auto px-[16px] md:px-16 xl:px-16 max-w-[1300px] nanum2">
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <div className="py-12">
                            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                                <div className="overflow-hidden shadow-sm sm:rounded-lg">
                                    <div className="p-6 bg-white border-b border-gray-900">

                                        <div className="mb-4">
                                            <label className="text-xl text-gray-600">
                                                Title <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                className="border-2 border-gray-300 p-2 w-full"
                                                id="title"
                                                value={blogData.title}
                                                onChange={handleChange}
                                                placeholder="ASMR"
                                            />
                                            {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
                                        </div>

                                        <div className="mb-4">
                                            <label className="text-xl text-gray-600">
                                                Author
                                            </label>
                                            <input
                                                type="text"
                                                className="border-2 border-gray-300 p-2 w-full"
                                                id="author"
                                                value={blogData.author}
                                                onChange={handleChange}
                                                placeholder="(Optional)"
                                            />
                                        </div>
                                    </div>

                                    <div className="mb-8">
                                        <label className="text-xl text-gray-600">
                                            Content <span className="text-red-500">*</span>
                                        </label>
                                        <div className="border-2 border-gray-500">
                                            <CKEditor
                                                className="min-h-50"
                                                editor={ClassicEditor}
                                                config={{
                                                    placeholder: "Write your contents Here!",
                                                    id: "text"
                                                }}
                                                onChange={handleChange}
                                                value={blogData.text}
                                                data={blogData.text}
                                            />
                                            {errors.text && <p className="text-red-500 text-sm mt-1">{errors.text}</p>}
                                        </div>
                                    </div>

                                    <div className="flex p-1">
                                        {/* <button className="border-2 border-gray-300 border-r p-2" name="action">
                                            <option>Publish</option>
                                            <option>Save Draft</option>
                                        </button> */}
                                        <button
                                            onClick={handleSubmit}
                                            role="submit"
                                            className="p-3 bg-blue-500 text-white hover:bg-blue-400"
                                            required
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default EditBlogs;