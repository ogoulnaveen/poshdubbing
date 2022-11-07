import React from 'react'
import { Container, Grid } from '@mui/material'
import './footer.css';
// import { IsMobileWidth, IsTabletWidth } from '../utill/utils';
import Logo from '../../../assets/images/PoshDubbing.png';
import Insta from '../../../assets/images/Insta.svg';
import Facebook from '../../../assets/images/facebook.svg';
import Twitter from '../../../assets/images/twitter.svg';
import Linkdin from '../../../assets/images/linkedin.svg';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-scroll';
import Line3 from '../../../assets/images/line3.png';

const Footer = () => {
    // const mobileWidth = IsMobileWidth()
    // const tabletWidth = IsTabletWidth()
    let navigate = useNavigate();
    const redirect = (url) => {
        navigate(url);
    }

    return (
        <div elevation={0} className='m-auto cursor-pointer'>
            <br></br>
            <Container maxWidth='lg' className='pt-4 pb-3'>
                <Grid container rowSpacing={1} columnSpacing={2}>
                    <Grid item xs={12} sm={4} md={4} lg={3}>
                        <div className='d-flex flex-column pt-4'>
                            <div onClick={() => redirect('/')} className="cursor-pointer">
                                <img
                                    src={Logo}
                                
                                    style={{height:"85px",width:"255px"}}
                                />
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4} lg={3}>
                        <div className='d-flex flex-column pt-4 pl-4'>
                            <h6 className='heads pb-3'>Links</h6>
                            <Link to="about-us" spy={true} smooth={true} offset={50} duration={500}>
                                <p className='links'>About us</p>
                            </Link>
                            <Link to="pricing" spy={true} smooth={true} offset={50} duration={500}>
                                <p className='links'>Pricing</p>
                            </Link>
                            <Link to="contact-us" spy={true} smooth={true} offset={50} duration={500}>
                                <p className='links'>Contact us</p>
                            </Link>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4} lg={3}>
                        <div className='d-flex flex-column pt-4 pl-4'>
                            <h6 className='heads pb-3'>Support</h6>
                            <Link to="faqs" spy={true} smooth={true} offset={50} duration={500}>
                                <p className='links'>FAQs</p>
                            </Link>
                            <p onClick={() => redirect('/admin-dashboard')} className='links'>Dashboard</p>
                            <p className='links'>Privacy Policy</p>
                            <p className='links'>Terms and Conditions</p>
                        </div>
                    </Grid>

                    
                    <Grid item xs={12} sm={4} md={4} lg={3}>
                    
                        <div className='d-flex flex-column pt-4 pb-5 pl-4'>
                            <h6 className='heads'> Follow us on:</h6>
                            <div className='d-flex pt-2'>
                                <div className='icons'>
                                    <img src={Insta} alt='logo' />
                                </div>
                                <div className='icons'>
                                    <img src={Twitter} alt='logo' />
                                </div>
                                <div className='icons'>
                                    <img src={Linkdin} alt='logo' />
                                </div>
                                <div className='icons'>
                                    <img src={Facebook} alt='logo' />
                                </div>
                            </div>
                        </div>
                    </Grid>
                    
                </Grid>
                <div>
                <br></br>
                    <img src={Line3} alt='line3' width='100%' />

                    <div className='d-flex justify-content-center'>
                        <p className='copyright'>{`© ${new Date().getFullYear()} PoshDubbing`} </p>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Footer