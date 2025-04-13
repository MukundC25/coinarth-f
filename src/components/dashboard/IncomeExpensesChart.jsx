import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { FaChartBar } from 'react-icons/fa';
import { Chart, registerables } from 'chart.js';
import Card from '../ui/Card';

Chart.register(...registerables);

const ChartContainer = styled.div`
  height: 300px;
  margin-top: 1rem;
`;

const IncomeExpensesChart = ({ data }) => {
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
          type: 'bar',
          data: data,
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: 'top',
              },
              tooltip: {
                mode: 'index',
                intersect: false,
                callbacks: {
                  label: function(context) {
                    let label = context.dataset.label || '';
                    if (label) {
                      label += ': ';
                    }
                    if (context.parsed.y !== null) {
                      label += new Intl.NumberFormat('en-IN', { 
                        style: 'currency', 
                        currency: 'INR',
                        maximumFractionDigits: 0
                      }).format(context.parsed.y);
                    }
                    return label;
                  }
                }
              }
            },
            scales: {
              y: {
                beginAtZero: true,
                ticks: {
                  callback: function(value) {
                    return '₹' + value / 1000 + 'K';
                  }
                }
              }
            },
            animation: {
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
      title="Income vs Expenses" 
      icon={<FaChartBar />} 
      iconBgColor="var(--blue-light)" 
      iconColor="var(--blue)"
    >
      <ChartContainer>
        <canvas ref={chartRef}></canvas>
      </ChartContainer>
    </Card>
  );
};

export default IncomeExpensesChart;
