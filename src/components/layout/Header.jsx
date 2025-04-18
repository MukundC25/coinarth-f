import styled from 'styled-components';
import { FaBell, FaEnvelope, FaCalendar, FaMoon, FaSun } from 'react-icons/fa';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 260px;
  height: 70px;
  background-color: var(--card-bg);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  z-index: 40;
`;

const SearchContainer = styled.div`
  flex: 1;
  max-width: 400px;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb;
  background-color: #f9fafb;
  outline: none;
  transition: var(--transition);

  &:focus {
    border-color: var(--blue);
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
  }
`;

const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
`;

const ActionIcon = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6b7280;
  cursor: pointer;
  position: relative;
  transition: var(--transition);

  &:hover {
    background-color: #e5e7eb;
  }
`;

const NotificationBadge = styled.span`
  position: absolute;
  top: -5px;
  right: -5px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: var(--red);
  color: white;
  font-size: 0.625rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
`;

const Avatar = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  object-fit: cover;
`;

const UserInfo = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

const UserName = styled.div`
  font-size: 0.875rem;
  font-weight: 600;
`;

const UserStatus = styled.div`
  font-size: 0.75rem;
  color: var(--text-light);
`;

const Header = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <HeaderContainer>
      <SearchContainer>
        <SearchInput type="text" placeholder="Search..." />
      </SearchContainer>

      <HeaderActions>
        <ActionIcon>
          <FaBell />
          <NotificationBadge>3</NotificationBadge>
        </ActionIcon>

        <ActionIcon>
          <FaEnvelope />
        </ActionIcon>

        <ActionIcon>
          <FaCalendar />
        </ActionIcon>

        <ActionIcon onClick={toggleDarkMode}>
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </ActionIcon>

        <UserProfile>
          <Avatar
            src="/images/profile-image.jpeg"
            alt="User Avatar"
          />
          <UserInfo>
            <UserName>Yash More</UserName>
            <UserStatus>Premium User</UserStatus>
          </UserInfo>
        </UserProfile>
      </HeaderActions>
    </HeaderContainer>
  );
};

export default Header;
