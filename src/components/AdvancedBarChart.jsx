import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const dummy = [
  { type: 'Health', amount: 120000, percentage: 40 },
  { type: 'Auto', amount: 80000, percentage: 27 },
  { type: 'Life', amount: 60000, percentage: 20 },
  { type: 'Travel', amount: 40000, percentage: 13 },
];

const AdvancedBarChart = ({ data = dummy, title = 'Revenue by Insurance Type' }) => {
  const chartData = {
    labels: data.map(d => d.type),
    datasets: [
      {
        label: 'Revenue Amount',
        data: data.map(d => d.amount),
        backgroundColor: [
          'rgba(16, 185, 129, 0.8)',
          'rgba(59, 130, 246, 0.8)',
          'rgba(139, 92, 246, 0.8)',
          'rgba(245, 158, 11, 0.8)',
        ],
        borderColor: [
          'rgb(16, 185, 129)',
          'rgb(59, 130, 246)',
          'rgb(139, 92, 246)',
          'rgb(245, 158, 11)',
        ],
        borderWidth: 2,
        borderRadius: 8,
        borderSkipped: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: 'rgba(255,255,255,0.95)',
        titleColor: '#111827',
        bodyColor: '#4b5563',
        borderColor: '#e5e7eb',
        borderWidth: 1,
        cornerRadius: 8,
        padding: 12,
        callbacks: {
          label: ctx => [
            `Amount: $${ctx.parsed.y.toLocaleString()}`,
            `Percentage: ${data[ctx.dataIndex].percentage}%`,
          ],
        },
      },
    },
    scales: {
      x: { grid: { display: false } },
      y: {
        grid: { color: 'rgba(229,231,235,0.5)' },
        ticks: { callback: v => '$' + (v / 1000) + 'K' },
      },
    },
  };

  return (
    <div style={{ height: 300 }}>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default AdvancedBarChart;