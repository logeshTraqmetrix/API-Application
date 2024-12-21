// import React, { useContext, useState, useEffect } from 'react';
// import { MyContext } from '../../MyProvider';
// import {
//   Card,
//   CardContent,
//   Typography,
//   Box,
//   Grid,
//   Container,
//   CircularProgress,
//   Grid2,
// } from '@mui/material';
// import { Pie } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   ArcElement,
//   Tooltip,
//   Legend
// } from 'chart.js';

// ChartJS.register(ArcElement, Tooltip, Legend);

// const Dashboard = () => {
//   const { state } = useContext(MyContext);
//   const [loading, setLoading] = useState(true);
//   const [apiData, setApiData] = useState(null);

//   useEffect(() => {
//     if (state.apiData) {
//       setApiData(state.apiData);
//       setLoading(false);
//     }
//   }, [state.apiData]);

//   if (loading) {
//     return (
//       <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
//         <CircularProgress />
//       </Box>
//     );
//   }

//   const {
//     pincodeTableAvailableCalls,
//     pincodeTableConsumedCalls,
//     stockAvailableCalls,
//     stockConsumedCalls,
//   } = apiData;

//   console.log('dashboard data from dashboard component', apiData);

//   // Data for Pie Charts
//   const pincodeChartData = {
//     labels: ['Consumed Calls', 'Available Calls'],
//     datasets: [
//       {
//         data: [pincodeTableConsumedCalls, pincodeTableAvailableCalls],
//         backgroundColor: ['#FF6384', '#36A2EB'],
//         hoverBackgroundColor: ['#FF6384', '#36A2EB'],
//       },
//     ],
//   };

//   const stockChartData = {
//     labels: ['Consumed Calls', 'Available Calls'],
//     datasets: [
//       {
//         data: [stockConsumedCalls, stockAvailableCalls],
//         backgroundColor: ['#FF9F40', '#4BC0C0'],
//         hoverBackgroundColor: ['#FF9F40', '#4BC0C0'],
//       },
//     ],
//   };

//   return (
//    <Grid2 sx={{ bgcolor: '#f5f5f5', py: 4 ,height:'92vh'}}>
//       <Grid  spacing={4} justifyContent="center" sx={{
//         display:'flex',
//         justifyContent:'space-evenly'
//       }}>
//         <Grid item xs={12} sm={6} md={3}>
//           <Card>
//             <CardContent>
//               <Typography variant="h6">Pincode Used Calls</Typography>
//               <Typography variant="h4">{pincodeTableConsumedCalls}</Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//         <Grid item xs={12} sm={6} md={3}>
//           <Card>
//             <CardContent>
//               <Typography variant="h6">Pincode Available Calls</Typography>
//               <Typography variant="h4">{pincodeTableAvailableCalls}</Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//         <Grid item xs={12} sm={6} md={3}>
//           <Card>
//             <CardContent>
//               <Typography variant="h6">Stock Used Calls</Typography>
//               <Typography variant="h4">{stockConsumedCalls}</Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//         <Grid item xs={12} sm={6} md={3}>
//           <Card>
//             <CardContent>
//               <Typography variant="h6">Stock Available Calls</Typography>
//               <Typography variant="h4">{stockAvailableCalls}</Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//       </Grid>

//       <Grid container spacing={4} mt={4} sx={{
//         width:'90%',
    
//       }}>
//         <Grid item xs={12} md={6}>
//           <Card>
//             <CardContent>
//               <Typography variant="h6" gutterBottom>
//                 Pincode Calls Usage
//               </Typography>
//               <Pie data={pincodeChartData} />
//             </CardContent>
//           </Card>
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <Card>
//             <CardContent>
//               <Typography variant="h6" gutterBottom>
//                 Stock Calls Usage
//               </Typography>
//               <Pie data={stockChartData} />
//             </CardContent>
//           </Card>
//         </Grid>
//       </Grid>
//       </Grid2>
//   );
// };

// export default Dashboard;











// import React, { useContext, useState, useEffect } from 'react';
// import {
//   Card,
//   CardContent,
//   Typography,
//   Box,
//   Grid,
//   Container,
//   CircularProgress,
//   useTheme
// } from '@mui/material';
// import { Pie } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   ArcElement,
//   Tooltip,
//   Legend
// } from 'chart.js';
// import { MyContext } from '../../MyProvider';

// ChartJS.register(ArcElement, Tooltip, Legend);

// const Dashboard = () => {
//   const apiData = useContext(MyContext).state.apiData
//   const theme = useTheme();
//   const [loading, setLoading] = useState(true);

//   if (apiData == '') {
//     return <h1>Please Subscribe</h1>
//   }

//   useEffect(() => {
   
//     setTimeout(() => setLoading(false), 1000);
//   }, []);

//   if (loading) {
//     return (
//       <Box 
//         sx={{ 
//           display: 'flex', 
//           justifyContent: 'center', 
//           alignItems: 'center', 
//           height: '92vh' 
//         }}
//       >
//         <CircularProgress />
//       </Box>
//     );
//   }

//   const StatsCard = ({ title, value, color }) => (
//     <Card 
//       sx={{ 
//         height: '100%',
//         transition: 'all 0.3s',
//         '&:hover': {
//           transform: 'translateY(-4px)',
//           boxShadow: theme.shadows[4]
//         },
//         position: 'relative',
//         overflow: 'hidden'
//       }}
//     >
//       <CardContent>
//         <Typography variant="h4" component="div" sx={{ mb: 1 }}>
//           {value.toLocaleString()}
//         </Typography>
//         <Typography variant="subtitle1" color="text.secondary">
//           {title}
//         </Typography>
//       </CardContent>
//       <Box 
//         sx={{ 
//           position: 'absolute',
//           bottom: 0,
//           left: 0,
//           right: 0,
//           height: '4px',
//           bgcolor: color
//         }} 
//       />
//     </Card>
//   );

//   // Chart.js configurations
//   const createChartData = (consumed, available, colors) => ({
//     labels: ['Consumed Calls', 'Available Calls'],
//     datasets: [
//       {
//         data: [consumed, available],
//         backgroundColor: colors,
//         borderColor: colors,
//         borderWidth: 1,
//         hoverOffset: 4
//       }
//     ]
//   });

//   const chartOptions = {
//     plugins: {
//       legend: {
//         position: 'bottom'
//       }
//     },
//     responsive: true,
//     maintainAspectRatio: false
//   };

//   const pincodeChartData = createChartData(
//     apiData.pincodeTableConsumedCalls,
//     apiData.pincodeTableAvailableCalls,
//     ['#3b82f6', '#10b981']
//   );

//   const stockChartData = createChartData(
//     apiData.stockConsumedCalls,
//     apiData.stockAvailableCalls,
//     ['#f59e0b', '#ef4444']
//   );

//   return (
//     <Box sx={{ bgcolor: 'grey.50', minHeight: '75vh', py: 4 }}>
//       <Container maxWidth="xl">
//         <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold' }}>
//           Dashboard
//         </Typography>

//         <Grid container spacing={3} sx={{ mb: 4 }}>
//           <Grid item xs={12} sm={6} md={3}>
//             <StatsCard
//               title="Pincode Used Calls"
//               value={apiData.pincodeTableConsumedCalls}
//               color="#3b82f6"
//             />
//           </Grid>
//           <Grid item xs={12} sm={6} md={3}>
//             <StatsCard
//               title="Pincode Available Calls"
//               value={apiData.pincodeTableAvailableCalls}
//               color="#10b981"
//             />
//           </Grid>
//           <Grid item xs={12} sm={6} md={3}>
//             <StatsCard
//               title="Stock Used Calls"
//               value={apiData.stockConsumedCalls}
//               color="#f59e0b"
//             />
//           </Grid>
//           <Grid item xs={12} sm={6} md={3}>
//             <StatsCard
//               title="Stock Available Calls"
//               value={apiData.stockAvailableCalls}
//               color="#ef4444"
//             />
//           </Grid>
//         </Grid>

//         <Grid container spacing={3}>
//           <Grid item xs={12} md={6}>
//             <Card>
//               <CardContent>
//                 <Typography variant="h6" sx={{ mb: 2 }}>
//                   Pincode Calls Usage
//                 </Typography>
//                 <Box sx={{ height: 300 }}>
//                   <Pie data={pincodeChartData} options={chartOptions} />
//                 </Box>
//               </CardContent>
//             </Card>
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <Card>
//               <CardContent>
//                 <Typography variant="h6" sx={{ mb: 2 }}>
//                   Stock Calls Usage
//                 </Typography>
//                 <Box sx={{ height: 300 }}>
//                   <Pie data={stockChartData} options={chartOptions} />
//                 </Box>
//               </CardContent>
//             </Card>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default Dashboard;











// import React, { useContext, useState, useEffect } from 'react';
// import {
//   Card,
//   CardContent,
//   Typography,
//   Box,
//   Grid,
//   Container,
//   CircularProgress,
//   Button,
//   useTheme
// } from '@mui/material';
// import { Pie } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   ArcElement,
//   Tooltip,
//   Legend
// } from 'chart.js';
// import { MyContext } from '../../MyProvider';

// ChartJS.register(ArcElement, Tooltip, Legend);

// const Dashboard = () => {
//   const { state: { apiData } } = useContext(MyContext);
//   const theme = useTheme();

//   console.log('states from dashboard',apiData)
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (apiData) {
//       setLoading(false);
//     }
//   }, [apiData]);

//   if (loading) {
//     return (
//       <Box 
//         sx={{ 
//           display: 'flex', 
//           justifyContent: 'center', 
//           alignItems: 'center', 
//           height: '92vh' 
//         }}
//       >
//         <CircularProgress />
//       </Box>
//     );
//   }

//   if (!apiData) {
//     return (
//       <Box 
//         sx={{ 
//           display: 'flex', 
//           justifyContent: 'center', 
//           alignItems: 'center', 
//           height: '92vh',
//           flexDirection: 'column'
//         }}
//       >
//         <Typography variant="h6" sx={{ mb: 2 }}>
//           Please Subscribe
//         </Typography>
//         <Button 
//           variant="contained" 
//           color="primary" 
//           onClick={() => window.location.href = '/subscription'}
//           sx={{ px: 4, py: 1.5 }}
//         >
//           Subscribe Now
//         </Button>
//       </Box>
//     );
//   }

//   const StatsCard = ({ title, value, color }) => (
//     <Card 
//       sx={{ 
//         height: '100%',
//         transition: 'all 0.3s',
//         '&:hover': {
//           transform: 'translateY(-4px)',
//           boxShadow: theme.shadows[4]
//         },
//         position: 'relative',
//         overflow: 'hidden'
//       }}
//     >
//       <CardContent>
//         <Typography variant="h4" component="div" sx={{ mb: 1 }}>
//           {value.toLocaleString()}
//         </Typography>
//         <Typography variant="subtitle1" color="text.secondary">
//           {title}
//         </Typography>
//       </CardContent>
//       <Box 
//         sx={{ 
//           position: 'absolute',
//           bottom: 0,
//           left: 0,
//           right: 0,
//           height: '4px',
//           bgcolor: color
//         }} 
//       />
//     </Card>
//   );

//   const createChartData = (consumed, available, colors) => ({
//     labels: ['Consumed Calls', 'Available Calls'],
//     datasets: [
//       {
//         data: [consumed, available],
//         backgroundColor: colors,
//         borderColor: colors,
//         borderWidth: 1,
//         hoverOffset: 4
//       }
//     ]
//   });

//   const chartOptions = {
//     plugins: {
//       legend: {
//         position: 'bottom'
//       }
//     },
//     responsive: true,
//     maintainAspectRatio: false
//   };

//   const pincodeChartData = createChartData(
//     apiData.pincodeTableConsumedCalls,
//     apiData.pincodeTableAvailableCalls,
//     ['#3b82f6', '#10b981']
//   );

//   const stockChartData = createChartData(
//     apiData.stockConsumedCalls,
//     apiData.stockAvailableCalls,
//     ['#f59e0b', '#ef4444']
//   );

//   return (
//     <Box sx={{ bgcolor: 'grey.50', minHeight: '75vh', py: 4 }}>
//       <Container maxWidth="xl">
//         <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold' }}>
//           Dashboard
//         </Typography>

//         <Grid container spacing={3} sx={{ mb: 4 }}>
//           <Grid item xs={12} sm={6} md={3}>
//             <StatsCard
//               title="Pincode Used Calls"
//               value={apiData.pincodeTableConsumedCalls}
//               color="#3b82f6"
//             />
//           </Grid>
//           <Grid item xs={12} sm={6} md={3}>
//             <StatsCard
//               title="Pincode Available Calls"
//               value={apiData.pincodeTableAvailableCalls}
//               color="#10b981"
//             />
//           </Grid>
//           <Grid item xs={12} sm={6} md={3}>
//             <StatsCard
//               title="Stock Used Calls"
//               value={apiData.stockConsumedCalls}
//               color="#f59e0b"
//             />
//           </Grid>
//           <Grid item xs={12} sm={6} md={3}>
//             <StatsCard
//               title="Stock Available Calls"
//               value={apiData.stockAvailableCalls}
//               color="#ef4444"
//             />
//           </Grid>
//         </Grid>

//         <Grid container spacing={3}>
//           <Grid item xs={12} md={6}>
//             <Card>
//               <CardContent>
//                 <Typography variant="h6" sx={{ mb: 2 }}>
//                   Pincode Calls Usage
//                 </Typography>
//                 <Box sx={{ height: 300 }}>
//                   <Pie data={pincodeChartData} options={chartOptions} />
//                 </Box>
//               </CardContent>
//             </Card>
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <Card>
//               <CardContent>
//                 <Typography variant="h6" sx={{ mb: 2 }}>
//                   Stock Calls Usage
//                 </Typography>
//                 <Box sx={{ height: 300 }}>
//                   <Pie data={stockChartData} options={chartOptions} />
//                 </Box>
//               </CardContent>
//             </Card>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default Dashboard;
















import React, { useContext } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Grid,
  Container,
  CircularProgress,
  Button,
} from '@mui/material';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';
import { MyContext } from '../../MyProvider';

ChartJS.register(ArcElement, Tooltip, Legend);

const Dashboard = () => {
  const { state } = useContext(MyContext);
  const { apiData, loading } = state;

  // Loading state
  if (loading) {
    return (
      <Box 
        sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '92vh' 
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  // Subscription check
  if (!apiData) {
    return (
      <Box 
        sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '92vh',
          flexDirection: 'column'
        }}
      >
        <Typography variant="h6" sx={{ mb: 2 }}>
          Please Subscribe
        </Typography>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={() => window.location.href = '/app/#/home/subscription'}
          sx={{ px: 4, py: 1.5 }}
        >
          Subscribe Now
        </Button>
      </Box>
    );
  }

  const StatsCard = ({ title, value, color }) => (
    <Card 
      sx={{ 
        height: '100%',
        transition: 'all 0.3s',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: 4
        },
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <CardContent>
        <Typography variant="h4" component="div" sx={{ mb: 1 }}>
          {value.toLocaleString()}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          {title}
        </Typography>
        <Box 
          sx={{ 
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '4px',
            bgcolor: color
          }} 
        />
      </CardContent>
    </Card>
  );

  const createChartData = (consumed, available, colors) => ({
    labels: ['Consumed Calls', 'Available Calls'],
    datasets: [
      {
        data: [consumed, available],
        backgroundColor: colors,
        borderColor: colors,
        borderWidth: 1,
        hoverOffset: 4
      }
    ]
  });

  const chartOptions = {
    plugins: {
      legend: {
        position: 'bottom'
      }
    },
    responsive: true,
    maintainAspectRatio: false
  };

  const pincodeChartData = createChartData(
    apiData.pincodeTableConsumedCalls,
    apiData.pincodeTableAvailableCalls,
    ['#3b82f6', '#10b981']
  );

  const stockChartData = createChartData(
    apiData.stockConsumedCalls,
    apiData.stockAvailableCalls,
    ['#f59e0b', '#ef4444']
  );

  return (
    <Box sx={{ bgcolor: 'grey.50', minHeight: '75vh', py: 4 }}>
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold' }}>
          Dashboard
        </Typography>

        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} sm={6} md={3}>
            <StatsCard
              title="Pincode Used Calls"
              value={apiData.pincodeTableConsumedCalls}
              color="#3b82f6"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatsCard
              title="Pincode Available Calls"
              value={apiData.pincodeTableAvailableCalls}
              color="#10b981"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatsCard
              title="Stock Used Calls"
              value={apiData.stockConsumedCalls}
              color="#f59e0b"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatsCard
              title="Stock Available Calls"
              value={apiData.stockAvailableCalls}
              color="#ef4444"
            />
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Pincode Calls Usage
                </Typography>
                <Box sx={{ height: 300 }}>
                  <Pie data={pincodeChartData} options={chartOptions} />
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Stock Calls Usage
                </Typography>
                <Box sx={{ height: 300 }}>
                  <Pie data={stockChartData} options={chartOptions} />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Dashboard;