import React from 'react';
import { Paper, Typography } from '@mui/material';

const MetricCard = ({ title = 'Metric', value = '0' }) => (
  <Paper elevation={3} sx={{ p: 2, textAlign: 'center' }}>
    <Typography variant="subtitle2" color="textSecondary">
      {title}
    </Typography>
    <Typography variant="h5" fontWeight="bold">
      {value}
    </Typography>
  </Paper>
);

export default MetricCard;