import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaExclamationCircle, FaCheckCircle, FaEnvelope } from 'react-icons/fa';
import Logo from '../components/common/Logo';

// Styled Components
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: var(--background-color);
  color: var(--text-color);
`;

const FormContainer = styled.div`
  background-color: var(--card-background);
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  width: 100%;
  max-width: 450px;
`;

const StyledLogo = styled(Logo)`
  margin-bottom: 2rem;
  margin-top: 1rem;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
  color: var(--text-color);
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
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text-color);
`;

const InputWrapper = styled.div`
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  padding-left: 2.5rem;
  border: 1px solid ${props => props.error ? 'var(--error-color)' : 'var(--border-color)'};
  border-radius: 5px;
  font-size: 1rem;
  background-color: var(--input-background);
  color: var(--text-color);
  transition: border-color 0.3s;

  &:focus {
    outline: none;
    border-color: #f59e0b;
  }
`;

const InputIcon = styled.div`
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: #888;
`;

const ErrorMessage = styled.div`
  color: var(--error-color);
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.25rem;
`;

const SuccessMessage = styled.div`
  color: var(--success-color);
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
  padding: 0.75rem;
  background-color: rgba(34, 197, 94, 0.1);
  border-radius: 5px;
`;

const Button = styled.button`
  background-color: #f59e0b;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 0.75rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 0.5rem;

  &:hover {
    background-color: #d97706;
  }

  &:disabled {
    background-color: #d1d5db;
    cursor: not-allowed;
  }
`;

const LinkContainer = styled.div`
  text-align: center;
  margin-top: 1.5rem;
`;

const StyledLink = styled(Link)`
  color: #f59e0b;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;

  &:hover {
    color: #d97706;
  }
`;

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    
    if (value && !validateEmail(value)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate email
    if (!email) {
      setEmailError('Email is required');
      return;
    }
    
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Show success message
      setIsSuccess(true);
      
      // Reset form
      setEmail('');
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container>
      <FormContainer>
        <StyledLogo />
        <Title>Forgot Password</Title>
        
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="email">Email Address</Label>
            <InputWrapper>
              <InputIcon>
                <FaEnvelope />
              </InputIcon>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
                error={emailError}
                disabled={isSubmitting || isSuccess}
              />
            </InputWrapper>
            {emailError && (
              <ErrorMessage>
                <FaExclamationCircle />
                {emailError}
              </ErrorMessage>
            )}
          </FormGroup>
          
          {isSuccess && (
            <SuccessMessage>
              <FaCheckCircle />
              Password reset link has been sent to your email address.
            </SuccessMessage>
          )}
          
          <Button type="submit" disabled={isSubmitting || isSuccess}>
            {isSubmitting ? 'Sending...' : 'Reset Password'}
          </Button>
        </Form>
        
        <LinkContainer>
          <StyledLink to="/login">Back to Login</StyledLink>
        </LinkContainer>
      </FormContainer>
    </Container>
  );
};

export default ForgotPassword;
