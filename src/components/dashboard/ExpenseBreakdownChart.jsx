import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { FaChartPie } from 'react-icons/fa';
import { Chart, registerables } from 'chart.js';
import Card from '../ui/Card';

Chart.register(...registerables);

const ChartContainer = styled.div`
  height: 300px;
  margin-top: 1rem;
  position: relative;
`;

const CenterText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  pointer-events: none;
`;

const TotalAmount = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--text-color);
`;

const TotalLabel = styled.div`
  font-size: 0.875rem;
  color: var(--text-secondary);
  margin-top: 0.25rem;
`;

const LegendContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
`;

const LegendColor = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${props => props.color};
`;

const ExpenseBreakdownChart = ({ data }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const [activeSegment, setActiveSegment] = useState(null);

  // Calculate total amount
  const totalAmount = data.datasets[0].data.reduce((acc, curr) => acc + curr, 0);

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
                display: false // Hide default legend, we'll create our own
              },
              tooltip: {
                callbacks: {
                  label: function(context) {
                    const label = context.label || '';
                    const value = context.parsed || 0;
                    const total = context.dataset.data.reduce((acc, data) => acc + data, 0);
                    const percentage = Math.round((value * 100) / total) + '%';
                    return `${label}: ${percentage} (₹${value}K)`;
                  }
                },
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                padding: 12,
                titleFont: {
                  size: 14,
                  weight: 'bold'
                },
                bodyFont: {
                  size: 13
                },
                borderColor: 'rgba(255, 255, 255, 0.1)',
                borderWidth: 1,
                displayColors: true,
                boxWidth: 10,
                boxHeight: 10,
                boxPadding: 3,
                usePointStyle: true,
                cornerRadius: 4
              }
            },
            cutout: '75%',
            borderWidth: 2,
            borderColor: 'rgba(255, 255, 255, 0.8)',
            hoverBorderWidth: 0,
            hoverOffset: 10,
            animation: {
              animateRotate: true,
              animateScale: true,
              duration: 2000,
              easing: 'easeOutQuart'
            },
            onHover: (event, elements) => {
              if (elements && elements.length) {
                setActiveSegment(elements[0].index);
              } else {
                setActiveSegment(null);
              }
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
        <CenterText>
          <TotalAmount>100%</TotalAmount>
          <TotalLabel>Total Expenses</TotalLabel>
        </CenterText>
      </ChartContainer>

      <LegendContainer>
        {data.labels.map((label, index) => (
          <LegendItem key={index} style={{
            opacity: activeSegment === null || activeSegment === index ? 1 : 0.5,
            fontWeight: activeSegment === index ? 'bold' : 'normal'
          }}>
            <LegendColor color={data.datasets[0].backgroundColor[index]} />
            <span>{label} ({data.datasets[0].data[index]}%)</span>
          </LegendItem>
        ))}
      </LegendContainer>
    </Card>
  );
};

export default ExpenseBreakdownChart;
