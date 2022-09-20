import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'tw-elements';
import { Settings, Create } from './components/AdminDashboard';
import messages from "../src/languages-intl/index";
import {
  Home,
  AboutUs,
  CreateAccount,
  SignIn,
  ResetPwd,
  ForgetPwd,
  ErrorPage,
  OurFeatures,
  Pricing,
  AdminDashboard,
} from './pages/index';
import UserDashboard from './pages/UserDashboard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoutes from './utils/ProtectedRoutes';
import ProtectedRoutesAdmin from './utils/ProtectedRoutesAdmin';
import {IntlProvider} from "react-intl";
import React,{useState} from "react";
function App() {
  const [appLanguage, setAppLanguage] = useState(window.localStorage.getItem('lang')||'en');
  const setLanguage = (language) => {
    setAppLanguage(language)
    window.localStorage.setItem('lang', language);  
    
}
  return (
    <IntlProvider locale={appLanguage} messages={messages[appLanguage]} >
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home setLanguage={setLanguage} language={appLanguage}/>} />
        <Route path='about-us' element={<AboutUs  setLanguage={setLanguage} language={appLanguage}/>} />
        <Route path='our-features' element={<OurFeatures />} />
        <Route path='pricing' element={<Pricing />} />
        {/* <Route path="/sign-in" element={<SignIn />} /> */}
        <Route path='/login' element={<SignIn />} />
        <Route path='createaccount' element={<CreateAccount />} />
        <Route path='forget-password' element={<ForgetPwd />} />
        <Route path='/reset-password/:token' element={<ResetPwd />} />
        <Route
          path='/dashboard'
          element={
            <ProtectedRoutesAdmin>
              <AdminDashboard />
            </ProtectedRoutesAdmin>
          }
        />
        <Route path='settings' element={<Settings />} />
        <Route path='create' element={<Create />} />
        <Route
          path='user-dashboard'
          element={
            <ProtectedRoutes>
              <UserDashboard />
            </ProtectedRoutes>
          }
        />

        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <ToastContainer position='top-center' autoClose={1000} />
    </BrowserRouter>
    </IntlProvider>
  );
}

export default App;
