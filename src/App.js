import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './component/HomePage/HomePage';
import Login from './component/Auth/Login';
import SignUp from './component/Auth/SignUp';
import DashBoard from './component/DashBoard/DashBoard';
import DrawerLayout from './component/Layout/DrawerLayout';
import AllExpenses from './component/Expense/AllExpenses';
import CRoute from './PrivateRoute';
import { UserProvider } from './UserContext';

const App = () => {

  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <DrawerLayout>
            <Routes>
              <Route exact path="/" element={<CRoute element={<HomePage />} cPublic />} />
              <Route exact path="/login" element={<CRoute element={<Login />} cPublic />} />
              <Route exact path="/signup" element={<CRoute element={<SignUp />} cPublic />} />
              <Route exact path="/dashboard" element={<CRoute element={<DashBoard />} />} />
              <Route exact path="/all-expenses" element={<CRoute element={<AllExpenses />} />} />
            </Routes>
          </DrawerLayout>
        </UserProvider>
      </BrowserRouter>
    </>
  );
};

export default App;