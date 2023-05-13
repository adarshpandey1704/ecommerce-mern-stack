import React, { useState, useEffect } from 'react';
import AdminLayout from '../../hoc/AdminLayout';
import { AdminDashboardWrapper } from '../Styled';
import { Grid, Typography, TextField, Button } from '@mui/material';
import Select from '../../components/Select';
import UserTable from '../../components/UserTable';
import DialogBox from '../../components/DialogBox';
import { useDispatch, useSelector } from 'react-redux';
import { allUsers } from '../../actions/userActions';

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const loginData = useSelector((state) => state.userLoginReducer.loginInfo);
  const registerData = useSelector((state) => state.userRegisterReducer);
  const userListInfo = useSelector((state) => state.userListReducer.userListInfo);
  console.log('userListReducer', userListInfo);
  console.log('logindATA', loginData);
  const [open, setOpen] = useState(false);
  console.log('open', open);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // This useEffect is called everytime when this page is loaded because we have passed empty dependecy array
  useEffect(() => {
    dispatch(allUsers(loginData?.token));
  }, []);

  // when any new user added thorugh modal than registerData reducer is going to update.
  useEffect(() => {
    dispatch(allUsers(loginData?.token));
  }, [registerData]);

  return (
    <AdminLayout>
      <AdminDashboardWrapper>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <Typography variant="h3">Users</Typography>
          </Grid>
          <Grid item xs={12} sm={6} sx={{ justifyContent: 'flex-end', display: 'flex' }}>
            <TextField id="outlined-basic" label="Search User" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={5} mt={3} mr={3}>
            <Select />
          </Grid>
          <Grid item xs={12} sm={5} mt={4} mr={1}>
            <Button variant="contained" fullWidth onClick={handleClickOpen}>
              Add a User
            </Button>
          </Grid>
          <Grid item xs={12} mt={4} mr={1}>
            <UserTable userListInfo={userListInfo} />
          </Grid>
        </Grid>
      </AdminDashboardWrapper>
      <DialogBox onClose={handleClose} open={open} />
    </AdminLayout>
  );
};

export default AdminDashboard;
