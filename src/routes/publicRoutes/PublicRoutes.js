import React from 'react';
import Home from '../../pages/home/Home';
import Login from '../../pages/login/Login';
import Register from '../../pages/register/Register';
import Services from '../../pages/services/Services';
import { Route, Routes } from 'react-router-dom';
import AllUser from '../../pages/user/AllUser';

const PublicRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}  />
        <Route path="/login" element={<Login/>}  />
        <Route path="/register" element={<Register/>}  />
        <Route path="/allUser" element={<AllUser/>}  />
      </Routes>
    </>
  );
}

export default PublicRoutes;
