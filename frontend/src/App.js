import './App.css';
import HomePage from './container/home.page/home.page';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoginPage from './container/login.page/login.page';
import RegisterPage from './container/register.page/register.page';
import ForgetPage from './container/ForgotPassword/ForgotPassword.page';

import Uploadfile from './container/user.dashboard/Pages/Files/Files';

// import Sidebar from './container/sidebar/sidebar';

// Dashboard Routes
import { dashboardRoutes } from "./container/user.dashboard/Navbar/Routes";
import UserDashboardLayout from './container/user.dashboard.layout/user.dashboard.layout';
// import AboutUsText from './components/common/about.us.text/about.us.text';
import { adminDashboardRoutes } from "./container/admin.dashboard/admin.navbar.and.routes/admin.routes";
import AdminDashboardLayout from './container/admin.dashboard.layout/admin.dashboard.layout';


function App() {

  const userDashboardLayout = (
    <Route path={'/dashboard'} element={<UserDashboardLayout />}>
      {dashboardRoutes.map((item, index) => (
        <Route key={index} path={item.path} element={item.component} />
      ))}
    </Route>
  );

  const adminDashboardLayout = (
    <Route path={'/admin-dashboard'} element={<AdminDashboardLayout />}>
      {adminDashboardRoutes.map((item, index) => (
        <Route key={index} path={item.path} element={item.component} />
      ))}
    </Route>
  );

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgetpassword" element={<ForgetPage />} />
          <Route path="/uploadfile" element={<Uploadfile/>} />

          

          {/* <Route path="/about" element={<AboutUsText />} /> */}



          {/* //This is for temporary purpose */}


          {/* <Route path="/dashboard" element={<Sidebar />} /> */}

          {userDashboardLayout}
          {adminDashboardLayout}
        </Routes>



        {/* main folder have sidebar and right side portion is for pages  */}
        {/* <Main>
          <Routes>
            <Route path="/home" element={<HomePage />} />
          </Routes>
        </Main> */}
      </div >
    </Router >
  );
}

export default App;
