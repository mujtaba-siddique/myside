// Unremitted Claims Analytics Dummy Data
export const unremittedSummary = {
  totalClaims: 3450,
  totalAmount: 8750000,
  avgAmount: 2536,
  oldestClaim: 180,
  newestClaim: 1
};

export const unremittedByProvider = [
  { provider: 'Blue Cross Blue Shield', claims: 650, amount: 1650000, avgDays: 45, color: '#0066CC' },
  { provider: 'UnitedHealth', claims: 580, amount: 1480000, avgDays: 52, color: '#FF6B35' },
  { provider: 'Medicare', claims: 520, amount: 1320000, avgDays: 38, color: '#2E86AB' },
  { provider: 'Aetna', claims: 480, amount: 1220000, avgDays: 48, color: '#7B2CBF' },
  { provider: 'Kaiser Permanente', claims: 420, amount: 1070000, avgDays: 41, color: '#D62828' },
  { provider: 'Cigna', claims: 380, amount: 970000, avgDays: 55, color: '#00A651' },
  { provider: 'Humana', claims: 320, amount: 820000, avgDays: 49, color: '#F77F00' },
  { provider: 'Anthem', claims: 100, amount: 220000, avgDays: 62, color: '#6F1D1B' }
];

export const unremittedTrends = [
  { month: 'Jan', newClaims: 420, resolved: 380, outstanding: 2850, amount: 7200000 },
  { month: 'Feb', newClaims: 450, resolved: 410, outstanding: 2890, amount: 7320000 },
  { month: 'Mar', newClaims: 380, resolved: 420, outstanding: 2850, amount: 7180000 },
  { month: 'Apr', newClaims: 520, resolved: 390, outstanding: 2980, amount: 7520000 },
  { month: 'May', newClaims: 480, resolved: 450, outstanding: 3010, amount: 7680000 },
  { month: 'Jun', newClaims: 410, resolved: 480, outstanding: 2940, amount: 7420000 },
  { month: 'Jul', newClaims: 550, resolved: 420, outstanding: 3070, amount: 7850000 },
  { month: 'Aug', newClaims: 520, resolved: 490, outstanding: 3100, amount: 7920000 },
  { month: 'Sep', newClaims: 480, resolved: 520, outstanding: 3060, amount: 7780000 },
  { month: 'Oct', newClaims: 620, resolved: 480, outstanding: 3200, amount: 8200000 },
  { month: 'Nov', newClaims: 580, resolved: 550, outstanding: 3230, amount: 8350000 },
  { month: 'Dec', newClaims: 450, resolved: 680, outstanding: 3000, amount: 7800000 }
];

export const ageingBuckets = [
  { range: '0-30 days', claims: 1200, amount: 3000000, percentage: 34.8, color: '#10B981' },
  { range: '31-60 days', claims: 850, amount: 2125000, percentage: 24.6, color: '#F59E0B' },
  { range: '61-90 days', claims: 620, amount: 1550000, percentage: 18.0, color: '#EF4444' },
  { range: '91-120 days', claims: 450, amount: 1125000, percentage: 13.0, color: '#8B5CF6' },
  { range: '121+ days', claims: 330, amount: 950000, percentage: 9.6, color: '#6B7280' }
];

export const denialCategories = [
  { category: 'Authorization Issues', claims: 680, amount: 1720000, percentage: 19.7 },
  { category: 'Coding Errors', claims: 520, amount: 1320000, percentage: 15.1 },
  { category: 'Documentation Missing', claims: 480, amount: 1220000, percentage: 13.9 },
  { category: 'Patient Eligibility', claims: 420, amount: 1070000, percentage: 12.2 },
  { category: 'Duplicate Claims', claims: 380, amount: 970000, percentage: 11.0 },
  { category: 'Service Not Covered', claims: 320, amount: 820000, percentage: 9.3 },
  { category: 'Timely Filing', claims: 280, amount: 720000, percentage: 8.1 },
  { category: 'Other', claims: 370, amount: 910000, percentage: 10.7 }
];

export const departmentBreakdown = [
  { department: 'Emergency Department', claims: 580, amount: 1450000, avgDays: 42 },
  { department: 'Surgery', claims: 420, amount: 1680000, avgDays: 38 },
  { department: 'Cardiology', claims: 380, amount: 950000, avgDays: 45 },
  { department: 'Orthopedics', claims: 320, amount: 1280000, avgDays: 48 },
  { department: 'Radiology', claims: 450, amount: 900000, avgDays: 35 },
  { department: 'Laboratory', claims: 520, amount: 780000, avgDays: 28 },
  { department: 'Primary Care', claims: 680, amount: 1020000, avgDays: 32 },
  { department: 'Oncology', claims: 280, amount: 1120000, avgDays: 52 },
  { department: 'Neurology', claims: 220, amount: 880000, avgDays: 58 },
  { department: 'Other Specialties', claims: 590, amount: 1690000, avgDays: 44 }
];

export const priorityLevels = [
  { priority: 'High Priority', claims: 420, amount: 2100000, description: 'Claims > $5,000 or > 90 days old' },
  { priority: 'Medium Priority', claims: 1250, amount: 3750000, description: 'Claims $1,000-$5,000 or 31-90 days old' },
  { priority: 'Low Priority', claims: 1780, amount: 2900000, description: 'Claims < $1,000 or < 30 days old' }
];

export const workflowStatus = [
  { status: 'Pending Review', claims: 850, amount: 2125000, color: '#F59E0B' },
  { status: 'Under Investigation', claims: 620, amount: 1860000, color: '#3B82F6' },
  { status: 'Awaiting Documentation', claims: 480, amount: 1440000, color: '#EF4444' },
  { status: 'Ready for Resubmission', claims: 720, amount: 2160000, color: '#10B981' },
  { status: 'Appeal in Progress', claims: 380, amount: 1140000, color: '#8B5CF6' },
  { status: 'Write-off Consideration', claims: 400, amount: 25000, color: '#6B7280' }
];

export const recentActivity = [
  { id: 1, claimId: 'CLM-2024-001234', patient: 'John Smith', provider: 'BCBS', amount: 2450, status: 'Resolved', date: '2024-01-15', action: 'Resubmitted with corrected codes' },
  { id: 2, claimId: 'CLM-2024-001235', patient: 'Sarah Johnson', provider: 'UHC', amount: 1200, status: 'Pending', date: '2024-01-14', action: 'Requested additional documentation' },
  { id: 3, claimId: 'CLM-2024-001236', patient: 'Michael Brown', provider: 'Aetna', amount: 3800, status: 'Under Review', date: '2024-01-13', action: 'Authorization obtained' },
  { id: 4, claimId: 'CLM-2024-001237', patient: 'Emily Davis', provider: 'Medicare', amount: 950, status: 'Resolved', date: '2024-01-12', action: 'Duplicate claim removed' },
  { id: 5, claimId: 'CLM-2024-001238', patient: 'David Wilson', provider: 'Cigna', amount: 5200, status: 'Appeal Filed', date: '2024-01-11', action: 'Medical necessity appeal submitted' }
];

