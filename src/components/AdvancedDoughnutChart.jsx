import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const dummy = [
  { name: 'Approved', value: 650, color: '#4caf50' },
  { name: 'Pending', value: 300, color: '#ff9800' },
  { name: 'Rejected', value: 150, color: '#f44336' },
];

const AdvancedDoughnutChart = ({ data = dummy, title = 'Claim Status' }) => {
  const chartData = {
    labels: data.map(d => d.name),
    datasets: [
      {
        data: data.map(d => d.value),
        backgroundColor: data.map(d => d.color),
        borderColor: '#fff',
        borderWidth: 3,
        hoverBorderWidth: 4,
        cutout: '60%',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: true,
          padding: 20,
          generateLabels: chart => {
            const dataset = chart.data.datasets[0];
            const total = dataset.data.reduce((a, b) => a + b, 0);
            return chart.data.labels.map((label, i) => ({
              text: `${label} (${((dataset.data[i] / total) * 100).toFixed(1)}%)`,
              fillStyle: dataset.backgroundColor[i],
              strokeStyle: dataset.borderColor,
              lineWidth: dataset.borderWidth,
              pointStyle: 'circle',
              hidden: false,
              index: i,
            }));
          },
        },
      },
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
            const total = ctx.dataset.data.reduce((a, b) => a + b, 0);
            const pct = ((ctx.parsed / total) * 100).toFixed(1);
            return `${ctx.label}: ${ctx.parsed} (${pct}%)`;
          },
        },
      },
    },
  };

  return (
    <div style={{ height: 300 }}>
      <Doughnut data={chartData} options={options} />
    </div>
  );
};

export default AdvancedDoughnutChart;