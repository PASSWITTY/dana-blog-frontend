import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div  className="max-w-screen mx-auto">
            <header className="flex items-center justify-between py-2 border-b">
                <Link to="/" className="px-2 ml-4 lg:px-0 uppercase font-extrabold text-2xl text-slate-800">
                    My BloG
                </Link>
                <ul className="inline-flex items-center">
                    <li className="px-2 md:px-4">
                        <Link to="/" className="text-slate-600 font-semibold hover:text-blue-500"> Home </Link>
                    </li>
                    {/* <li className="px-2 md:px-4">
                        <a href="#" className="text-slate-600 font-semibold hover:text-blue-500"> About </a>
                    </li> */}
                    {/* <li className="px-2 md:px-4">
                        <a href="#" className="text-slate-600 font-semibold hover:text-purple-500"> Press </a>
                    </li> */}
                    {/* <li className="px-2 md:px-4">
                        <a href="#" className="text-slate-600 font-semibold hover:text-blue-500"> Contact </a>
                    </li> */}

                    <li className="px-2 md:px-4 md:block">
                        <Link to= '/login' className="text-gray-500 font-semibold hover:text-blue-500 hover:underline"> Login </Link>
                    </li>
                    <li className="px-2 md:px-4 md:block">
                        <Link to="/signup" className="text-gray-500 font-semibold hover:text-blue-500 hover:underline"> Register </Link>
                    </li>
                </ul>

            </header>
        </div>
    );
};

export default Header;
