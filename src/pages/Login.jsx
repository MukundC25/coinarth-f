import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../context/AuthContext';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: var(--primary-bg);
  padding: 2rem;
`;

const FormCard = styled.div`
  background-color: var(--card-bg);
  border-radius: 1rem;
  box-shadow: var(--shadow-lg);
  padding: 2rem;
  width: 100%;
  max-width: 450px;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const Logo = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
  text-align: center;
`;

const LogoCoin = styled.span`
  color: #f59e0b;
`;

const LogoA = styled.span`
  color: var(--text-color);
`;

const LogoRth = styled.span`
  color: #f59e0b;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  font-size: 1rem;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--blue);
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
  }
`;

const Button = styled.button`
  background-color: var(--blue);
  color: white;
  border: none;
  border-radius: 0.5rem;
  padding: 0.75rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #2563eb;
  }
  
  &:disabled {
    background-color: #93c5fd;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.p`
  color: var(--red);
  font-size: 0.875rem;
  margin-top: 0.5rem;
`;

const LinkText = styled.p`
  font-size: 0.875rem;
  text-align: center;
  margin-top: 1.5rem;
  
  a {
    color: var(--blue);
    text-decoration: none;
    font-weight: 500;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ForgotPassword = styled.div`
  text-align: right;
  
  a {
    font-size: 0.875rem;
    color: var(--blue);
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      setError('');
      setLoading(true);
      await login(email, password);
      navigate('/');
    } catch (err) {
      setError('Failed to log in');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <Container>
      <FormCard>
        <Logo>
          <LogoCoin>COIN</LogoCoin>
          <LogoA>A</LogoA>
          <LogoRth>RTH</LogoRth>
        </Logo>
        <Title>Log in to your account</Title>
        
        {error && <ErrorMessage>{error}</ErrorMessage>}
        
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="email">Email Address</Label>
            <Input 
              type="email" 
              id="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="password">Password</Label>
            <Input 
              type="password" 
              id="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
            <ForgotPassword>
              <Link to="/forgot-password">Forgot password?</Link>
            </ForgotPassword>
          </FormGroup>
          
          <Button type="submit" disabled={loading}>
            {loading ? 'Logging In...' : 'Log In'}
          </Button>
        </Form>
        
        <LinkText>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </LinkText>
      </FormCard>
    </Container>
  );
};

export default Login;
