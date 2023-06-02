import React, { useState, useEffect } from 'react';
import AdminLayout from '../../hoc/AdminLayout';
import { AdminDashboardWrapper } from '../Styled';
import { Grid, Typography, TextField, Button } from '@mui/material';
import Select from '../../components/Select';
import { useDispatch, useSelector } from 'react-redux';
import { allCategories } from '../../actions/categoryActions';
import CategoryTable from '../../components/Tables/CategoryTable';

const AdminCategory = () => {
  const dispatch = useDispatch();
  const [categoryData, setCategoryData] = useState([]);
  const loginData = useSelector((state) => state.userLoginReducer.loginInfo);
  const categoryDataReducer = useSelector((state) => state.categoryReducer.categoryList);

  useEffect(() => {
    dispatch(allCategories(loginData.token));
  }, []);

  useEffect(() => {
    setCategoryData(categoryDataReducer);
  }, [categoryDataReducer]);

  return (
    <AdminLayout>
      <AdminDashboardWrapper>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <Typography variant="h3">Category</Typography>
          </Grid>
          <Grid item xs={12} sm={6} sx={{ justifyContent: 'flex-end', display: 'flex' }}>
            <TextField id="outlined-basic" label="Search Category" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={5} mt={3} mr={3}>
            <Select />
          </Grid>
          <Grid item xs={12} sm={5} mt={4} mr={1}>
            <Button variant="contained" fullWidth>
              Add a Category
            </Button>
          </Grid>
          <Grid item xs={12} mt={4} mr={1}>
            <CategoryTable categoryData={categoryData} />
          </Grid>
        </Grid>
      </AdminDashboardWrapper>
    </AdminLayout>
  );
};

export default AdminCategory;
