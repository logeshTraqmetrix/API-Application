// import { BrowserRouter as Router, Route} from 'react-router-dom';
// import Dashboard from './userComponents/Views/Dashboard';
// import ApiKey from './userComponents/Views/ApiKey';
// import StocksData from './userComponents/Views/StocksData';
// import PincodeData from './userComponents/Views/PincodeData';
// import CustomLayout from './Components/CustomLayout'


// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; 
// import BarChartIcon from '@mui/icons-material/BarChart';
// import DescriptionIcon from '@mui/icons-material/Description';
// import LayersIcon from '@mui/icons-material/Layers';




// const AppRouter = () => {
//     const NAVIGATION = [
//         {
//             kind: 'header',
//             title: 'Main items',
//         },
//         {
//             segment: 'dashboard',
//             title: 'Dashboard',
//         },
//         {
//             segment: 'apikey',
//             title: 'API Keys',
//             icon: <ShoppingCartIcon />,  // Use the appropriate icon for your menu item
//         },
//         {
//             kind: 'divider',  // Divider to separate sections visually
//         },
//         {
//             kind: 'header',
//             title: 'Analytics',
//         },
//         {
//             segment: 'reports',
//             title: 'Reports',
//             icon: <BarChartIcon />,
//             children: [  // Nested menu items (sub-menu)
//                 {
//                     segment: 'stocks',
//                     title: 'Stocks Data',
//                     icon: <DescriptionIcon />,
//                 },
//                 {
//                     segment: 'pincode',
//                     title: 'Pincode Data',
//                     icon: <DescriptionIcon />,
//                 },
//             ],
//         },
//         {
//             segment: 'playground',
//             title: 'Playground',
//             icon: <LayersIcon />,
//         },
//         {
//             segment: 'billing',
//             title: 'Billing',
//             icon: <LayersIcon />,
//         },
//         {
//             segment: 'account',
//             title: 'Account',
//             icon: <LayersIcon />,
//         },
//         {
//             kind: 'divider',
//         },
//         {
//             segment: 'about',
//             title: 'About',
//             icon: <LayersIcon />,
//         },
//     ];

//     return (
//         <Router>
//             <CustomLayout navigation={NAVIGATION}>

//                 <Route path="/dashboard" component={Dashboard} />
//                 <Route path="/apikey" component={ApiKey} />
//                 <Route path="/stocks" component={StocksData} />
//                 <Route path="/pincode" component={PincodeData} />

//             </CustomLayout>
//         </Router>



//     );
// };


// export default AppRouter














import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './userComponents/Views/Dashboard';
import ApiKey from './userComponents/Views/ApiKey';
import StocksData from './userComponents/Views/StocksData';
import PincodeData from './userComponents/Views/PincodeData';
import CustomLayout from './Components/CustomLayout';
import LandingPage from './LandingPage/LandingPage'
import Home from './userComponents/Views/Home'
import Notfound from './Static/Notfound'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import DescriptionIcon from '@mui/icons-material/Description';
import LayersIcon from '@mui/icons-material/Layers';

const AppRouter = () => {
    const NAVIGATION = [
        {
            kind: 'header',
            title: 'Main items',
        },
        {
            segment: 'dashboard',
            title: 'Dashboard',
        },
        {
            segment: 'apikey',
            title: 'API Keys',
            icon: <ShoppingCartIcon />,
        },
        {
            kind: 'divider',
        },
        {
            kind: 'header',
            title: 'Analytics',
        },
        {
            segment: 'reports',
            title: 'Reports',
            icon: <BarChartIcon />,
            children: [
                {
                    segment: 'stocks',
                    title: 'Stocks Data',
                    icon: <DescriptionIcon />,
                },
                {
                    segment: 'pincode',
                    title: 'Pincode Data',
                    icon: <DescriptionIcon />,
                },
            ],
        },
        {
            segment: 'playground',
            title: 'Playground',
            icon: <LayersIcon />,
        },
        {
            segment: 'billing',
            title: 'Billing',
            icon: <LayersIcon />,
        },
        {
            segment: 'account',
            title: 'Account',
            icon: <LayersIcon />,
        },
        {
            kind: 'divider',
        },
        {
            segment: 'about',
            title: 'About',
            icon: <LayersIcon />,
        },
    ];

    return (
        <Router>
            <CustomLayout navigation={NAVIGATION}>
                <Routes>
                    <Route path='/' element={<LandingPage />} />
                    <Route path='/home' element={<Home />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/apikey" element={<ApiKey />} />
                    <Route path="/stocks" element={<StocksData />} />
                    <Route path="/pincode" element={<PincodeData />} />
                    <Route path='*' element={<Notfound />} />
                </Routes>
            </CustomLayout>
        </Router>
    );
};

export default AppRouter;
