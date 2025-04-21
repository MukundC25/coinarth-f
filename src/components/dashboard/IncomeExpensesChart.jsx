import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { FaChartBar, FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { Chart, registerables } from 'chart.js';
import Card from '../ui/Card';

Chart.register(...registerables);

const ChartContainer = styled.div`
  height: 300px;
  margin-top: 1rem;
`;

const SummaryContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 1rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: var(--card-bg-secondary);
`;

const SummaryItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem 1rem;
`;

const SummaryLabel = styled.div`
  font-size: 0.875rem;
  color: var(--text-secondary);
  margin-bottom: 0.25rem;
`;

const SummaryValue = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
  color: var(--text-color);
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const SummaryIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${props => props.bgColor};
  color: white;
  font-size: 0.75rem;
`;

const MonthSelector = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const MonthButton = styled.button`
  background-color: ${props => props.active ? 'var(--blue)' : 'transparent'};
  color: ${props => props.active ? 'white' : 'var(--text-color)'};
  border: 1px solid ${props => props.active ? 'var(--blue)' : 'var(--border-color)'};
  border-radius: 0.25rem;
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${props => props.active ? 'var(--blue)' : 'rgba(59, 130, 246, 0.1)'};
  }
`;

const IncomeExpensesChart = ({ data }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const [activeMonth, setActiveMonth] = useState(5); // Default to the last month (Jun)

  // Calculate summary data
  const lastMonthIncome = data.datasets[0].data[activeMonth];
  const lastMonthExpenses = data.datasets[1].data[activeMonth];
  const savings = lastMonthIncome - lastMonthExpenses;
  const savingsPercentage = Math.round((savings / lastMonthIncome) * 100);

  // Calculate month-over-month changes
  const prevMonthIndex = activeMonth > 0 ? activeMonth - 1 : 0;
  const incomeChange = lastMonthIncome - data.datasets[0].data[prevMonthIndex];
  const expensesChange = lastMonthExpenses - data.datasets[1].data[prevMonthIndex];

  const handleMonthClick = (index) => {
    setActiveMonth(index);
  };

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
          data: {
            ...data,
            datasets: data.datasets.map((dataset, index) => ({
              ...dataset,
              borderRadius: 6,
              borderWidth: 0,
              hoverBorderWidth: 2,
              hoverBorderColor: index === 0 ? '#2563eb' : '#dc2626',
              // Highlight the active month
              backgroundColor: data.labels.map((_, i) =>
                i === activeMonth
                  ? (index === 0 ? '#3b82f6' : '#ef4444') // Full opacity for active month
                  : (index === 0 ? 'rgba(59, 130, 246, 0.7)' : 'rgba(239, 68, 68, 0.7)') // Reduced opacity for other months
              )
            }))
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: 'top',
                labels: {
                  usePointStyle: true,
                  pointStyle: 'circle',
                  padding: 20,
                  font: {
                    size: 12
                  }
                }
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
            scales: {
              x: {
                grid: {
                  display: false,
                  drawBorder: false
                }
              },
              y: {
                beginAtZero: true,
                border: {
                  display: false
                },
                grid: {
                  color: 'rgba(200, 200, 200, 0.1)'
                },
                ticks: {
                  padding: 10,
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

      <SummaryContainer>
        <SummaryItem>
          <SummaryLabel>Income</SummaryLabel>
          <SummaryValue>
            ₹{(lastMonthIncome/1000).toFixed(0)}K
            {incomeChange !== 0 && (
              <SummaryIcon bgColor={incomeChange > 0 ? 'var(--green)' : 'var(--red)'}>
                {incomeChange > 0 ? <FaArrowUp /> : <FaArrowDown />}
              </SummaryIcon>
            )}
          </SummaryValue>
        </SummaryItem>

        <SummaryItem>
          <SummaryLabel>Expenses</SummaryLabel>
          <SummaryValue>
            ₹{(lastMonthExpenses/1000).toFixed(0)}K
            {expensesChange !== 0 && (
              <SummaryIcon bgColor={expensesChange < 0 ? 'var(--green)' : 'var(--red)'}>
                {expensesChange < 0 ? <FaArrowDown /> : <FaArrowUp />}
              </SummaryIcon>
            )}
          </SummaryValue>
        </SummaryItem>

        <SummaryItem>
          <SummaryLabel>Savings</SummaryLabel>
          <SummaryValue>
            ₹{(savings/1000).toFixed(0)}K
            <SummaryIcon bgColor={'var(--blue)'}>
              {savingsPercentage}%
            </SummaryIcon>
          </SummaryValue>
        </SummaryItem>
      </SummaryContainer>

      <MonthSelector>
        {data.labels.map((month, index) => (
          <MonthButton
            key={index}
            active={index === activeMonth}
            onClick={() => handleMonthClick(index)}
          >
            {month}
          </MonthButton>
        ))}
      </MonthSelector>
    </Card>
  );
};

export default IncomeExpensesChart;
