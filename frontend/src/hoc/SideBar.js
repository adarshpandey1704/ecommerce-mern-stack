import React from 'react';
import { Box, Typography } from '@mui/material';
import { StyledSideDiv, ListStyled, StyledTypography, StyledListItem } from './Styled';
import PersonIcon from '@mui/icons-material/Person';
import CategoryIcon from '@mui/icons-material/Category';
import InventoryIcon from '@mui/icons-material/Inventory';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useNavigate } from 'react-router-dom';

const SideBar = () => {
  const navigate = useNavigate();

  return (
    <StyledSideDiv>
      <Box height="100%" display="flex" flexDirection="column">
        <Box>
          <ListStyled>
            <StyledListItem>
              <Typography variant="h4" sx={{ color: 'white', fontSize: '48px' }}>
                EStore
              </Typography>
            </StyledListItem>
            <StyledListItem>
              <PersonIcon sx={{ color: 'white' }} />
              <StyledTypography
                variant="h5"
                cursor="pointer"
                onClick={navigate('/admin-dashboard')}>
                Users
              </StyledTypography>
            </StyledListItem>
            <StyledListItem>
              <CategoryIcon sx={{ color: 'white' }} />
              <StyledTypography cursor="pointer" variant="h5" onClick={navigate('/admin-category')}>
                Category
              </StyledTypography>
            </StyledListItem>
            <StyledListItem>
              <InventoryIcon sx={{ color: 'white' }} />
              <StyledTypography variant="h5">Products</StyledTypography>
            </StyledListItem>
            <StyledListItem>
              <AddShoppingCartIcon sx={{ color: 'white' }} />
              <StyledTypography variant="h5">Orders</StyledTypography>
            </StyledListItem>
          </ListStyled>
        </Box>
      </Box>
    </StyledSideDiv>
  );
};

export default SideBar;
