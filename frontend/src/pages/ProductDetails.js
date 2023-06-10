import React from 'react';
import Header from '../components/Header';
import { useLocation, useNavigate } from 'react-router-dom';
import { StyledImage, StyledImgBox } from './Styled';
import { Grid, Typography, Box, Button } from '@mui/material';
import RatingSelect from '../components/RatingSelect';

const ProductDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  console.log('state', state);

  const handleNavigate = () => {
    navigate(`/cart/${state.item._id}`);
  };

  return (
    <div>
      <Header />
      <Grid container m={2} p={3}>
        <Grid item sm={12} md={6} sx={{ marginTop: '40px' }}>
          <StyledImgBox>
            <StyledImage src={`http://localhost:8000/api/product/photo/${state.item._id}`} />
          </StyledImgBox>
        </Grid>
        <Grid item sm={12} md={6} sx={{ marginTop: '40px' }}>
          <Typography variant="h2">{state.item.name}</Typography>
          <Typography variant="h5" sx={{ marginTop: '20px' }}>
            {state.item.description}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="h5" sx={{ marginTop: '20px', color: 'red' }}>
              Rs {state.item.price}
            </Typography>
            <RatingSelect style={{ marginTop: '20px' }} />
          </Box>
          <Button onClick={handleNavigate} sx={{ cursor: 'pointer' }} mt={2} variant="contained">
            Add to Cart
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductDetails;
