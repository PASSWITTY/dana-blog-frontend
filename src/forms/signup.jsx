import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SpacesApi from "../Api/baseUrl/spacesApi";

const Signup = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmpassword: ''
    });

    const [errors, setErrors] = useState({
        username: '',
        email: '',
        password: '',
        confirmpassword: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value,
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        let valid = true;
        const newErrors = { ...errors }

        if (!formData.username) {
            newErrors.username = "please enter your Full name";
            valid = false;
        } else {
            newErrors.username = "";
        }
        if (!formData.email || !formData.email.includes('@')) {
            newErrors.email = "please enter your valid email address e.g (john@example.com)";
            valid = false;
        } else {
            newErrors.email = "";
        }

        let check = /(?=.{8,})/;
        if (!formData.password) {
            newErrors.password = "please enter your password";
            valid = false;
        } else if (!formData.password.match(check)) {
            newErrors.password = "Password should be atleast 8 characters";
            valid = false;
        } else {
            newErrors.password = "";
        }
        if (!formData.confirmpassword) {
            newErrors.confirmpassword = "please confirm your password";
            valid = false;
        } else if (formData.confirmpassword !== formData.password) {
            newErrors.confirmpassword = "Password does not match";
            valid = false;
        } else {
            newErrors.confirmpassword = "";
        }
        setErrors(newErrors)

        if (valid) {
            SpacesApi.auth.register({
                fullname: formData.username,
                email: formData.email,
                password: formData.password,
            }).then(response => {
                console.log(response.data)
                alert(response.data)
                navigate('/login')
            }).catch(error => {
                console.log(error.message)
                alert(error.message)
            })
        }
    }

    return (
        <div className="bg-gray-800 text-white flex min-h-screen flex-col items-center pt-16 sm:justify-center sm:pt-0">
            <Link to="/">
                <div className="text-foreground font-semibold text-2xl tracking-tighter mx-auto flex items-center gap-2">
                    MyBlog
                </div>
            </Link>
            <div className="relative mt-12 w-full max-w-lg sm:mt-10">
                <div
                    className="relative -mb-px h-px w-full bg-gradient-to-r from-transparent via-sky-300 to-transparent"

                ></div>
                <div className="mx-5 border dark:border-b-white/50 dark:border-t-white/50 border-b-white/20 sm:border-t-white/20 shadow-[20px_0_20px_20px] shadow-slate-500/10 dark:shadow-white/20 rounded-lg border-white/20 border-l-white/20 border-r-white/20 sm:shadow-sm lg:rounded-xl lg:shadow-none">
                    <div className="flex flex-col p-6">
                        <h3 className="text-xl font-semibold leading-6 tracking-tighter">
                            Sign Up
                        </h3>
                        <p className="mt-1.5 text-sm font-medium text-white/50">
                            Your Presense is Highly appreciated.
                        </p>
                    </div>
                    <div className="p-6 pt-0">
                        <form onSubmit={handleSubmit}>

                            <div>
                                <div className={`group relative rounded-lg border focus-within:border-sky-200 ${errors.username ? 'border-red-500' : 'border-gray-200'} px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30`}>
                                    <div className="flex justify-between">
                                        <label className="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400">
                                            Full name
                                        </label>
                                        <div className="absolute right-3 translate-y-2 text-green-200">

                                        </div>
                                    </div>
                                    <input
                                        type="text"
                                        id="username"
                                        autoComplete="true"
                                        value={formData.username}
                                        onChange={handleChange}
                                        className="block w-full border-0 bg-transparent p-0 text-sm file:my-1 file:rounded-full file:border-0 file:bg-accent file:px-4 file:py-2 file:font-medium placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 sm:leading-7 text-foreground"
                                    />
                                </div>
                                {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
                            </div>

                            <div className="mt-4">
                                <div>
                                    <div className={`group relative rounded-lg border focus-within:border-sky-200 ${errors.email ? 'border-red-500' : 'border-gray-200'} px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30`}>
                                        <div className="flex justify-between">
                                            <label className="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400">
                                                Email Address
                                            </label>
                                        </div>

                                        <div className="flex items-center">
                                            <input
                                                type="email"
                                                id="email"
                                                autoComplete="true"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="block w-full border-0 bg-transparent p-0 text-sm file:my-1 placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 focus:ring-teal-500 sm:leading-7 text-foreground"
                                            />
                                        </div>
                                    </div>
                                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                                </div>
                            </div>

                            <div className="mt-4">
                                <div>
                                    <div className={`group relative rounded-lg border focus-within:border-sky-200 ${errors.password ? 'border-red-500' : 'border-gray-200'} px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30`}>
                                        <div className="flex justify-between">
                                            <label className="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400">
                                                Password
                                            </label>
                                        </div>

                                        <div className="flex items-center">
                                            <input
                                                type="password"
                                                id="password"
                                                autoComplete="true"
                                                value={formData.password}
                                                onChange={handleChange}
                                                className="block w-full border-0 bg-transparent p-0 text-sm file:my-1 placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 focus:ring-teal-500 sm:leading-7 text-foreground"
                                            />
                                        </div>
                                    </div>
                                    {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                                </div>
                            </div>

                            <div className="mt-4">
                                <div>
                                    <div className={`group relative rounded-lg border focus-within:border-sky-200 ${errors.confirmpassword ? 'border-red-500' : 'border-gray-200'} px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30`}>
                                        <div className="flex justify-between">
                                            <label className="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400">
                                                Confirm Password
                                            </label>
                                        </div>

                                        <div className="flex items-center">
                                            <input
                                                type="password"
                                                id="confirmpassword"
                                                autoComplete="true"
                                                value={formData.confirmpassword}
                                                onChange={handleChange}
                                                className="block w-full border-0 bg-transparent p-0 text-sm file:my-1 placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 focus:ring-teal-500 sm:leading-7 text-foreground"
                                            />
                                        </div>
                                    </div>
                                    {errors.confirmpassword && <p className="text-red-500 text-sm mt-1">{errors.confirmpassword}</p>}
                                </div>
                            </div>
                            <div className="mt-4 flex items-center justify-between">
                                <label className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        name="remember"
                                        className="outline-none focus:outline focus:outline-sky-300"
                                    />
                                    <span className="text-sm font-medium text-foreground ">Agree to <Link to="" className="hover:underline hover:text-blue-500">Terms and Conditions </Link></span>
                                </label>
                            </div>
                            <div className="mt-4 flex items-center justify-end gap-x-2">
                                <Link to='/'
                                    className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-all hover:underline hover:text-blue-500  disabled:pointer-events-none disabled:opacity-50 hover:bg-accent h-10 px-4 py-2 duration-200"

                                >
                                    Back
                                </Link>

                                <Link to='/login'
                                    className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:ring hover:ring-white h-10 px-4 py-2 duration-200"

                                >
                                    Login
                                </Link>
                                <button
                                    className="font-semibold hover:bg-black hover:text-white hover:ring hover:ring-white transition duration-300 inline-flex items-center justify-center rounded-md text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-black h-10 px-4 py-2"
                                    type="submit"
                                >
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;