import React, { useState } from 'react';
import {
  Box, Typography, Grid, Card, CardContent, Table, TableBody, TableCell, 
  TableContainer, TableHead, TableRow, Paper, Chip, IconButton, Tooltip,
  FormControl, InputLabel, Select, MenuItem, Button, Avatar, LinearProgress
} from '@mui/material';
import { 
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, 
  XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, Legend, ResponsiveContainer,
  AreaChart, Area, ComposedChart, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar
} from 'recharts';
import { 
  Clock, AlertTriangle, DollarSign, FileText, TrendingUp, TrendingDown,
  Filter, Download, RefreshCw, CheckCircle, XCircle, Eye
} from 'lucide-react';
import { 
  unremittedSummary, unremittedByProvider, unremittedTrends, ageingBuckets,
  denialCategories, departmentBreakdown, priorityLevels, workflowStatus, recentActivity
} from '../data/unremittedData';

const Unremitted = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [selectedPriority, setSelectedPriority] = useState('All');
  const [viewMode, setViewMode] = useState('summary');

  const MetricCard = ({ title, value, subtitle, icon, trend, color = 'primary', progress }) => (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
          <Box sx={{ color: `${color}.main` }}>
            {icon}
          </Box>
          {trend && (
            <Box sx={{ display: 'flex', alignItems: 'center', color: trend > 0 ? 'error.main' : 'success.main' }}>
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
        {progress !== undefined && (
          <Box sx={{ mt: 2 }}>
            <LinearProgress 
              variant="determinate" 
              value={progress} 
              color={color}
              sx={{ height: 6, borderRadius: 3 }}
            />
            <Typography variant="caption" color="text.secondary" sx={{ mt: 0.5, display: 'block' }}>
              {progress}% of target
            </Typography>
          </Box>
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

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High Priority': return 'error';
      case 'Medium Priority': return 'warning';
      case 'Low Priority': return 'success';
      default: return 'default';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Resolved': return 'success';
      case 'Pending': return 'warning';
      case 'Under Review': return 'info';
      case 'Appeal Filed': return 'secondary';
      default: return 'default';
    }
  };

  return (
    <Box sx={{ p: { xs: 2, md: 3 } }}>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Unremitted Claims Management
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Track and manage outstanding claims requiring attention
        </Typography>
        
        {/* Action Bar */}
        <Box sx={{ display: 'flex', gap: 2, mt: 3, flexWrap: 'wrap', alignItems: 'center' }}>
          <FormControl size="small" sx={{ minWidth: 150 }}>
            <InputLabel>Department</InputLabel>
            <Select
              value={selectedDepartment}
              label="Department"
              onChange={(e) => setSelectedDepartment(e.target.value)}
            >
              <MenuItem value="All">All Departments</MenuItem>
              {departmentBreakdown.map((dept) => (
                <MenuItem key={dept.department} value={dept.department}>
                  {dept.department}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          
          <FormControl size="small" sx={{ minWidth: 150 }}>
            <InputLabel>Priority</InputLabel>
            <Select
              value={selectedPriority}
              label="Priority"
              onChange={(e) => setSelectedPriority(e.target.value)}
            >
              <MenuItem value="All">All Priorities</MenuItem>
              {priorityLevels.map((level) => (
                <MenuItem key={level.priority} value={level.priority}>
                  {level.priority}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          
          <Button variant="outlined" startIcon={<RefreshCw size={16} />} size="small">
            Refresh
          </Button>
          
          <Button variant="outlined" startIcon={<Download size={16} />} size="small">
            Export
          </Button>
        </Box>
      </Box>

      {/* Summary Metrics */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <MetricCard
            title="Total Unremitted Claims"
            value={formatNumber(unremittedSummary.totalClaims)}
            subtitle="Requiring attention"
            icon={<FileText size={24} />}
            trend={5.2}
            color="warning"
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <MetricCard
            title="Outstanding Amount"
            value={formatCurrency(unremittedSummary.totalAmount)}
            subtitle={`Avg: ${formatCurrency(unremittedSummary.avgAmount)}`}
            icon={<DollarSign size={24} />}
            trend={-2.8}
            color="error"
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <MetricCard
            title="Average Age"
            value={`${Math.round((unremittedSummary.oldestClaim + unremittedSummary.newestClaim) / 2)} days`}
            subtitle={`Oldest: ${unremittedSummary.oldestClaim} days`}
            icon={<Clock size={24} />}
            trend={8.5}
            color="info"
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <MetricCard
            title="Resolution Rate"
            value="73%"
            subtitle="This month"
            icon={<CheckCircle size={24} />}
            trend={-4.2}
            color="success"
            progress={73}
          />
        </Grid>
      </Grid>

      {/* Charts Row 1 */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid size={{ xs: 12, lg: 8 }}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Unremitted Claims Trend
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <ComposedChart data={unremittedTrends}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <RechartsTooltip 
                    formatter={(value, name) => [
                      name.includes('amount') ? formatCurrency(value) : formatNumber(value),
                      name
                    ]}
                  />
                  <Legend />
                  <Bar yAxisId="left" dataKey="newClaims" fill="#f59e0b" name="New Claims" />
                  <Bar yAxisId="left" dataKey="resolved" fill="#10b981" name="Resolved" />
                  <Line yAxisId="right" type="monotone" dataKey="amount" stroke="#ef4444" strokeWidth={3} name="Outstanding Amount" />
                </ComposedChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid size={{ xs: 12, lg: 4 }}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Aging Distribution
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={ageingBuckets}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="claims"
                    nameKey="range"
                  >
                    {ageingBuckets.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
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
                Provider Performance
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={unremittedByProvider}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="provider" angle={-45} textAnchor="end" height={100} />
                  <YAxis />
                  <RechartsTooltip 
                    formatter={(value, name) => [
                      name === 'amount' ? formatCurrency(value) : formatNumber(value),
                      name
                    ]}
                  />
                  <Bar dataKey="claims" fill="#3b82f6" name="Claims" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid size={{ xs: 12, md: 6 }}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Workflow Status
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={workflowStatus}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="claims"
                    nameKey="status"
                  >
                    {workflowStatus.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <RechartsTooltip formatter={(value) => formatNumber(value)} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Data Tables */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid size={{ xs: 12, lg: 6 }}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Department Breakdown
              </Typography>
              <TableContainer>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>Department</TableCell>
                      <TableCell align="right">Claims</TableCell>
                      <TableCell align="right">Amount</TableCell>
                      <TableCell align="right">Avg Days</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {departmentBreakdown.slice(0, 8).map((row) => (
                      <TableRow key={row.department}>
                        <TableCell>{row.department}</TableCell>
                        <TableCell align="right">{formatNumber(row.claims)}</TableCell>
                        <TableCell align="right">{formatCurrency(row.amount)}</TableCell>
                        <TableCell align="right">
                          <Chip
                            label={row.avgDays}
                            color={row.avgDays > 45 ? 'error' : row.avgDays > 30 ? 'warning' : 'success'}
                            size="small"
                          />
                        </TableCell>
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
                Priority Levels
              </Typography>
              <Box sx={{ mb: 3 }}>
                {priorityLevels.map((level) => (
                  <Box key={level.priority} sx={{ mb: 2 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                      <Typography variant="body2" fontWeight="medium">
                        {level.priority}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {formatNumber(level.claims)} claims
                      </Typography>
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={(level.claims / unremittedSummary.totalClaims) * 100}
                      color={getPriorityColor(level.priority)}
                      sx={{ height: 8, borderRadius: 4 }}
                    />
                    <Typography variant="caption" color="text.secondary">
                      {level.description}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Recent Activity */}
      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Recent Activity
          </Typography>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Claim ID</TableCell>
                  <TableCell>Patient</TableCell>
                  <TableCell>Provider</TableCell>
                  <TableCell align="right">Amount</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Action</TableCell>
                  <TableCell align="center">View</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {recentActivity.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>
                      <Typography variant="body2" fontWeight="medium">
                        {row.claimId}
                      </Typography>
                    </TableCell>
                    <TableCell>{row.patient}</TableCell>
                    <TableCell>{row.provider}</TableCell>
                    <TableCell align="right">{formatCurrency(row.amount)}</TableCell>
                    <TableCell>
                      <Chip
                        label={row.status}
                        color={getStatusColor(row.status)}
                        size="small"
                      />
                    </TableCell>
                    <TableCell>{row.date}</TableCell>
                    <TableCell>
                      <Typography variant="caption" color="text.secondary">
                        {row.action}
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      <IconButton size="small" color="primary">
                        <Eye size={16} />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Unremitted;

