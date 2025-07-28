import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const dummy = [
  { month: 'Jan', revenue: 120000, claims: 45 },
  { month: 'Feb', revenue: 135000, claims: 50 },
  { month: 'Mar', revenue: 150000, claims: 55 },
  { month: 'Apr', revenue: 145000, claims: 60 },
  { month: 'May', revenue: 160000, claims: 65 },
  { month: 'Jun', revenue: 170000, claims: 70 },
];

const MultiLineChart = ({ data = dummy, title = 'Revenue & Claims Trend' }) => {
  const chartData = {
    labels: data.map(d => d.month),
    datasets: [
      {
        label: 'Revenue',
        data: data.map(d => d.revenue),
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        borderWidth: 3,
        fill: false,
        tension: 0.4,
        yAxisID: 'y',
      },
      {
        label: 'Claims',
        data: data.map(d => d.claims * 1000), // scale to match visually
        borderColor: 'rgb(16, 185, 129)',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        borderWidth: 3,
        fill: false,
        tension: 0.4,
        yAxisID: 'y1',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: { mode: 'index', intersect: false },
    plugins: {
      legend: { position: 'top', labels: { usePointStyle: true, padding: 20 } },
      tooltip: {
        backgroundColor: 'rgba(255,255,255,0.95)',
        titleColor: '#111827',
        bodyColor: '#4b5563',
        borderColor: '#e5e7eb',
        borderWidth: 1,
        cornerRadius: 8,
        padding: 12,
        callbacks: {
          label: ctx => {
            if (ctx.dataset.label === 'Revenue')
              return `Revenue: $${ctx.parsed.y.toLocaleString()}`;
            return `Claims: ${(ctx.parsed.y / 1000).toFixed(0)}`;
          },
        },
      },
    },
    scales: {
      x: { grid: { display: false } },
      y: {
        type: 'linear',
        display: true,
        position: 'left',
        grid: { color: 'rgba(229,231,235,0.5)' },
        ticks: { callback: v => '$' + (v / 1000) + 'K' },
      },
      y1: {
        type: 'linear',
        display: true,
        position: 'right',
        grid: { drawOnChartArea: false },
        ticks: { callback: v => (v / 1000).toFixed(0) },
      },
    },
  };

  return (
    <div style={{ height: 300 }}>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default MultiLineChart;