import React, { useState, useEffect } from 'react';
import AdminLayout from '../../hoc/AdminLayout';
import { AdminDashboardWrapper } from '../Styled';
import { Grid, Typography, TextField, Button } from '@mui/material';
import Select from '../../components/Select';
import { useDispatch, useSelector } from 'react-redux';
import { allProducts } from '../../actions/productActions';
import ProductTable from '../../components/Tables/ProductTable';
import ProductDialog from '../../components/Dialogbox/ProductDialog';
import { allCategories } from '../../actions/categoryActions';

const ProductDashboard = () => {
  const dispatch = useDispatch();
  const loginData = useSelector((state) => state.userLoginReducer.loginInfo);
  const productList = useSelector((state) => state.productReducer.productList);
  console.log('productList', productList);

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // This useEffect is called everytime when this page is loaded because we have passed empty dependecy array
  useEffect(() => {
    dispatch(allProducts(loginData?.token));
    dispatch(allCategories(loginData.token));
  }, []);

  return (
    <AdminLayout>
      <AdminDashboardWrapper>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <Typography variant="h3">Product Dashboard</Typography>
          </Grid>
          <Grid item xs={12} sm={6} sx={{ justifyContent: 'flex-end', display: 'flex' }}>
            <TextField id="outlined-basic" label="Search Product" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={5} mt={3} mr={3}>
            <Select />
          </Grid>
          <Grid item xs={12} sm={5} mt={4} mr={1}>
            <Button variant="contained" fullWidth onClick={handleClickOpen}>
              Add a Product
            </Button>
          </Grid>
          <Grid item xs={12} mt={4} mr={1}>
            <ProductTable productList={productList} />
          </Grid>
        </Grid>
      </AdminDashboardWrapper>
      <ProductDialog onClose={handleClose} open={open} />
    </AdminLayout>
  );
};

export default ProductDashboard;
