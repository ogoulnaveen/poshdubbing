import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import './sidebar.css';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import { useNavigate } from 'react-router-dom/dist';
import { useStyle } from './sidebar.style';
import { useState } from 'react';
import Logo from '../../assets/images/PoshDubbing.png';
// import DashboardLogo from '../../assets/images/dashboard.svg';
import UserLogo from '../../assets/images/user-logo.svg';
import Logout from '../../assets/images/logout.svg';
// import recordLogo from '../../assets/images/records.svg';
// import TransactionsLogo from '../../assets/images/transactions.svg';
// import FilesLogo from '../../assets/images/files.svg';
// import SettingsLogo from '../../assets/images/settings.svg';
import clsx from 'clsx';
import { IsMobileWidth } from '../../components/common/utill/utils';
import { Link } from 'react-router-dom'


const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export default function MiniDrawer(props) {

    // console.log(props)

    const theme = useTheme();
    const mobileWidth = IsMobileWidth()
    const [open, setOpen] = useState(!mobileWidth ? true : false);
    let history = useNavigate();
    const classes = useStyle()
    let navigate = useNavigate();
    const redirect = (url) => {
        history(url);
    }
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    //LISts of side bar
    // const itemsList = [
    //     {
    //         text: "Dashboard",
    //         icon: <img src={DashboardLogo} alt='logo' />,
    //         onClick: () => history.push("/dashboard")
    //     },
    //     {
    //         text: "Record",
    //         icon: <img src={recordLogo} alt='logo' />,
    //         onClick: () => history.push("/record")
    //     },
    //     {
    //         text: "Transactions",
    //         icon: <img src={TransactionsLogo} alt='logo' />,
    //         onClick: () => history.push("/transactions")
    //     },
    //     {
    //         text: "Files",
    //         icon: <img src={FilesLogo} alt='logo' />,
    //         onClick: () => history.push("/files")
    //     },
    //     {
    //         text: "Settings",
    //         icon: <img src={SettingsLogo} alt='logo' />,
    //         onClick: () => history.push("/settings")
    //     }

    // ];
    return (
        <Box sx={{ display: 'flex' }} className='w-100'>
            <CssBaseline />
            <AppBar position='absolute' className={classes.appNavbar} open={open}>
                <Toolbar>

                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open} >
                <DrawerHeader>
                    <div onClick={() => redirect('/')} className="cursor-pointer">
                        <img
                            src={Logo}
                            height='42px'
                            width='200px'
                            alt='logo'
                        />
                    </div>
                    <IconButton sx={{ ...(!open && { display: 'none' }) }} onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            // marginRight: 5,
                            ...(open && { display: 'none' }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                </DrawerHeader>
                <div className={clsx(!open && 'd-none', open && 'd-flex mt-4 mb-3 pt-2 pb-2 align-items-end pl-2 pr-2')}>
                    <img src={UserLogo} alt='logo' />
                    <div className='pl-2'>
                        <span className='user-name'>test</span><br />
                        <span className='user-email'>test@gmail.com</span>
                    </div>
                </div>
                <List className={clsx(!mobileWidth && 'pl-3 pr-3')}>
                    {/* {itemsList.map((item, index) => {
                        const { text, icon, onClick } = item;
                        return (
                            <ListItem button key={text} onClick={onClick}>
                                {icon && <ListItemIcon>{icon}</ListItemIcon>}
                                <ListItemText className='list-text' primary={text} />
                            </ListItem>
                        );
                    })} */}
                </List>
                <List className={clsx(!mobileWidth && 'pl-3 pr-3')}>
                    {props?.sideBarItems?.map((item, index) => {
                        const { title, icon, path, label } = item;
                        if (path) {
                            return (
                                <ListItem key={index} className='list-style'>
                                    <Link className='list-text' to={item.path}>
                                        {icon && <ListItemIcon>{icon}</ListItemIcon>}
                                        <span>{title}</span>
                                        {label ? <span className='ml-3 tag'>
                                            {label}
                                        </span> : null}
                                    </Link>
                                </ListItem>
                            );
                        }
                    })}
                </List>


                <div className='d-flex justify-content-start pl-4 ml-2 align-items-center mt-5 cursor-pointer'>
                    <img src={Logout} alt='logo' width='24px' />
                    <span className={clsx(!mobileWidth && 'user-name pl-3', mobileWidth && 'd-none')}>Logout</span>
                </div>
            </Drawer>
            {/* <Box component="main" className='w-100'> */}

            {/* This is the dashboard page DashboardContent */}
            {/* <DashboardContent /> */}
            {/* </Box> */}
        </Box>
    );
}


// You will Create the all Pages routes with blank image and only add page name on the top
// Only needed dashboard page and its name is Dashboardcontent.
// Also create navbar routing  