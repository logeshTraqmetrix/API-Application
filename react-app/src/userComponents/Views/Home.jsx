// import * as React from 'react';
// import { extendTheme, styled } from '@mui/material/styles';
// import DashboardIcon from '@mui/icons-material/Dashboard';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import BarChartIcon from '@mui/icons-material/BarChart';
// import DescriptionIcon from '@mui/icons-material/Description';
// import LayersIcon from '@mui/icons-material/Layers';
// import { AppProvider } from '@toolpad/core/AppProvider';
// import { DashboardLayout } from '@toolpad/core/DashboardLayout';
// import { PageContainer } from '@toolpad/core/PageContainer';
// import Grid from '@mui/material/Grid2';
// import Dashboard from './Dashboard';
// import ApiKey from './ApiKey';
// import StocksData from './StocksData';
// import PincodeData from './PincodeData';


// const NAVIGATION = [
//     {
//         kind: 'header',
//         title: 'Main items',
//     },
//     {
//         segment: 'dashboard',
//         title: 'Dashboard',
//         icon: <DashboardIcon />,
//     },
//     {
//         segment: 'apikey',
//         title: 'Apikey',
//         icon: <ShoppingCartIcon />,
//     },
//     {
//         kind: 'divider',
//     },
//     {
//         kind: 'header',
//         title: 'Analytics',
//     },
//     {
//         segment: 'reports',
//         title: 'Reports',
//         icon: <BarChartIcon />,
//         children: [
//             {
//                 segment: 'stocks',
//                 title: 'Stocks Data',
//                 icon: <DescriptionIcon />,
//             },
//             {
//                 segment: 'pincode',
//                 title: 'Pincode',
//                 icon: <DescriptionIcon />,
//             },
//         ],
//     },
//     {
//         segment: 'playground',
//         title: 'Playground',
//         icon: <LayersIcon />,
//     },
//     {
//         segment: 'billing',
//         title: 'Billing',
//         icon: <LayersIcon />,
//     },
//     {
//         segment: 'account',
//         title: 'Account',
//         icon: <LayersIcon />,
//     },
//     {
//         kind: 'divider',
//     }
//     ,
//     {
//         segment: 'about',
//         title: 'About',
//         icon: <LayersIcon />,
//     },

// ];

// const demoTheme = extendTheme({
//     colorSchemes: { light: true, dark: true },
//     colorSchemeSelector: 'class',
//     breakpoints: {
//         values: {
//             xs: 0,
//             sm: 600,
//             md: 600,
//             lg: 1200,
//             xl: 1536,
//         },
//     },
// });

// function useDemoRouter(initialPath) {
//     const [pathname, setPathname] = React.useState(initialPath);

//     const router = React.useMemo(() => {
//         return {
//             pathname,
//             searchParams: new URLSearchParams(),
//             navigate: (path) => setPathname(String(path)),
//         };
//     }, [pathname]);

//     return router;
// }

// const Skeleton = styled('div')(({ theme, height }) => ({
//     backgroundColor: theme.palette.action.hover,
//     borderRadius: theme.shape.borderRadius,
//     height,
//     content: '" "',
// }));

// export default function Home(props) {
//     const { window } = props;

//     const router = useDemoRouter('/dashboard');

//     const demoWindow = window ? window() : undefined;


//     return (
//         <AppProvider
//             navigation={NAVIGATION}
//             router={router}
//             theme={demoTheme}
//             window={demoWindow}
//         >
//             <DashboardLayout>
//                 <PageContainer>
                    
//                 </PageContainer>
//             </DashboardLayout>
//         </AppProvider>
//     );
// }






import React from 'react'
// import StocksData from './StocksData'
// import PincodeData from './PincodeData'
import PincodeDataPlayground from '../../Swagger/PincodeDataPlayground'
import StockDataPlayGround from '../../Swagger2/StockDataPlayGround'


const Home = () => {
  return (
    <div>
        {/* <StocksData/> */}
        {/* <PincodeData/> */}
        <PincodeDataPlayground/>
        <StockDataPlayGround/>
    </div>
  )
}

export default Home