import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { StyledCard, StyledDiv, StyledFormDiv, StyledShippingBox } from './Styled';
import {
  Typography,
  CardContent,
  CardActions,
  Button,
  TextField,
  FormControl,
  Grid,
  Box,
  Checkbox
} from '@mui/material';
import { saveShippingDetails, userShippingDetailsList } from '../actions/shippingActions';

const ShippingDetails = () => {
  const dispatch = useDispatch();
  const [shippindDetails, setShippingDetails] = useState({
    name: '',
    user: '',
    address: '',
    mobile: '',
    landmark: '',
    pincode: ''
  });
  const { _id, email } = useSelector((state) => state.userLoginReducer.loginInfo);
  const shippingList = useSelector(
    (state) => state.userShippingDetailsListReducer.shippingDetailsList
  );
  console.log('shippingList', shippingList);
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
      user: _id
    }));
  }, [_id]);

  useEffect(() => {
    dispatch(userShippingDetailsList(shippindDetails.user));
  }, [shippindDetails.user]);

  return (
    <div>
      <Header />
      <Grid container>
        <Grid item sm={12} md={7}>
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
                        label="Enter your id"
                        name="user"
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
        <Grid item sm={12} md={5}>
          <Box sx={{ marginTop: '20px' }}>
            <Typography variant="h4">User Shipping Address Lists</Typography>
            <StyledShippingBox>
              {shippingList &&
                shippingList.map((item, index) => {
                  return (
                    <Box
                      key={index}
                      sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: '10px'
                      }}>
                      <Checkbox />
                      <Box>
                        <Typography>{item.name}</Typography>
                        <Typography>{item.address}</Typography>
                        <Typography>{item.mobile}</Typography>
                        <Typography>{item.landmark}</Typography>
                        <Typography>{item.pincode}</Typography>
                      </Box>
                    </Box>
                  );
                })}
            </StyledShippingBox>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default ShippingDetails;
