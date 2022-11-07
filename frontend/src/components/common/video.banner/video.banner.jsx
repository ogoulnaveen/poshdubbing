import { Paper } from '@mui/material';
import React from 'react'
import './video.banner.css';
import VideoImage from '../../../assets/images/video-banner-2.jpg';
import PlayBtn from '../../../assets/images/play-btn.svg';

const VideoBanner = () => {
    return (
        <Paper elevation={0} className='d-flex flex-column align-items-center justify-content-center pt-5 position-relative'>
            <p className='heading12'>Why PoshDubbing</p>
            <p className='heading13'>
            PoshDubbing is a single platform for automatic dubbing for English and Arabic languages into 12 different languages. It is built
            <br></br> with the aim to help businesses break the language barrier and expand their customer base across the world.


            </p>
            <div className='pt-4 position-relative w-100'
                // style={{
                //     backgroundImage: `url(${VideoImage})`,
                //     backgroundSize: "100% 100%",
                //     backgroundRepeat: "no-repeat",
                //     height:'672px'
                // }}
            >
                <div className='position-absolute d-flex align-items-center justify-content-center w-100 h-100'>
                    <div className='icon-play cursor-pointer'>
                        <img src={PlayBtn} alt='logo' width='21px' height='26px' />
                    </div>
                </div>
                <img src={VideoImage} alt='banner' width='100%' />
            </div>
        </Paper>
    )
}

export default VideoBanner