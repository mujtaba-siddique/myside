import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Box } from '@mui/material';
import Sidebar from './components/Sidebar.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Insurance from './pages/Insurance.jsx';
import Unremitted from './pages/Unremitted.jsx';
import ServiceClass from './pages/ServiceClass.jsx';
import ServiceDistribution from './pages/ServiceDistribution.jsx';
import SubAging from './pages/SubAging.jsx';
import RejectionAnalysis from './pages/RejectionAnalysis.jsx';
import PendingResub from './pages/PendingResub.jsx';
import ClaimAverage from './pages/ClaimAverage.jsx';
import SettlementReport from './pages/SettlementReport.jsx';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3b82f6',
    },
    secondary: {
      main: '#8b5cf6',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ display: 'flex', minHeight: '100vh' }}>
          <Sidebar />
          <Box 
            component="main" 
            sx={{ 
              flexGrow: 1, 
              p: { xs: 1, sm: 2, md: 3 },
              mt: { xs: 8, lg: 0 }, // Account for mobile app bar
              overflow: 'auto'
            }}
          >
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/insurance" element={<Insurance />} />
              <Route path="/unremitted" element={<Unremitted />} />
              <Route path="/service-class" element={<ServiceClass />} />
              <Route path="/service-distribution" element={<ServiceDistribution />} />
              <Route path="/sub-aging" element={<SubAging />} />
              <Route path="/rejection-analysis" element={<RejectionAnalysis />} />
              <Route path="/pending-resub" element={<PendingResub />} />
              <Route path="/claim-average" element={<ClaimAverage />} />
              <Route path="/settlement-report" element={<SettlementReport />} />
            </Routes>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default App;
