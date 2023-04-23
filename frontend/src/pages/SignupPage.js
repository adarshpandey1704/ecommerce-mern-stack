import React, { useState } from 'react';
import Header from '../components/Header';
import { useDispatch } from 'react-redux';
import { StyledCard, StyledDiv, StyledFormDiv, StyledBox } from './Styled';
import { useNavigate } from 'react-router-dom';
import {
  Typography,
  CardContent,
  CardActions,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material';
import { register } from '../actions/userActions';

const SignupPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  console.log('formDatainsignup', formData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, role, password } = formData;
    dispatch(register(name, email, password, role));
    navigate('/');
  };

  return (
    <div>
      <Header buttonName="Login" />
      <div>
        <StyledDiv>
          <StyledCard>
            <CardContent>
              <Typography variant="h4" sx={{ marginBottom: '10px' }}>
                Signup
              </Typography>
              <StyledFormDiv>
                <FormControl>
                  <TextField
                    required
                    id="outlined-required"
                    label="Enter your Name"
                    name="name"
                    onChange={handleChange}
                  />
                </FormControl>

                <FormControl sx={{ marginTop: '20px' }}>
                  <TextField
                    required
                    id="outlined-required"
                    label="Enter your email"
                    name="email"
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl sx={{ marginTop: '20px' }}>
                  <TextField
                    required
                    id="outlined-required"
                    label="Enter your Password"
                    name="password"
                    onChange={handleChange}
                  />
                </FormControl>
                <StyledBox sx={{ minWidth: 120 }}>
                  <FormControl sx={{ width: '100%' }} error>
                    <InputLabel id="demo-simple-select-error-label">Role</InputLabel>
                    <Select
                      labelId="demo-simple-select-error-label"
                      id="demo-simple-select-error"
                      label="Role"
                      name="role"
                      onChange={handleChange}>
                      <MenuItem value={0}>User</MenuItem>
                      <MenuItem value={1}>Admin</MenuItem>
                    </Select>
                  </FormControl>
                </StyledBox>
              </StyledFormDiv>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                variant="contained"
                sx={{ marginLeft: '10px' }}
                onClick={handleSubmit}>
                Signup
              </Button>
            </CardActions>
          </StyledCard>
        </StyledDiv>
      </div>
    </div>
  );
};

export default SignupPage;
