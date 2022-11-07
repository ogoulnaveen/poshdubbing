import { Paper } from '@mui/material'
import React from 'react'
import aboutUsImage from '../../../assets/images/Hello.png';
import './about.us.text.css';
import clsx from 'clsx';
import { IsMobileWidth } from '../utill/utils';

const AboutUsText = () => {
    const mobileWidth = IsMobileWidth()

    return (
        <Paper elevation={0} className={clsx(mobileWidth && 'flex-column', 'd-flex align-items-center justify-content-center mt-4 mb-4')}>
            
            <div className='wid'>
        <div className='leftdiv'> 
                    
        <img src={aboutUsImage}  />

        </div>
        <div className='rightdiv'> 

        <div>
                <p className='head1 mt-4 px-4'>About Us </p>
                <p className='head2 px-4 '>Instant dubbing in more than 12 languages </p>
             
                <p className='head3 px-4 mt-4 mt-10'>Salah M Werfelli envisioned helping businesses solve &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 the issue  when language becomes a hurdle. This led &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                 to the inception of PoshDubbing, an automatic&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  dubbing platform. It was developed with the goal to  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  help businesses reach out to a larger audience with &nbsp;&nbsp;&nbsp;&nbsp;
                  videos that can help build and strengthen their &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    relationships. </p>

                <button className='btn3 btnalign   pt-2 pb-2 mt-4 px-4'>Sign Up</button>
            </div>        </div>
    </div>


        </Paper>
    )
}

export default AboutUsText