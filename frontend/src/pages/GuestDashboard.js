import React, { useEffect } from 'react';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import { allProducts } from '../actions/productActions';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@mui/material';

const GuestDashboard = () => {
  const dispatch = useDispatch();
  const loginData = useSelector((state) => state.userLoginReducer.loginInfo);
  const productList = useSelector((state) => state.productReducer.productList);
  console.log('productListInGuestDashboard', productList);

  useEffect(() => {
    dispatch(allProducts(loginData?.token));
  }, []);

  return (
    <>
      <Header />
      <Grid container>
        {productList &&
          productList.map((item, index) => {
            return (
              <Grid item sm={12} md={3} key={index}>
                <ProductCard item={item} />
              </Grid>
            );
          })}
      </Grid>
    </>
  );
};
export default GuestDashboard;
