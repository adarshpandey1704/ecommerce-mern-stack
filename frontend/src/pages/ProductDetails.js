import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { useLocation, useNavigate } from 'react-router-dom';
import { StyledImage, StyledImgBox, CartBox, StyledDivCart } from './Styled';
import { Grid, Typography, Box, Button, Select, MenuItem } from '@mui/material';

const ProductDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [productQuantity, setProductQuantity] = useState([]);
  const [selectedQuantity, setSelectedQuantity] = useState(null);
  console.log('selectedQuantity', selectedQuantity);

  const handleNavigate = () => {
    navigate(`/cart/${state.item._id}/${selectedQuantity}`);
  };

  // qantity of the particular product inside your database
  useEffect(() => {
    if (state.item.quantity) {
      const array = [];
      for (let i = 1; i <= state.item.quantity; i++) {
        array.push(i);
      }
      setProductQuantity(array);
    }
  }, [state.item]);

  const handleSelect = (e) => {
    setSelectedQuantity(e.target.value);
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
        <Grid item sm={12} md={3} sx={{ marginTop: '40px' }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
            {state.item.name}
          </Typography>
          <Typography variant="p" sx={{ marginTop: '20px' }}>
            {state.item.description}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="h5" sx={{ marginTop: '20px', color: 'black' }}>
              Price: Rs {state.item.price}
            </Typography>
          </Box>
        </Grid>
        <Grid item md={3}>
          <CartBox>
            <StyledDivCart>
              <Typography sx={{ fontWeight: 'bold' }}>Price:</Typography>
              <Typography> {state.item.price}</Typography>
            </StyledDivCart>
            <StyledDivCart>
              <Typography sx={{ fontWeight: 'bold' }}>Status:</Typography>
              <Typography>{state.item.quantity > 0 ? 'In Stock' : 'Out of Stock'}</Typography>
            </StyledDivCart>
            <StyledDivCart>
              <Typography sx={{ fontWeight: 'bold' }}>Quantity</Typography>
              <Select value={selectedQuantity} onChange={handleSelect}>
                {productQuantity.length > 0 ? (
                  productQuantity?.map((item, index) => {
                    return (
                      <MenuItem value={item} key={index}>
                        {item}
                      </MenuItem>
                    );
                  })
                ) : (
                  <MenuItem disabled={productQuantity?.length < 1 ? true : false}>0</MenuItem>
                )}
              </Select>
            </StyledDivCart>
            <Button
              disabled={state.item.quantity > 0 ? false : true}
              onClick={handleNavigate}
              sx={{
                cursor: 'pointer',
                width: '50%',
                align: 'center',
                marginLeft: '70px',
                marginTop: '20px'
              }}
              mt={2}
              variant="contained">
              Add to Cart
            </Button>
          </CartBox>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductDetails;
