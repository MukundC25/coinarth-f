import styled from 'styled-components';
import { 
  FaLightbulb, 
  FaPiggyBank, 
  FaChartLine, 
  FaFileInvoice 
} from 'react-icons/fa';
import Card from '../ui/Card';

const RecommendationsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
`;

const RecommendationItem = styled.div`
  padding: 1rem;
  border-radius: 0.5rem;
  border-left-width: 4px;
  transition: transform 0.2s ease;
  
  background-color: ${props => {
    switch(props.type) {
      case 'green': return 'var(--green-light)';
      case 'blue': return 'var(--blue-light)';
      case 'yellow': return 'var(--yellow-light)';
      default: return 'var(--blue-light)';
    }
  }};
  
  border-left-color: ${props => {
    switch(props.type) {
      case 'green': return 'var(--green)';
      case 'blue': return 'var(--blue)';
      case 'yellow': return 'var(--yellow)';
      default: return 'var(--blue)';
    }
  }};
  
  &:hover {
    transform: translateX(4px);
  }
`;

const RecommendationTitle = styled.h3`
  display: flex;
  align-items: center;
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.25rem;
  
  color: ${props => {
    switch(props.type) {
      case 'green': return 'var(--green)';
      case 'blue': return 'var(--blue)';
      case 'yellow': return 'var(--yellow)';
      default: return 'var(--blue)';
    }
  }};
  
  svg {
    margin-right: 0.5rem;
  }
`;

const RecommendationDescription = styled.p`
  font-size: 0.875rem;
  color: var(--text-light);
`;

const Recommendations = ({ recommendations }) => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'piggy-bank':
        return <FaPiggyBank />;
      case 'chart-line':
        return <FaChartLine />;
      case 'file-invoice':
        return <FaFileInvoice />;
      default:
        return <FaLightbulb />;
    }
  };

  return (
    <Card 
      title="Financial Recommendations" 
      icon={<FaLightbulb />} 
      iconBgColor="var(--blue-light)" 
      iconColor="var(--blue)"
    >
      <RecommendationsList>
        {recommendations.map((recommendation) => (
          <RecommendationItem 
            key={recommendation.id} 
            type={recommendation.type}
          >
            <RecommendationTitle type={recommendation.type}>
              {getIcon(recommendation.icon)}
              <span>{recommendation.title}</span>
            </RecommendationTitle>
            <RecommendationDescription>
              {recommendation.description}
            </RecommendationDescription>
          </RecommendationItem>
        ))}
      </RecommendationsList>
    </Card>
  );
};

export default Recommendations;
