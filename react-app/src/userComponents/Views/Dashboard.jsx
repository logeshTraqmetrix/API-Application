import React, { useContext, useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Grid,
  Container,
  CircularProgress,
  useTheme
} from '@mui/material';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const Dashboard = () => {
  const theme = useTheme();
  const [loading, setLoading] = useState(true);
  const [apiData, setApiData] = useState({
    pincodeTableAvailableCalls: 1000,
    pincodeTableConsumedCalls: 500,
    stockAvailableCalls: 2000,
    stockConsumedCalls: 800
  });

  useEffect(() => {
    // Simulate data loading
    setTimeout(() => setLoading(false), 1000);
  }, []);

  if (loading) {
    return (
      <Box 
        sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '100vh' 
        }}
      >
        <CircularProgress />
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
          boxShadow: theme.shadows[4]
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
      </CardContent>
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
    </Card>
  );

  // Chart.js configurations
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
    <Box sx={{ bgcolor: 'grey.50', minHeight: '100vh', py: 4 }}>
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