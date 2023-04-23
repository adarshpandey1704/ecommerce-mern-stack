import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Typography,
  CardContent,
  CardActions,
  Button,
  TextField,
  FormControl
} from '@mui/material';
import { StyledCard, StyledDiv, StyledFormDiv } from './Styled';
import { login } from '../actions/userActions';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const loginData = useSelector((state) => state.userLoginReducer.loginInfo);

  // when loginData is changed than this useEffect helps you to reder a component again

  useEffect(() => {
    if (loginData?.role === 0) {
      navigate('/user-dashboard');
    } else if (loginData?.role === 1) {
      navigate('admin-dashboard');
    }
  }, [loginData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;
    dispatch(login(email, password));
  };

  return (
    <div>
      <Header buttonName="Signup" />
      <StyledDiv>
        <StyledCard>
          <CardContent>
            <Typography variant="h4" sx={{ marginBottom: '10px' }}>
              Login
            </Typography>
            <StyledFormDiv>
              <FormControl>
                <TextField
                  required
                  id="outlined-required"
                  name="email"
                  label="Enter your email"
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl sx={{ marginTop: '20px' }}>
                <TextField
                  required
                  name="password"
                  id="outlined-required"
                  label="Enter your Password"
                  onChange={handleChange}
                />
              </FormControl>
            </StyledFormDiv>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              variant="contained"
              sx={{ marginLeft: '10px' }}
              onClick={handleSubmit}>
              Login
            </Button>
          </CardActions>
        </StyledCard>
      </StyledDiv>
    </div>
  );
};

export default LoginPage;
