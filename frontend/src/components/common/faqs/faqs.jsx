import React from 'react'
import FrequentlyAskedQuestionsPanel from '../frequently.asked.questions.panel/frequently.asked.questions.panel'
import './faqs.css'
import clsx from 'clsx';
import { IsMobileWidth } from '../utill/utils';
import { Container } from '@mui/system';

import imgright from '../../../assets/images/angle-right.png';

const Faqs = () => {

    const mobileWidth = IsMobileWidth()
    const FAQ_ABOUT_ZAPP = [
        {
            "label": "What is PoshDubbing?",
            "description": "PoshDubbing is an automatic dubbing platform that makes use of AI to dub video content in preferred language."
        },
        {
            "label": "How many languages can I dub my video in?",
            "description": "As of now, Poshdubbing accepts three video formats are ogv, mp4 and webm."
        },
        {
            "label": "How many languages can I dub my video in?",
            "description": "English, Arabic, French, Spanish, Chinese, Turkish"
        },
        {
            "label": "Can I try PosDubbing for free?",
            "description": "Yes we had a trail"
        },
    ]
    return (
        <div className={clsx(mobileWidth && 'flex-column p-3', !mobileWidth && 'pl-4 pr-4', 'faqs d-flex pt-4 pb-4')}>
            <Container maxWidth='xl' className={clsx(mobileWidth && 'flex-column', 'd-flex')} >
                <div className={clsx(!mobileWidth && 'w-50 p-5', mobileWidth && 'w-100 pl-3 pr-3 pt-3 pb-3', 'd-flex flex-column justify-content-center align-items-start')}>
                    <p className={clsx(mobileWidth && 'res-faq-head1 px-10', 'faq-head1 pb-2 px-10')}>Frequently Asked Questions</p>
                    <p className='faq-head2 pt-2 pb-2'>Get fast answers to your most pressing
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                     questions about Posh Dubbing </p>
                    <button className='btn2  pl-3 pr-3  pt-2 pb-2 mt-4 px-10'>
                        Let's get started 
                        <img src={imgright} />
                        <i class='fas fa-greater-than-equal'></i>
                    </button>
                </div>
                <div className={clsx(!mobileWidth && 'w-50', mobileWidth && 'w-font')}>
                    <FrequentlyAskedQuestionsPanel className="w-font" data={FAQ_ABOUT_ZAPP} />
                </div>
            </Container>
        </div>
    )
}

export default Faqs