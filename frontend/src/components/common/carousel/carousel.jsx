import { Container } from '@mui/system';
import React from 'react'
import './carousel.css';
import Slider from "react-slick";
import Card from '../card/card';
import { IsMobileWidth } from '../utill/utils';
import Headphone from '../../../assets/images/headphone.svg';
import clsx from 'clsx';

const Carousel = () => {
    const mobileWidth = IsMobileWidth()
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        // autoplay: true,
        // speed: 5000,
        // autoplaySpeed: 5000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        
        <div className='carousel1 pt-5 pb-4'>
            <Container maxWidth='lg'>
                <p className={clsx(mobileWidth && 'res-heading-carousel', 'heading-carousel  pl-4 pr-10')}>Our Features</p>
                <p className={clsx(!mobileWidth && 'w-50 pr-10 pl-4', mobileWidth && 'w-100', 'title2')}>
                Dubbing made easy with PoshDubbing’s AI-powered dubbing tool                    
                    </p>
                <Slider className='mt-4 pt-5 pb-5 mb-5' {...settings}>
                    <div className='pl-5 pr-5'>
                        <Card
                            image={Headphone}
                            title='Real-Time Synthetic Voices'
                            description="Get AI-powered real-time synchronized dubbing in your favorite language."
                        />
                    </div>
                    <div className='pl-5 pr-5'>
                        <Card
                            image={Headphone}
                            title='Dubbing'
                            description="Dub videos of foreign source language in your preferred language."
                        />
                    </div>
                    <div className='pl-5 pr-5'>
                        <Card
                            image={Headphone}
                            title='Audio Syncing'
                            description="Get audio synced in such a manner as if they are speaking your chosen language."
                        />
                    </div>
                    <div className='pl-5 pr-5'>
                        <Card
                            image={Headphone}
                            title='Secure Process'
                            description="Ensure data compliance and conduct the process in a safe and secure environment."
                        />
                    </div>
                    <div className='pl-5 pr-5'>
                        <Card
                            image={Headphone}
                            title='Quick And Accurate'
                            description="Ensure quick and accurate dubbing in your chosen language."
                        />
                    </div>
                    <div className='pl-5 pr-5'>
                        <Card
                            image={Headphone}
                            title=' Import and Export'
                            description="Make importing and exporting files of varying formats easy with PoshDubbing."
                        />
                    </div>
                </Slider>

            </Container>
        </div>
    )
}

export default Carousel