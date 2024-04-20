import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './forms/login';
import Signup from './forms/signup';
import Landing from "./landingpages/landing";
import Dashboard from "./Admin/dashboard";
import Dashboard2 from "./author/dashboard2";
import Manageblogs from "./Admin/manageblogs";
import ManageUsers from "./Admin/manageUsers";
import Manageblogs2 from "./author/manageblogs";
import AddBlogs from "./author/AddBlog";
import Data from "./landingpages/data";
import EditBlogs from "./author/edit";
import { AuthProvider } from "./context/authcontext";

// const Login = lazy(() => import('./forms/login'))
// const Signup = lazy(() => import('./forms/signup'))
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Landing />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signup' element={<Signup />} />
        <Route exact path='/data/:id' element={<Data />} />
        <Route path="" element={<div>Error 404</div>} />
      </Routes>

      <AuthProvider>
        <Routes>
          <Route exact path="/admin/dashboard" element={<Dashboard />} />
          <Route exact path="/admin/manageblogs" element={<Manageblogs />} />
          <Route exact path="/admin/manageusers" element={<ManageUsers />} />

          <Route exact path="/author/dashboard" element={<Dashboard2 />} />
          <Route exact path="/author/manageblogs" element={<Manageblogs2 />} />
          <Route exact path="/author/addblogs" element={<AddBlogs />} />
          <Route exact path='/edit/:id' element={<EditBlogs />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
