import React, { useState } from 'react';
import AdminLayout from '../hoc/AdminLayout';
import { AdminDashboardWrapper } from './Styled';
import { Grid, Typography, TextField, Button } from '@mui/material';
import Select from '../components/Select';
import UserTable from '../components/UserTable';
import DialogBox from '../components/DialogBox';

const AdminDashboard = () => {
  const [open, setOpen] = useState(false);
  console.log('open', open);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
            <UserTable />
          </Grid>
        </Grid>
      </AdminDashboardWrapper>
      <DialogBox onClose={handleClose} open={open} />
    </AdminLayout>
  );
};

export default AdminDashboard;
