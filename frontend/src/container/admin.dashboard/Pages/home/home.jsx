import React from 'react';
import './home.css';
// import { useStyle } from "./home.style";
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

const DashboardContent = () => {
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
            <div className={clsx(!mobileWidth && 'pl-4 pt-2 pb-2 pr-4', mobileWidth && 'pt-2 pb-2 pl-2')}>
                <p className={clsx(mobileWidth && 'd-heading1-res', !mobileWidth && 'pl-2', 'd-heading1 pt-2')}>Files</p>
                <p className={clsx(mobileWidth && 'd-title-res', 'd-title')}>View all your previous projects here</p>
                <div className='table-con'>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col" className={clsx('th', mobileWidth && 'th-res')}>File Name</th>
                                <th scope="col" className={clsx('th', mobileWidth && 'th-res')}>Size</th>
                                <th scope="col" className={clsx('th', mobileWidth && 'th-res')}>Last  modified</th>
                                <th scope="col" className={clsx('th', mobileWidth && 'th-res')}>Original Language</th>
                                <th scope="col" className={clsx('th', mobileWidth && 'th-res')}>other Language</th>
                                <th scope="col" className={clsx('th', mobileWidth && 'th-res')}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className={clsx('td', mobileWidth && 'td-res')}>House of the Dragon</td>
                                <td className={clsx('td', mobileWidth && 'td-res')}>5.6 MB</td>
                                <td className={clsx('td', mobileWidth && 'td-res')}>10 OCT 2022</td>
                                <td className={clsx('td', mobileWidth && 'td-res')}>English</td>
                                <td className={clsx('td', mobileWidth && 'td-res')}>Arabic</td>
                                <td><Button className={clsx('table-btn pt-2', mobileWidth && 't-btn-res')}>Viewing Now</Button></td>
                            </tr>
                            <tr>
                                <td className={clsx('td', mobileWidth && 'td-res')}>House of the Dragon</td>
                                <td className={clsx('td', mobileWidth && 'td-res')}>5.6 MB</td>
                                <td className={clsx('td', mobileWidth && 'td-res')}>10 OCT 2022</td>
                                <td className={clsx('td', mobileWidth && 'td-res')}>English</td>
                                <td className={clsx('td', mobileWidth && 'td-res')}>Arabic</td>
                                <td><Button className={clsx('table-btn2 pt-2', mobileWidth && 't-btn2-res')}>View</Button></td>
                            </tr>
                            <tr>
                                <td className={clsx('td', mobileWidth && 'td-res')}>House of the Dragon</td>
                                <td className={clsx('td', mobileWidth && 'td-res')}>5.6 MB</td>
                                <td className={clsx('td', mobileWidth && 'td-res')}>10 OCT 2022</td>
                                <td className={clsx('td', mobileWidth && 'td-res')}>English</td>
                                <td className={clsx('td', mobileWidth && 'td-res')}>Arabic</td>
                                <td><Button className={clsx('table-btn2 pt-2', mobileWidth && 't-btn2-res')}>View</Button></td>
                            </tr>
                            <tr>
                                <td className={clsx('td', mobileWidth && 'td-res')}>House of the Dragon</td>
                                <td className={clsx('td', mobileWidth && 'td-res')}>5.6 MB</td>
                                <td className={clsx('td', mobileWidth && 'td-res')}>10 OCT 2022</td>
                                <td className={clsx('td', mobileWidth && 'td-res')}>English</td>
                                <td className={clsx('td', mobileWidth && 'td-res')}>Arabic</td>
                                <td><Button className={clsx('table-btn2 pt-2', mobileWidth && 't-btn2-res')}>View</Button></td>
                            </tr>

                        </tbody>
                    </table>
                </div>
                <div className={clsx(!mobileWidth && 'flex-row', mobileWidth && 'flex-column', 'd-flex d-upload-section position-relative pt-3 pb-3 pl-2 pr-3 mt-4')}>
                    <div className={clsx(!mobileWidth && 'w-45', mobileWidth && 'w-100')}>
                        <div className='d-flex justify-content-between align-items-center'>
                            <p className={clsx('d-upload-title', mobileWidth && 'd-res-title')}>Source Video</p>
                            <div>
                                {/* <select className={clsx('pl-3 pr-3 p-2 d-select')} onChange={(e) => onChange('translateFrom', e.target.value)}>
                                    <option className='option' value='English'>English</option>
                                    <option className='option' value='Arabic'>Arabic</option>
                                </select> */}
                                <Box sx={{ minWidth: 120 }}>
                                    <FormControl fullWidth>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={state.translateFrom}
                                            onChange={(e) => onChange('translateFrom', e.target.value)}
                                            className={clsx('w-100 pl-3 pr-3 p-2 d-select')}
                                        >
                                            <MenuItem className='w-100' value='Arabic'>Arabic</MenuItem>
                                            <MenuItem className='w-100' value='Englis'>English</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                            </div>
                        </div>
                        <div>
                            <img src={Image1} alt='source-upload' width='100%' />
                        </div>
                    </div>
                    <div className={clsx(!mobileWidth && 'mt-5 pt-5', mobileWidth && 'mt-2 justify-content-center', 'd-flex align-items-center')}>
                        {!mobileWidth ?
                            <img className='mr-2' src={arrowRight2} alt='arrow' />
                            :
                            <img className='' src={ArrowDownward} alt='arrow' />
                        }
                    </div>
                    <div className={clsx(!mobileWidth && 'w-45', mobileWidth && 'w-100')}>
                        <div className='d-flex justify-content-between align-items-center'>
                            <p className={clsx('d-upload-title', mobileWidth && 'd-res-title')}>Video</p>
                            <div className='d-flex'>

                                <div className='mr-3'>
                                    <Button className='t-btn pl-3 pr-3'>Download
                                        <img className='ml-2' src={downloadIcon} alt='download' width='100%' />
                                    </Button>
                                </div>
                                {/* <select className={clsx('pl-3 pr-3 p-2 d-select')} onChange={(e) => onChange('translateFrom', e.target.value)}>
                                    <option className='option' value='Arabic'>Arabic</option>
                                    <option className='option' value='English'>English</option>
                                </select> */}
                                <Box sx={{ minWidth: 120 }}>
                                    <FormControl fullWidth>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={state.translateFrom}
                                            onChange={(e) => onChange('translateFrom', e.target.value)}
                                            className={clsx('w-100 pl-3 pr-3 p-2 d-select')}
                                        >
                                            <MenuItem className='w-100' value='Arabic'>Arabic</MenuItem>
                                            <MenuItem className='w-100' value='Englis'>English</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                            </div>
                        </div>
                        <div>
                            <img src={Image1} alt='source-upload' width='100%' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardContent