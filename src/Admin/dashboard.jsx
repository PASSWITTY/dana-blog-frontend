import NavBar from "./navBar";
import Footer from "../landingpages/footer";
import Content from "./content";

const Dashboard = () => {
  return (
    <div className="bg-gray-600">
       <NavBar />
       <Content />
       <Footer />
    </div>
  );
}

export default Dashboard;
