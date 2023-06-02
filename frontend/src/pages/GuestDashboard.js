import React, { useEffect } from 'react';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import { allProducts } from '../actions/productActions';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import Checkbox from '../components/Checkbox';
import Slider from '../components/Slider';
import StarRating from '../components/RatingSelect';
import Loader from '../components/Loader';

const GuestDashboard = () => {
  const dispatch = useDispatch();
  const loginData = useSelector((state) => state.userLoginReducer.loginInfo);
  const { productList, loading } = useSelector((state) => state.productReducer);
  console.log('productListInGuestDashboard', productList);

  useEffect(() => {
    dispatch(allProducts(loginData?.token));
  }, []);

  return (
    <>
      <Header />
      {loading ? (
        <Loader />
      ) : (
        <Grid container>
          <Grid item sm={12} md={2}>
            <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '10px' }}>
              <h3>Select Category</h3>
              <Checkbox />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '10px' }}>
              <h3>Select Price Range</h3>
              <Slider />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '10px' }}>
              <h3>Select Rating</h3>
              <StarRating />
            </div>
          </Grid>
          <Grid item sm={12} md={10}>
            <Grid container>
              {productList &&
                productList.map((item, index) => {
                  return (
                    <Grid item sm={12} md={4} key={index}>
                      <ProductCard sx={{ margin: '2px', marginTop: '10px' }} item={item} />
                    </Grid>
                  );
                })}
            </Grid>
          </Grid>
        </Grid>
      )}
    </>
  );
};
export default GuestDashboard;
