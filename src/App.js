import React, { useContext } from 'react'; 
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './component/default/Header';
import Home from './component/default/Home';
import AdminDashboard from './component/admin/AdminDashboard';
import UserDashboard from './component/user/UserDashboard';
import Login from './component/auth/Login';
import Register from './component/auth/Register';
import Pnf from './component/default/Pnf';
import Footer from './component/default/Footer';
import { ToastContainer } from 'react-toastify';
import PrivateRoute from './Auth/PrivateRoute';
import { AuthContext } from './Context/AuthContext';
import View from './component/screens/View';
import FileUpload from './component/user/FileUpload';
import GeneratePassword from './component/auth/GeneratePassword';
import ResetPassword from './component/auth/ResetPassword';

function App() {
  const context = useContext(AuthContext)
  const isLogin = context.isLogin
  return (
   <BrowserRouter>
      <Header/>
      <ToastContainer autoClose={4000} position={'top-right'} />
        <Routes>
          <Route element={<PrivateRoute/>}>
            <Route exact path={`/`} element={<Home/>} />
            <Route exact path={`/admin/dashboard`} element={<AdminDashboard/>} />
            <Route exact path={`/user/dashboard`} element={<UserDashboard/>} />
            <Route exact path={`/upload/new`} element={<FileUpload/>} />
            <Route exact path={`/view/file/:id`} element={<View/>} />
          </Route>

          <Route exact path={`/password/reset`} element={isLogin ? <Navigate to={`/`}/> : <ResetPassword/>} />
          <Route exact path={`/generate/password`} element={isLogin ? <Navigate to={`/`}/> : <GeneratePassword/>} />
          <Route exact path={`/login`} element={isLogin ? <Navigate to ={`/`} /> : <Login/>} />
          <Route exact path={`/register`} element={isLogin ? <Navigate to={`/`}/> : <Register/>} />
          <Route path={`/*`} element={<Pnf/>} />
        </Routes>
      <Footer/>
   </BrowserRouter>
  );
}

export default App;

// npm i --save dotenv react-router-dom react-toastify bootstrap bootstrap-icons axios