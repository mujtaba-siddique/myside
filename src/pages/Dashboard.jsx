import React from 'react';
import { Paper, Typography, Box, Container, Divider } from '@mui/material';
import AdvancedLineChart from '../components/AdvancedLineChart.jsx';
import AdvancedBarChart from '../components/AdvancedBarChart.jsx';
import AdvancedDoughnutChart from '../components/AdvancedDoughnutChart.jsx';
import GaugeChart from '../components/GaugeChart.jsx';
import MultiLineChart from '../components/MultiLineChart.jsx';
import MetricCard from '../components/MetricCard.jsx';
import {
  claimStatusData,
  monthlyRevenueData,
  revenueComparisonData,
  agingReport,
} from '../components/data.js';

const Dashboard = () => {
  // Define spacing value for consistency
  const spacing = 3;

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Healthcare Dashboard
      </Typography>

      {/* Metric Cards */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          m: -spacing / 2, // Negative margin to counteract item padding
          mb: 3,
        }}
      >
        <Box sx={{ p: spacing / 2, width: { xs: 1, sm: 1 / 2, md: 1 / 4 } }}>
          <MetricCard title="Total Claims" value="1,234" />
        </Box>
        <Box sx={{ p: spacing / 2, width: { xs: 1, sm: 1 / 2, md: 1 / 4 } }}>
          <MetricCard title="Pending Claims" value="456" />
        </Box>
        <Box sx={{ p: spacing / 2, width: { xs: 1, sm: 1 / 2, md: 1 / 4 } }}>
          <MetricCard title="Approved Claims" value="678" />
        </Box>
        <Box sx={{ p: spacing / 2, width: { xs: 1, sm: 1 / 2, md: 1 / 4 } }}>
          <MetricCard title="Rejected Claims" value="100" />
        </Box>
      </Box>

      <Divider sx={{ my: 2 }} />

      {/* Charts Section */}
      <Box sx={{ display: 'flex', flexWrap: 'wrap', m: -spacing / 2 }}>
        <Box sx={{ p: spacing / 2, width: { xs: 1, md: 1 / 2 } }}>
          <Paper elevation={4} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Claim Status
            </Typography>
            <AdvancedDoughnutChart data={claimStatusData} />
          </Paper>
        </Box>

        <Box sx={{ p: spacing / 2, width: { xs: 1, md: 1 / 2 } }}>
          <Paper elevation={4} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Monthly Revenue
            </Typography>
            <AdvancedBarChart data={monthlyRevenueData} />
          </Paper>
        </Box>

        <Box sx={{ p: spacing / 2, width: { xs: 1, md: 1 / 2 } }}>
          <Paper elevation={4} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Revenue Comparison
            </Typography>
            <AdvancedLineChart data={revenueComparisonData} />
          </Paper>
        </Box>

        <Box sx={{ p: spacing / 2, width: { xs: 1, md: 1 / 2 } }}>
          <Paper elevation={4} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Multi-Line Revenue
            </Typography>
            <MultiLineChart data={revenueComparisonData} />
          </Paper>
        </Box>

        <Box sx={{ p: spacing / 2, width: { xs: 1, md: 1 / 2 } }}>
          <Paper elevation={4} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Approval Gauge
            </Typography>
            <GaugeChart value={85} max={100} label="Approved %" color="#4caf50" />
          </Paper>
        </Box>

        <Box sx={{ p: spacing / 2, width: { xs: 1, md: 1 / 2 } }}>
          <Paper elevation={4} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Rejection Gauge
            </Typography>
            <GaugeChart value={15} max={100} label="Rejected %" color="#f44336" />
          </Paper>
        </Box>
      </Box>

      <Divider sx={{ my: 4 }} />

      {/* Aging Report */}
      <Box>
        <Typography variant="h5" gutterBottom>
          Aging Report
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', m: -spacing / 2 }}>
          {agingReport.map((item, index) => (
            <Box
              sx={{ p: spacing / 2, width: { xs: 1, sm: 1 / 2, md: 1 / 3 } }}
              key={index}
            >
              <Paper elevation={2} sx={{ p: 3, textAlign: 'center' }}>
                <Typography variant="subtitle1" color="textSecondary">
                  {item.category}
                </Typography>
                <Typography variant="h6" fontWeight="bold">
                  {item.count}
                </Typography>
              </Paper>
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default Dashboard;