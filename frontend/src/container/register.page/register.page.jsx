import React from 'react'
import './register.page.css';
import LoginPageImage from '../../assets/images/login-page-image.png';
import FooterImage from '../../assets/images/Footer.png';

import { Paper, Container } from '@mui/material';
import { useState } from 'react';
import { IsMobileWidth, IsTabletWidth } from '../../components/common/utill/utils';
import clsx from 'clsx';
import EyeClose from '../../assets/images/eye-close.svg';
import EyeOpen from '../../assets/images/visibility.svg';
import Line1 from '../../assets/images/Line-1.png';
import Line2 from '../../assets/images/Line-2.png';
import Facebook from '../../assets/images/F.png';
import Google from '../../assets/images/G.png';
import AppNavbar from '../../components/common/app.navbar/app.navbar';


const RegisterPage = () => {
    const mobileWidth = IsMobileWidth()
    const tabletWidth = IsTabletWidth()
    const [state, setState] = useState({
        passwordVisibility: false,
        email: '',
    });

    // const handleChange = (name, value) => {
    //     setState({ ...state, [name]: value });
    // };
    const toggleVisiblity = () => {
        setState({ ...state, passwordVisibility: !state.passwordVisibility });
    };
    return (
        <div>
            <AppNavbar />
            <div className='w-100 login position-relative'>
                <img className='position-absolute' src={LoginPageImage} width='100%' height='100%' alt='login' />
                <Container className='w-100 h-100 position-absolute d-flex align-items-center justify-content-end '>
                    <form className='w-100 h-100 d-flex align-items-center justify-content-end'>
                        <Paper className={clsx(!(mobileWidth || tabletWidth) && 'w-40', tabletWidth && 'w-60', mobileWidth && 'w-95 m-auto', 'pl-4 pr-4 pt-4 pb-4 mr-5')}>
                            <div className='mb-3 pt-2'>
                                <p className='login-head'>
                                Sign up with your email
                                </p>
                            </div>
                            <div className="form-group">
                                <label className='label' htmlFor="exampleInputEmail1">Email</label>
                                <input type="email" className="input" aria-describedby="emailHelp" placeholder="Please enter your email" />
                            </div>
                            <div className="form-group">
                                <label className='label' htmlFor="exampleInputPassword1">Password</label>
                                <div className="input-group mb-3">
                                    <input type={state.passwordVisibility ? "text" : "password"} className="form-control input" placeholder="Enter password" />
                                    <div className="input-group-prepend position-relative" onClick={toggleVisiblity}>
                                        <span className="position-absolute d-flex align-items-center icon pt-2" id="basic-addon1">
                                            <img src={!state.passwordVisibility ? EyeClose : EyeOpen} width='24px' alt='eye' />
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className='label' htmlFor="exampleInputPassword1">Confirm Password</label>
                                <div className="input-group mb-3">
                                    <input type={state.passwordVisibility ? "text" : "password"} className="form-control input" placeholder="Enter password" />
                                    <div className="input-group-prepend position-relative" onClick={toggleVisiblity}>
                                        <span className="position-absolute d-flex align-items-center icon pt-2" id="basic-addon1">
                                            <img src={!state.passwordVisibility ? EyeClose : EyeOpen} width='24px' alt='eye' />
                                        </span>
                                    </div>
                                </div>
                            </div>


                            <button className="login-btn mt-4 mb-2 cursor-pointer">
                                Signup
                            </button>
                         
                           
                           
                            <div className='d-flex align-items-center pt-4 cursor-pointer'>
                                <p className='text pr-2' > Already have an account? </p>
                                <p className='text-2 cursor-pointer'>
                                    Sign in
                                </p>
                            </div>
                        </Paper>
                    </form>
                </Container>
                <div></div>
            </div>
        </div>
    )
}

export default RegisterPage