import styled from 'styled-components';
import { FaNewspaper } from 'react-icons/fa';
import Card from '../ui/Card';

const NewsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
`;

const NewsItem = styled.div`
  display: flex;
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 1rem;
  
  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
`;

const NewsImage = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 0.5rem;
  object-fit: cover;
  margin-right: 1rem;
`;

const NewsContent = styled.div`
  flex: 1;
`;

const NewsTitle = styled.h3`
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 0.25rem;
`;

const NewsMeta = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.75rem;
  color: var(--text-light);
`;

const NewsSeparator = styled.span`
  margin: 0 0.5rem;
`;

const NewsCategory = styled.span`
  margin-left: 0.5rem;
  padding: 0.125rem 0.5rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  
  background-color: ${props => {
    switch(props.type) {
      case 'markets': return 'var(--blue-light)';
      case 'economy': return 'var(--green-light)';
      default: return 'var(--blue-light)';
    }
  }};
  
  color: ${props => {
    switch(props.type) {
      case 'markets': return 'var(--blue)';
      case 'economy': return 'var(--green)';
      default: return 'var(--blue)';
    }
  }};
`;

const FinancialNews = ({ news }) => {
  return (
    <Card 
      title="Financial News" 
      icon={<FaNewspaper />} 
      iconBgColor="var(--purple-light)" 
      iconColor="var(--purple)"
    >
      <NewsList>
        {news.map((item) => (
          <NewsItem key={item.id}>
            <NewsImage 
              src={item.image} 
              alt={item.title} 
            />
            <NewsContent>
              <NewsTitle>{item.title}</NewsTitle>
              <NewsMeta>
                <span>{item.source}</span>
                <NewsSeparator>•</NewsSeparator>
                <span>{item.time}</span>
                <NewsCategory type={item.categoryClass}>
                  {item.category}
                </NewsCategory>
              </NewsMeta>
            </NewsContent>
          </NewsItem>
        ))}
      </NewsList>
    </Card>
  );
};

export default FinancialNews;
