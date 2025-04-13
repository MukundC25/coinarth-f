import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { FaChartPie } from 'react-icons/fa';
import { Chart, registerables } from 'chart.js';
import Card from '../ui/Card';

Chart.register(...registerables);

const ChartContainer = styled.div`
  height: 300px;
  margin-top: 1rem;
`;

const ExpenseBreakdownChart = ({ data }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      
      if (ctx) {
        // Destroy previous chart if it exists
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }
        
        // Create new chart
        chartInstance.current = new Chart(ctx, {
          type: 'doughnut',
          data: data,
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: 'right',
                labels: {
                  padding: 20,
                  usePointStyle: true,
                  pointStyle: 'circle'
                }
              },
              tooltip: {
                callbacks: {
                  label: function(context) {
                    const label = context.label || '';
                    const value = context.parsed || 0;
                    const total = context.dataset.data.reduce((acc, data) => acc + data, 0);
                    const percentage = Math.round((value * 100) / total) + '%';
                    return `${label}: ${percentage}`;
                  }
                }
              }
            },
            cutout: '70%',
            animation: {
              animateRotate: true,
              animateScale: true,
              duration: 2000,
              easing: 'easeOutQuart'
            }
          }
        });
      }
    }
    
    // Cleanup function
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data]);

  return (
    <Card 
      title="Expense Breakdown" 
      icon={<FaChartPie />} 
      iconBgColor="var(--red-light)" 
      iconColor="var(--red)"
    >
      <ChartContainer>
        <canvas ref={chartRef}></canvas>
      </ChartContainer>
    </Card>
  );
};

export default ExpenseBreakdownChart;
