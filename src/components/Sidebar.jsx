// src/components/Sidebar.jsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Activity, Shield, AlertTriangle, Users, BarChart3,
  FileText, TrendingUp, Calendar, X, ChevronDown
} from 'lucide-react';
import {
  Drawer, List, ListItemButton, ListItemIcon, ListItemText,
  Box, Typography, Avatar, IconButton, AppBar, Toolbar, Divider
} from '@mui/material';

const drawerWidth = 280;

const navigationItems = [
  { text: 'Dashboard', icon: <BarChart3 />, path: '/' },
  { text: 'Insurance', icon: <Shield />, path: '/insurance' },
  { text: 'Unremitted', icon: <AlertTriangle />, path: '/unremitted' },
  { text: 'Service Class', icon: <Users />, path: '/service-class' },
  { text: 'Service Distribution', icon: <Activity />, path: '/service-distribution' },
  { text: 'Sub Aging', icon: <Calendar />, path: '/sub-aging' },
  { text: 'Rejection Analysis', icon: <FileText />, path: '/rejection-analysis' },
  { text: 'Pending Resub', icon: <AlertTriangle />, path: '/pending-resub' },
  { text: 'Claim Average', icon: <TrendingUp />, path: '/claim-average' },
  { text: 'Settlement Report', icon: <FileText />, path: '/settlement-report' },
];

const Sidebar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);


  const toggleDrawer = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerContent = (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          bgcolor: 'primary.main',
          color: 'white',
          height: 80,
          px: 2,
          justifyContent: 'space-between'
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box
            sx={{
              bgcolor: 'white',
              color: 'primary.main',
              borderRadius: 2,
              width: 40,
              height: 40,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mr: 1
            }}
          >
            <Activity size={20} />
          </Box>
          <Box>
            <Typography variant="subtitle1" fontWeight="bold">HealthCare RCM</Typography>
            <Typography variant="caption" sx={{ color: 'blue.100' }}>Dashboard v2.0</Typography>
          </Box>
        </Box>
        <IconButton onClick={toggleDrawer} sx={{ display: { lg: 'none' }, color: 'white' }}>
          <X size={20} />
        </IconButton>
      </Box>

      {/* User Info */}
      <Box sx={{ px: 2, py: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Avatar
            sx={{
              bgcolor: 'linear-gradient(to right bottom, #3b82f6, #8b5cf6)',
              width: 48,
              height: 48,
              fontWeight: 'bold'
            }}
          >
            G
          </Avatar>
          <Box sx={{ ml: 2, flexGrow: 1 }}>
            <Typography variant="body1" fontWeight="600">Gavano</Typography>
            <Typography variant="caption" color="text.secondary">RCM Manager</Typography>
          </Box>
          <ChevronDown size={16} color="gray" />
        </Box>
      </Box>

      <Divider />

      {/* Navigation */}
      <Box sx={{ flexGrow: 1, overflowY: 'auto' }}>
        <List>
          {navigationItems.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              {({ isActive }) => (
                <ListItemButton
                  selected={isActive}
                  sx={{
                    borderRadius: 2,
                    mx: 1,
                    my: 0.5,
                    '&.Mui-selected': {
                      bgcolor: 'primary.main',
                      color: 'white',
                      '& .MuiListItemIcon-root': { color: 'white' }
                    }
                  }}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              )}
            </NavLink>
          ))}
        </List>
      </Box>
    </Box>
  );

  return (
    <>
      {/* Mobile AppBar */}
      <AppBar
        position="fixed"
        sx={{ display: { lg: 'none' }, width: '100%' }}
        color="primary"
      >
        <Toolbar>
          <IconButton color="inherit" edge="start" onClick={toggleDrawer}>
            <Activity />
          </IconButton>
          <Typography variant="h6" sx={{ ml: 2, flexGrow: 1 }}>
            HealthCare RCM
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Sidebar */}
      <Box component="nav" sx={{ width: { lg: drawerWidth }, flexShrink: { lg: 0 } }}>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={toggleDrawer}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', lg: 'none' },
            '& .MuiDrawer-paper': { width: drawerWidth },
          }}
        >
          {drawerContent}
        </Drawer>

        <Drawer
          variant="permanent"
          open
          sx={{
            display: { xs: 'none', lg: 'block' },
            '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box' },
          }}
        >
          {drawerContent}
        </Drawer>
      </Box>
    </>
  );
};

export default Sidebar;
