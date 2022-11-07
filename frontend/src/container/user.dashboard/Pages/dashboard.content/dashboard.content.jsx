import React from 'react';
import './dashboard.content.css';
// import { useStyle } from "./dashboard.content.style";
import { Button } from "@mui/material";
import clsx from 'clsx';
import { IsMobileWidth } from '../../../../components/common/utill/utils';
// import Logo from '../../../../assets/images/PoshDubbing.png';
import { useState } from 'react';
import Image1 from '../../../../assets/images/image-4.png'
import arrowRight2 from '../../../../assets/images/Arrow-2.svg';
import downloadIcon from '../../../../assets/images/download-icon.svg';
import ArrowDownward from '../../../../assets/images/arrow_downward.svg';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import {  useEffect, useRef } from 'react';
import axios from 'axios';
import moment from 'moment';
import FileDownload from 'js-file-download';
import BarChart from '../../../../components/common/utill/BarChart';
import { toast } from 'react-toastify';


const DashboardContent = () => {


    const [userInfo, setUserInfo] = useState(null);
    const user = JSON.parse(localStorage.getItem('user'));
  
    if (user.token) {
      axios.defaults.headers.common['authorization'] = `Bearer ${user.token}`;
    }
  
    const getUserInfo = async () => {
      const { data } = await axios('http://localhost:5000/auth/check');
      setUserInfo(data.user);
    };
  
    useEffect(() => {
      getUserInfo();
    }, []);
  
    const userData = {
      labels: [`Videos Left ${userInfo?.videosLeft}`],
      datasets: [
        {
          label: `Videos Left ${userInfo?.videosLeft}`,
          data: [userInfo?.videosLeft],
          backgroundColor: ['#842eaf'],
          borderColor: 'black',
          borderWidth: 2,
        },
      ],
    };
  
    const userData2 = {
      labels: [`Storage Left ${userInfo?.storageLeft}`],
      datasets: [
        {
          label: `Storage Left ${userInfo?.storageLeft}`,
          data: [parseInt(`${userInfo?.storageLeft}`)],
          backgroundColor: ['#df0d0d'],
          borderColor: 'black',
          borderWidth: 2,
        },
      ],
    };
    
    useEffect(() => {
        if (userInfo?.videosLeft <= 0) {
          toast.warn('Your videos limit is completed');
        }
      }, [userInfo?.videosLeft]);
    
      useEffect(() => {
        if (userInfo?.storageLeft <= 0) {
          toast.warn('Your Storage limit is completed');
        }
      }, [userInfo?.storageLeft]);


    const mobileWidth = IsMobileWidth()
    // const classes = useStyle()
    const [state, setState] = useState({
        translateTo: 'English',
        translateFrom: 'Arabic'
    })
    const onChange = (name, value) => {
        setState({ ...state, [name]: value })
    }


    return (
            <div className='dashboard-container w-100'>

            <div className='wc-100 '>
        <BarChart chartData={userData} />
        <BarChart chartData={userData2} />
      </div>
      {userInfo?.videosLeft <= 0 || userInfo?.storageLeft <= 0 ? (
        <h1 className='text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50  w-[100%] self-start mt-40 mr-[200px]  '>
          Please Upgrade Your plan by going to the Upgrage plan tab
        </h1>
      ) : (
        ''
      )}
              </div>




    )
}

export default DashboardContent