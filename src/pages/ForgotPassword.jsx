import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaExclamationCircle, FaCheckCircle, FaEnvelope } from 'react-icons/fa';

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
  margin-bottom: 1rem;
  text-align: center;
`;

const Description = styled.p`
  font-size: 0.875rem;
  color: var(--text-light);
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
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  
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
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const SuccessMessage = styled.div`
  color: var(--green);
  font-size: 0.875rem;
  margin-top: 1rem;
  padding: 1rem;
  background-color: rgba(16, 185, 129, 0.1);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
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

const InputFeedback = styled.div`
  font-size: 0.75rem;
  margin-top: 0.25rem;
  color: ${props => props.error ? 'var(--red)' : 'var(--text-light)'};
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formTouched, setFormTouched] = useState(false);
  
  // Validate email format
  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };
  
  // Handle input blur for validation
  const handleBlur = () => {
    setFormTouched(true);
    
    if (!email.trim()) {
      setEmailError('Email is required');
    } else if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };
  
  // Check if form is valid
  const isFormValid = () => {
    return email.trim() !== '' && validateEmail(email);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormTouched(true);
    
    // Validate email
    handleBlur();
    
    // Check if form is valid
    if (!isFormValid()) {
      return setError('Please enter a valid email address');
    }
    
    try {
      setError('');
      setLoading(true);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSuccess(true);
    } catch (err) {
      setError('Failed to send password reset email');
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
        <Title>Reset your password</Title>
        <Description>
          Enter your email address and we'll send you a link to reset your password.
        </Description>
        
        {error && (
          <ErrorMessage>
            <FaExclamationCircle /> {error}
          </ErrorMessage>
        )}
        
        {success ? (
          <>
            <SuccessMessage>
              <FaCheckCircle /> Password reset link sent to your email
            </SuccessMessage>
            <Description style={{ marginTop: '1rem' }}>
              Please check your email for instructions to reset your password. If you don't see it in your inbox, check your spam folder.
            </Description>
          </>
        ) : (
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="email">Email Address</Label>
              <Input 
                type="email" 
                id="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                onBlur={handleBlur}
                required 
              />
              {emailError && formTouched && (
                <InputFeedback error>
                  <FaExclamationCircle /> {emailError}
                </InputFeedback>
              )}
            </FormGroup>
            
            <Button 
              type="submit" 
              disabled={loading || (formTouched && !isFormValid())}
            >
              {loading ? (
                'Sending...'
              ) : (
                <>
                  <FaEnvelope /> Send Reset Link
                </>
              )}
            </Button>
          </Form>
        )}
        
        <LinkText>
          Remember your password? <Link to="/login">Log In</Link>
        </LinkText>
      </FormCard>
    </Container>
  );
};

export default ForgotPassword;
