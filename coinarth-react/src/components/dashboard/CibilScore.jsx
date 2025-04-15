import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { FaChartPie, FaCheckCircle } from 'react-icons/fa';
import Card from '../ui/Card';

const CibilScoreContainer = styled.div`
  padding: 0.5rem 0;
`;

const CibilScoreHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const ScoreDisplay = styled.div`
  display: flex;
  align-items: baseline;
`;

const ScoreValue = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--green);
  margin-right: 0.25rem;
`;

const ScoreMax = styled.div`
  font-size: 0.875rem;
  color: var(--text-light);
`;

const CibilStatus = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--green-light);
  color: var(--green);
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 600;
  
  svg {
    margin-right: 0.25rem;
  }
`;

const ProgressBarContainer = styled.div`
  height: 0.5rem;
  background-color: #e5e7eb;
  border-radius: 9999px;
  overflow: hidden;
  margin-bottom: 0.25rem;
`;

const ProgressBar = styled.div`
  height: 100%;
  background-color: var(--green);
  border-radius: 9999px;
  width: 0;
  transition: width 1.5s ease-out;
`;

const CibilRanges = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

const CibilRange = styled.div`
  text-align: center;
  flex: 1;
`;

const RangeIndicator = styled.div`
  height: 0.25rem;
  border-radius: 9999px;
  margin-bottom: 0.25rem;
  background-color: ${props => {
    switch(props.type) {
      case 'poor': return 'var(--red)';
      case 'fair': return 'var(--yellow)';
      case 'good': return 'var(--blue)';
      case 'excellent': return 'var(--green)';
      default: return 'var(--text-light)';
    }
  }};
`;

const RangeLabel = styled.div`
  font-size: 0.75rem;
  color: var(--text-light);
  text-transform: uppercase;
`;

const CibilScore = ({ score }) => {
  const progressBarRef = useRef(null);
  
  useEffect(() => {
    if (progressBarRef.current) {
      const minScore = 300;
      const maxScore = 900;
      const scoreRange = maxScore - minScore;
      const scorePercentage = (score - minScore) / scoreRange;
      
      setTimeout(() => {
        if (progressBarRef.current) {
          progressBarRef.current.style.width = `${scorePercentage * 100}%`;
        }
      }, 500);
    }
  }, [score]);
  
  return (
    <Card 
      title="CIBIL Score" 
      icon={<FaChartPie />} 
      iconBgColor="var(--green-light)" 
      iconColor="var(--green)"
    >
      <CibilScoreContainer>
        <CibilScoreHeader>
          <ScoreDisplay>
            <ScoreValue>{score}</ScoreValue>
            <ScoreMax>/900</ScoreMax>
          </ScoreDisplay>
          <CibilStatus>
            <FaCheckCircle />
            <span>Excellent</span>
          </CibilStatus>
        </CibilScoreHeader>
        
        <ProgressBarContainer>
          <ProgressBar ref={progressBarRef} />
        </ProgressBarContainer>
        
        <CibilRanges>
          <CibilRange>
            <RangeIndicator type="poor" />
            <RangeLabel>Poor</RangeLabel>
          </CibilRange>
          <CibilRange>
            <RangeIndicator type="fair" />
            <RangeLabel>Fair</RangeLabel>
          </CibilRange>
          <CibilRange>
            <RangeIndicator type="good" />
            <RangeLabel>Good</RangeLabel>
          </CibilRange>
          <CibilRange>
            <RangeIndicator type="excellent" />
            <RangeLabel>Excellent</RangeLabel>
          </CibilRange>
        </CibilRanges>
      </CibilScoreContainer>
    </Card>
  );
};

export default CibilScore;
