import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './component/default/Header';
import Home from './component/default/Home';
import AdminDashboard from './component/admin/AdminDashboard';
import UserDashboard from './component/user/UserDashboard';
import Login from './component/auth/Login';
import Register from './component/auth/Register';
import Pnf from './component/default/Pnf';
import Footer from './component/default/Footer';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
   <BrowserRouter>
      <Header/>
      <ToastContainer autoClose={4000} position={'top-right'} />
        <Routes>
          <Route path={`/`} element={<Home/>} />
          <Route path={`/admin/dashboard`} element={<AdminDashboard/>} />
          <Route path={`/user/dashboard`} element={<UserDashboard/>} />

          <Route path={`/login`} element={<Login/>} />
          <Route path={`/register`} element={<Register/>} />
          <Route path={`/*`} element={<Pnf/>} />
        </Routes>
      <Footer/>
   </BrowserRouter>
  );
}

export default App;

// npm i --save dotenv react-router-dom react-toastify bootstrap bootstrap-icons axios