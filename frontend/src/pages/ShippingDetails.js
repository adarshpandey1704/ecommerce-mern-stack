import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { StyledCard, StyledDiv, StyledFormDiv } from './Styled';
import {
  Typography,
  CardContent,
  CardActions,
  Button,
  TextField,
  FormControl,
  Grid
} from '@mui/material';
import { saveShippingDetails } from '../actions/shippingActions';

const ShippingDetails = () => {
  const dispatch = useDispatch();
  const [shippindDetails, setShippingDetails] = useState({
    name: '',
    email: '',
    address: '',
    mobile: '',
    landmark: '',
    pincode: ''
  });
  const { email } = useSelector((state) => state.userLoginReducer.loginInfo);
  console.log('email', email);
  console.log('shippindDetails', shippindDetails);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setShippingDetails((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(saveShippingDetails(shippindDetails));
  };

  useEffect(() => {
    setShippingDetails((prevState) => ({
      ...prevState,
      email: email
    }));
  }, [email]);

  return (
    <div>
      <Header />
      <Grid container>
        <Grid item sm={12} md={8}>
          <form onSubmit={handleSubmit}>
            <StyledDiv>
              <StyledCard sx={{ width: '100%' }}>
                <CardContent>
                  <Typography variant="h4" sx={{ marginBottom: '10px' }}>
                    Shipping Address
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
                        value={email}
                        disabled
                        onChange={handleChange}
                      />
                    </FormControl>
                    <FormControl sx={{ marginTop: '20px' }}>
                      <TextField
                        required
                        id="outlined-required"
                        label="Enter your Address"
                        name="address"
                        onChange={handleChange}
                      />
                    </FormControl>
                    <FormControl sx={{ marginTop: '20px' }}>
                      <TextField
                        required
                        id="outlined-required"
                        label="Enter your Mobile Number"
                        name="mobile"
                        onChange={handleChange}
                      />
                    </FormControl>
                    <FormControl sx={{ marginTop: '20px' }}>
                      <TextField
                        required
                        id="outlined-required"
                        label="Enter your landmark"
                        name="landmark"
                        onChange={handleChange}
                      />
                    </FormControl>
                    <FormControl sx={{ marginTop: '20px' }}>
                      <TextField
                        required
                        id="outlined-required"
                        label="Enter your Pincode"
                        name="pincode"
                        onChange={handleChange}
                      />
                    </FormControl>
                  </StyledFormDiv>
                </CardContent>
                <CardActions>
                  <Button
                    type="submit"
                    size="small"
                    variant="contained"
                    sx={{ marginLeft: '10px' }}>
                    Save
                  </Button>
                </CardActions>
              </StyledCard>
            </StyledDiv>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default ShippingDetails;
