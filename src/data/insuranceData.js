// Insurance Analytics Dummy Data
export const insuranceProviders = [
  { id: 1, name: 'Blue Cross Blue Shield', code: 'BCBS', color: '#0066CC' },
  { id: 2, name: 'Aetna', code: 'AETNA', color: '#7B2CBF' },
  { id: 3, name: 'UnitedHealth', code: 'UHC', color: '#FF6B35' },
  { id: 4, name: 'Cigna', code: 'CIGNA', color: '#00A651' },
  { id: 5, name: 'Humana', code: 'HUMANA', color: '#F77F00' },
  { id: 6, name: 'Kaiser Permanente', code: 'KAISER', color: '#D62828' },
  { id: 7, name: 'Anthem', code: 'ANTHEM', color: '#6F1D1B' },
  { id: 8, name: 'Medicare', code: 'MEDICARE', color: '#2E86AB' }
];

export const claimsData = [
  { provider: 'BCBS', submitted: 1250, approved: 1087, denied: 163, pending: 45, amount: 2450000 },
  { provider: 'AETNA', submitted: 980, approved: 856, denied: 124, pending: 32, amount: 1890000 },
  { provider: 'UHC', submitted: 1450, approved: 1276, denied: 174, pending: 58, amount: 2980000 },
  { provider: 'CIGNA', submitted: 750, approved: 678, denied: 72, pending: 18, amount: 1560000 },
  { provider: 'HUMANA', submitted: 890, approved: 801, denied: 89, pending: 25, amount: 1780000 },
  { provider: 'KAISER', submitted: 1120, approved: 1008, denied: 112, pending: 38, amount: 2340000 },
  { provider: 'ANTHEM', submitted: 680, approved: 612, denied: 68, pending: 15, amount: 1420000 },
  { provider: 'MEDICARE', submitted: 2100, approved: 1890, denied: 210, pending: 78, amount: 4200000 }
];

export const monthlyTrends = [
  { month: 'Jan', submitted: 8500, approved: 7650, denied: 850, revenue: 15200000 },
  { month: 'Feb', submitted: 9200, approved: 8280, denied: 920, revenue: 16400000 },
  { month: 'Mar', submitted: 8800, approved: 7920, denied: 880, revenue: 15800000 },
  { month: 'Apr', submitted: 9500, approved: 8550, denied: 950, revenue: 17100000 },
  { month: 'May', submitted: 10200, approved: 9180, denied: 1020, revenue: 18600000 },
  { month: 'Jun', submitted: 9800, approved: 8820, denied: 980, revenue: 17640000 },
  { month: 'Jul', submitted: 10500, approved: 9450, denied: 1050, revenue: 19250000 },
  { month: 'Aug', submitted: 11000, approved: 9900, denied: 1100, revenue: 20200000 },
  { month: 'Sep', submitted: 10800, approved: 9720, denied: 1080, revenue: 19440000 },
  { month: 'Oct', submitted: 11200, approved: 10080, denied: 1120, revenue: 20560000 },
  { month: 'Nov', submitted: 10900, approved: 9810, denied: 1090, revenue: 19890000 },
  { month: 'Dec', submitted: 9220, approved: 8298, denied: 922, revenue: 16620000 }
];

export const denialReasons = [
  { reason: 'Prior Authorization Required', count: 2850, percentage: 28.5 },
  { reason: 'Duplicate Claim', count: 1920, percentage: 19.2 },
  { reason: 'Invalid CPT Code', count: 1560, percentage: 15.6 },
  { reason: 'Patient Not Covered', count: 1240, percentage: 12.4 },
  { reason: 'Service Not Covered', count: 980, percentage: 9.8 },
  { reason: 'Incomplete Information', count: 780, percentage: 7.8 },
  { reason: 'Timely Filing Limit', count: 670, percentage: 6.7 }
];

export const reimbursementRates = [
  { provider: 'BCBS', rate: 0.87, avgDays: 15, totalPaid: 2133000 },
  { provider: 'AETNA', rate: 0.82, avgDays: 18, totalPaid: 1549800 },
  { provider: 'UHC', rate: 0.88, avgDays: 12, totalPaid: 2622400 },
  { provider: 'CIGNA', rate: 0.85, avgDays: 16, totalPaid: 1326000 },
  { provider: 'HUMANA', rate: 0.84, avgDays: 19, totalPaid: 1495200 },
  { provider: 'KAISER', rate: 0.90, avgDays: 10, totalPaid: 2106000 },
  { provider: 'ANTHEM', rate: 0.83, avgDays: 17, totalPaid: 1178600 },
  { provider: 'MEDICARE', rate: 0.92, avgDays: 14, totalPaid: 3864000 }
];

export const ageingAnalysis = [
  { range: '0-30 days', amount: 5200000, count: 2850, percentage: 32.5 },
  { range: '31-60 days', amount: 3800000, count: 2100, percentage: 23.8 },
  { range: '61-90 days', amount: 2900000, count: 1650, percentage: 18.1 },
  { range: '91-120 days', amount: 2100000, count: 1200, percentage: 13.1 },
  { range: '121+ days', amount: 2000000, count: 1100, percentage: 12.5 }
];

export const serviceTypes = [
  { type: 'Emergency Room', claims: 1850, revenue: 4200000, avgAmount: 2270 },
  { type: 'Surgery', claims: 980, revenue: 5800000, avgAmount: 5918 },
  { type: 'Radiology', claims: 2450, revenue: 2100000, avgAmount: 857 },
  { type: 'Laboratory', claims: 3200, revenue: 1600000, avgAmount: 500 },
  { type: 'Cardiology', claims: 1200, revenue: 3400000, avgAmount: 2833 },
  { type: 'Orthopedics', claims: 890, revenue: 2800000, avgAmount: 3146 },
  { type: 'Primary Care', claims: 4500, revenue: 1800000, avgAmount: 400 },
  { type: 'Specialist Consultation', claims: 2100, revenue: 2520000, avgAmount: 1200 }
];

