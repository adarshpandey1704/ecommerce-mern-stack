import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../components/Header';
import Banner from '../components/Banner';
import { Grid, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { UserLinkBox } from './Styled';
import { logout } from '../actions/userActions';

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const homeData = useSelector((state) => state.userLoginReducer.loginInfo);
  console.log('homeData', homeData);

  // handle logout functionality
  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };
  return (
    <div>
      <Header buttonName="Admin dashboard" />
      <Banner type="Admin" homeData={homeData} />
      <Grid container>
        <Grid sx={{ backgroundColor: '#e6e6e6' }} item sm={12} md={6}>
          <Typography>Admin Links</Typography>
          <UserLinkBox>
            <Link className="styledLink">Create Category</Link>
            <Link className="styledLink">Create Product</Link>
            <Link className="styledLink" onClick={handleLogout}>
              Logout
            </Link>
          </UserLinkBox>
        </Grid>
        <Grid item sm={12} md={6}>
          <Typography>Admin Information</Typography>
          <UserLinkBox>
            <Typography className="styledLink">Name - {homeData.name}</Typography>
            <Typography className="styledLink">Email - {homeData.email}</Typography>
            <Typography className="styledLink">
              Role - {homeData.role === 1 ? 'Admin' : 'User'}
            </Typography>
          </UserLinkBox>
        </Grid>
      </Grid>
    </div>
  );
};

export default AdminDashboard;
