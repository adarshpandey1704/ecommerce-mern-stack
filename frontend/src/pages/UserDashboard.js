import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../components/Header';
import Banner from '../components/Banner';
import { Grid, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { UserLinkBox } from './Styled';
import { logout } from '../actions/userActions';

const UserDashBoard = () => {
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
      <Header buttonName="user dashboard" />
      <Banner type="User" homeData={homeData} />
      <Grid container>
        <Grid sx={{ backgroundColor: '#e6e6e6' }} item sm={12} md={6}>
          <Typography>User Links</Typography>
          <UserLinkBox>
            <Link className="styledLink">My Cart</Link>
            <Link className="styledLink">Update Profile</Link>
            <Link className="styledLink" onClick={handleLogout}>
              Logout
            </Link>
          </UserLinkBox>
        </Grid>
        <Grid item sm={12} md={6}>
          <Typography>User Information</Typography>
          <UserLinkBox>
            <Typography className="styledLink">Name - {homeData.name}</Typography>
            <Typography className="styledLink">Email - {homeData.email}</Typography>
            <Typography className="styledLink">
              Role - {homeData.role === 0 ? 'User' : 'Admin'}
            </Typography>
          </UserLinkBox>
        </Grid>
      </Grid>
    </div>
  );
};

export default UserDashBoard;
