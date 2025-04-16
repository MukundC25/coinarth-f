import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../context/AuthContext';
import { FaGoogle, FaFacebook, FaApple, FaExclamationCircle, FaLock } from 'react-icons/fa';
import Logo from '../components/common/Logo';

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

const StyledLogo = styled(Logo)`
  margin-bottom: 2rem;
  margin-top: 1rem;
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

const Divider = styled.div`
  display: flex;
  align-items: center;
  margin: 1.5rem 0;

  &::before,
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background-color: #e5e7eb;
  }

  span {
    padding: 0 1rem;
    font-size: 0.875rem;
    color: var(--text-light);
  }
`;

const SocialButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const SocialButton = styled.button`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  background-color: white;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-color);
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f9fafb;
  }

  svg {
    font-size: 1.25rem;
  }
`;

const RememberMeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;

  label {
    font-size: 0.875rem;
    color: var(--text-color);
    cursor: pointer;
  }

  input {
    cursor: pointer;
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
  const [socialLoading, setSocialLoading] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [formTouched, setFormTouched] = useState(false);

  const { login, socialLogin, error: authError } = useAuth();
  const navigate = useNavigate();

  // Update error from auth context
  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);

  // Validate email format
  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  // Handle input blur for validation
  const handleBlur = (field) => {
    setFormTouched(true);

    if (field === 'email') {
      if (!email.trim()) {
        setEmailError('Email is required');
      } else if (!validateEmail(email)) {
        setEmailError('Please enter a valid email address');
      } else {
        setEmailError('');
      }
    }
  };

  // Check if form is valid
  const isFormValid = () => {
    return email.trim() !== '' && validateEmail(email) && password.trim() !== '';
  };

  // Handle social login
  const handleSocialLogin = async (provider) => {
    try {
      setSocialLoading(provider);
      setError('');
      await socialLogin(provider);
      navigate('/');
    } catch (err) {
      setError(`Failed to log in with ${provider}`);
      console.error(err);
    } finally {
      setSocialLoading('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormTouched(true);

    // Validate email
    handleBlur('email');

    // Check if form is valid
    if (!isFormValid()) {
      return setError('Please enter a valid email and password');
    }

    try {
      setError('');
      setLoading(true);
      await login(email, password);
      navigate('/');
    } catch (err) {
      // Error is set from auth context
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <FormCard>
        <StyledLogo />
        <Title>Log in to your account</Title>

        {error && (
          <ErrorMessage>
            <FaExclamationCircle /> {error}
          </ErrorMessage>
        )}

        <SocialButtons>
          <SocialButton
            type="button"
            onClick={() => handleSocialLogin('google')}
            disabled={socialLoading !== ''}
          >
            <FaGoogle style={{ color: '#DB4437' }} />
            {socialLoading === 'google' ? 'Signing in...' : 'Google'}
          </SocialButton>

          <SocialButton
            type="button"
            onClick={() => handleSocialLogin('facebook')}
            disabled={socialLoading !== ''}
          >
            <FaFacebook style={{ color: '#4267B2' }} />
            {socialLoading === 'facebook' ? 'Signing in...' : 'Facebook'}
          </SocialButton>

          <SocialButton
            type="button"
            onClick={() => handleSocialLogin('apple')}
            disabled={socialLoading !== ''}
          >
            <FaApple />
            {socialLoading === 'apple' ? 'Signing in...' : 'Apple'}
          </SocialButton>
        </SocialButtons>

        <Divider>
          <span>OR</span>
        </Divider>

        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="email">Email Address</Label>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => handleBlur('email')}
              required
            />
            {emailError && formTouched && (
              <InputFeedback error>
                <FaExclamationCircle /> {emailError}
              </InputFeedback>
            )}
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

          <RememberMeContainer>
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            <label htmlFor="rememberMe">Remember me for 30 days</label>
          </RememberMeContainer>

          <Button
            type="submit"
            disabled={loading || (formTouched && !isFormValid())}
          >
            {loading ? (
              'Logging In...'
            ) : (
              <>
                <FaLock style={{ marginRight: '0.5rem' }} /> Log In
              </>
            )}
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
