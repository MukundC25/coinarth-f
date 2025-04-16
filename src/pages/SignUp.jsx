import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../context/AuthContext';
import { FaGoogle, FaFacebook, FaApple, FaExclamationCircle } from 'react-icons/fa';

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

const PasswordRequirements = styled.ul`
  list-style: none;
  margin-top: 0.5rem;
  font-size: 0.75rem;
  color: var(--text-light);
`;

const PasswordRequirement = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.25rem;

  svg {
    color: ${props => props.valid ? 'var(--green)' : 'var(--text-light)'};
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

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [socialLoading, setSocialLoading] = useState('');

  // Form validation states
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordErrors, setPasswordErrors] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    special: false
  });
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [formTouched, setFormTouched] = useState(false);

  const { signup, socialLogin, error: authError } = useAuth();
  const navigate = useNavigate();

  // Update error from auth context
  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);

  // Validate password as user types
  useEffect(() => {
    if (password) {
      setPasswordErrors({
        length: password.length >= 8,
        uppercase: /[A-Z]/.test(password),
        lowercase: /[a-z]/.test(password),
        number: /[0-9]/.test(password),
        special: /[^A-Za-z0-9]/.test(password)
      });
    }

    // Check if passwords match when either field changes
    if (confirmPassword && password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
    } else {
      setConfirmPasswordError('');
    }
  }, [password, confirmPassword]);

  // Validate email format
  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  // Handle input blur for validation
  const handleBlur = (field) => {
    setFormTouched(true);

    switch (field) {
      case 'name':
        if (!name.trim()) {
          setNameError('Name is required');
        } else if (name.length < 2) {
          setNameError('Name must be at least 2 characters');
        } else {
          setNameError('');
        }
        break;
      case 'email':
        if (!email.trim()) {
          setEmailError('Email is required');
        } else if (!validateEmail(email)) {
          setEmailError('Please enter a valid email address');
        } else {
          setEmailError('');
        }
        break;
      default:
        break;
    }
  };

  // Check if form is valid
  const isFormValid = () => {
    return (
      name.trim() !== '' &&
      email.trim() !== '' &&
      validateEmail(email) &&
      password.length >= 8 &&
      passwordErrors.uppercase &&
      passwordErrors.lowercase &&
      passwordErrors.number &&
      password === confirmPassword
    );
  };

  // Handle social login
  const handleSocialLogin = async (provider) => {
    try {
      setSocialLoading(provider);
      setError('');
      await socialLogin(provider);
      navigate('/');
    } catch (err) {
      setError(`Failed to sign up with ${provider}`);
      console.error(err);
    } finally {
      setSocialLoading('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormTouched(true);

    // Validate all fields
    handleBlur('name');
    handleBlur('email');

    // Check if form is valid
    if (!isFormValid()) {
      return setError('Please fix the errors in the form');
    }

    try {
      setError('');
      setLoading(true);
      await signup(email, password, name);
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
        <Logo>
          <LogoCoin>COIN</LogoCoin>
          <LogoA>A</LogoA>
          <LogoRth>RTH</LogoRth>
        </Logo>
        <Title>Create your account</Title>

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
            <Label htmlFor="name">Full Name</Label>
            <Input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onBlur={() => handleBlur('name')}
              required
            />
            {nameError && formTouched && (
              <InputFeedback error>
                <FaExclamationCircle /> {nameError}
              </InputFeedback>
            )}
          </FormGroup>

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
            <PasswordRequirements>
              <PasswordRequirement valid={passwordErrors.length}>
                <FaExclamationCircle /> At least 8 characters
              </PasswordRequirement>
              <PasswordRequirement valid={passwordErrors.uppercase}>
                <FaExclamationCircle /> At least one uppercase letter
              </PasswordRequirement>
              <PasswordRequirement valid={passwordErrors.lowercase}>
                <FaExclamationCircle /> At least one lowercase letter
              </PasswordRequirement>
              <PasswordRequirement valid={passwordErrors.number}>
                <FaExclamationCircle /> At least one number
              </PasswordRequirement>
              <PasswordRequirement valid={passwordErrors.special}>
                <FaExclamationCircle /> At least one special character
              </PasswordRequirement>
            </PasswordRequirements>
          </FormGroup>

          <FormGroup>
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            {confirmPasswordError && confirmPassword && (
              <InputFeedback error>
                <FaExclamationCircle /> {confirmPasswordError}
              </InputFeedback>
            )}
          </FormGroup>

          <Button
            type="submit"
            disabled={loading || (formTouched && !isFormValid())}
          >
            {loading ? 'Creating Account...' : 'Sign Up'}
          </Button>
        </Form>

        <LinkText>
          Already have an account? <Link to="/login">Log In</Link>
        </LinkText>
      </FormCard>
    </Container>
  );
};

export default SignUp;
