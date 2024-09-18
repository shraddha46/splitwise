import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './component/HomePage/HomePage';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import Login from './component/Auth/Login';
import SignUp from './component/Auth/SignUp';
import DashBoard from './component/DashBoard/DashBoard';
import CRoute from './PrivateRoute';
import { UserProvider } from './UserContext';

const App = () => {

  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <Header />
          <Routes>
            <Route exact path="/" element={<CRoute element={<HomePage />} cPublic />} />
            <Route exact path="/login" element={<CRoute element={<Login />} cPublic />} />
            <Route exact path="/signup" element={<CRoute element={<SignUp />} cPublic />} />
            <Route exact path="/dashboard" element={<CRoute element={<DashBoard />} />} />
          </Routes>
          <Footer />
        </UserProvider>
      </BrowserRouter>
    </>
  );
};

export default App;