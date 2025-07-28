import React, { useState } from 'react';
import {
  Box, Typography, Grid, Card, CardContent, Table, TableBody, TableCell, 
  TableContainer, TableHead, TableRow, Paper, Chip, IconButton, Tooltip,
  FormControl, InputLabel, Select, MenuItem, TextField
} from '@mui/material';
import { 
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, 
  XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, Legend, ResponsiveContainer,
  AreaChart, Area, ComposedChart
} from 'recharts';
import { TrendingUp, TrendingDown, DollarSign, FileText, Filter, Download } from 'lucide-react';
import { 
  insuranceProviders, claimsData, monthlyTrends, denialReasons, 
  reimbursementRates, ageingAnalysis, serviceTypes 
} from '../data/insuranceData';

const Insurance = () => {
  const [selectedProvider, setSelectedProvider] = useState('All');
  const [dateRange, setDateRange] = useState('12months');

  // Calculate summary metrics
  const totalSubmitted = claimsData.reduce((sum, item) => sum + item.submitted, 0);
  const totalApproved = claimsData.reduce((sum, item) => sum + item.approved, 0);
  const totalDenied = claimsData.reduce((sum, item) => sum + item.denied, 0);
  const totalAmount = claimsData.reduce((sum, item) => sum + item.amount, 0);
  const approvalRate = ((totalApproved / totalSubmitted) * 100).toFixed(1);

  const MetricCard = ({ title, value, subtitle, icon, trend, color = 'primary' }) => (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
          <Box sx={{ color: `${color}.main` }}>
            {icon}
          </Box>
          {trend && (
            <Box sx={{ display: 'flex', alignItems: 'center', color: trend > 0 ? 'success.main' : 'error.main' }}>
              {trend > 0 ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
              <Typography variant="caption" sx={{ ml: 0.5 }}>
                {Math.abs(trend)}%
              </Typography>
            </Box>
          )}
        </Box>
        <Typography variant="h4" fontWeight="bold" color={`${color}.main`}>
          {value}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {title}
        </Typography>
        {subtitle && (
          <Typography variant="caption" color="text.secondary">
            {subtitle}
          </Typography>
        )}
      </CardContent>
    </Card>
  );

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatNumber = (value) => {
    return new Intl.NumberFormat('en-US').format(value);
  };

  const getStatusColor = (rate) => {
    if (rate >= 0.9) return 'success';
    if (rate >= 0.8) return 'warning';
    return 'error';
  };

  return (
    <Box sx={{ p: { xs: 2, md: 3 } }}>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Insurance Analytics Dashboard
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Comprehensive view of insurance claims, approvals, and reimbursements
        </Typography>
        
        {/* Filters */}
        <Box sx={{ display: 'flex', gap: 2, mt: 3, flexWrap: 'wrap' }}>
          <FormControl size="small" sx={{ minWidth: 150 }}>
            <InputLabel>Provider</InputLabel>
            <Select
              value={selectedProvider}
              label="Provider"
              onChange={(e) => setSelectedProvider(e.target.value)}
            >
              <MenuItem value="All">All Providers</MenuItem>
              {insuranceProviders.map((provider) => (
                <MenuItem key={provider.id} value={provider.code}>
                  {provider.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          
          <FormControl size="small" sx={{ minWidth: 150 }}>
            <InputLabel>Date Range</InputLabel>
            <Select
              value={dateRange}
              label="Date Range"
              onChange={(e) => setDateRange(e.target.value)}
            >
              <MenuItem value="1month">Last Month</MenuItem>
              <MenuItem value="3months">Last 3 Months</MenuItem>
              <MenuItem value="6months">Last 6 Months</MenuItem>
              <MenuItem value="12months">Last 12 Months</MenuItem>
            </Select>
          </FormControl>
          
          <Tooltip title="Export Data">
            <IconButton color="primary">
              <Download size={20} />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>

      {/* Summary Metrics */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <MetricCard
            title="Total Claims Submitted"
            value={formatNumber(totalSubmitted)}
            subtitle="This period"
            icon={<FileText size={24} />}
            trend={8.5}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <MetricCard
            title="Approval Rate"
            value={`${approvalRate}%`}
            subtitle={`${formatNumber(totalApproved)} approved`}
            icon={<TrendingUp size={24} />}
            trend={2.3}
            color="success"
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <MetricCard
            title="Total Denied"
            value={formatNumber(totalDenied)}
            subtitle={`${((totalDenied / totalSubmitted) * 100).toFixed(1)}% denial rate`}
            icon={<TrendingDown size={24} />}
            trend={-1.2}
            color="error"
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <MetricCard
            title="Total Revenue"
            value={formatCurrency(totalAmount)}
            subtitle="Submitted amount"
            icon={<DollarSign size={24} />}
            trend={12.8}
            color="info"
          />
        </Grid>
      </Grid>

      {/* Charts Row 1 */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid size={{ xs: 12, lg: 8 }}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Monthly Claims Trend
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <ComposedChart data={monthlyTrends}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <RechartsTooltip 
                    formatter={(value, name) => [
                      name.includes('revenue') ? formatCurrency(value) : formatNumber(value),
                      name
                    ]}
                  />
                  <Legend />
                  <Bar yAxisId="left" dataKey="submitted" fill="#3b82f6" name="Submitted" />
                  <Bar yAxisId="left" dataKey="approved" fill="#10b981" name="Approved" />
                  <Line yAxisId="right" type="monotone" dataKey="revenue" stroke="#f59e0b" strokeWidth={3} name="Revenue" />
                </ComposedChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid size={{ xs: 12, lg: 4 }}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Claims by Provider
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={claimsData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="submitted"
                    nameKey="provider"
                  >
                    {claimsData.map((entry, index) => {
                      const provider = insuranceProviders.find(p => p.code === entry.provider);
                      return (
                        <Cell key={`cell-${index}`} fill={provider?.color || '#8884d8'} />
                      );
                    })}
                  </Pie>
                  <RechartsTooltip formatter={(value) => formatNumber(value)} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Charts Row 2 */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Denial Reasons Analysis
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={denialReasons} layout="horizontal">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis dataKey="reason" type="category" width={120} />
                  <RechartsTooltip formatter={(value) => formatNumber(value)} />
                  <Bar dataKey="count" fill="#ef4444" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid size={{ xs: 12, md: 6 }}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Aging Analysis
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={ageingAnalysis}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="range" />
                  <YAxis />
                  <RechartsTooltip formatter={(value) => formatCurrency(value)} />
                  <Area type="monotone" dataKey="amount" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.6} />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Data Tables */}
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, lg: 6 }}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Provider Performance
              </Typography>
              <TableContainer>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>Provider</TableCell>
                      <TableCell align="right">Rate</TableCell>
                      <TableCell align="right">Avg Days</TableCell>
                      <TableCell align="right">Total Paid</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {reimbursementRates.map((row) => (
                      <TableRow key={row.provider}>
                        <TableCell>{row.provider}</TableCell>
                        <TableCell align="right">
                          <Chip
                            label={`${(row.rate * 100).toFixed(0)}%`}
                            color={getStatusColor(row.rate)}
                            size="small"
                          />
                        </TableCell>
                        <TableCell align="right">{row.avgDays}</TableCell>
                        <TableCell align="right">{formatCurrency(row.totalPaid)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid size={{ xs: 12, lg: 6 }}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Service Type Analysis
              </Typography>
              <TableContainer>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>Service Type</TableCell>
                      <TableCell align="right">Claims</TableCell>
                      <TableCell align="right">Revenue</TableCell>
                      <TableCell align="right">Avg Amount</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {serviceTypes.map((row) => (
                      <TableRow key={row.type}>
                        <TableCell>{row.type}</TableCell>
                        <TableCell align="right">{formatNumber(row.claims)}</TableCell>
                        <TableCell align="right">{formatCurrency(row.revenue)}</TableCell>
                        <TableCell align="right">{formatCurrency(row.avgAmount)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Insurance;

