import Header from "./header";
import Hero from "./hero";
import RightCards from "./rightcards";
import Leftcards from "./leftcards";
import Footer from "./footer";

const Landing = () => {
    return (
        <div className="bg-gray-200">
            <Header />
            <Hero />
            <div className="mt-10">
                <div className="block lg:flex lg:space-x-4 px-2 lg:p-0 mt-10">
                    <Leftcards />
                    <RightCards />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Landing;
