import React from 'react';
import { Box, Typography } from '@mui/material';
import { StyledSideDiv, ListStyled, StyledTypography, StyledListItem } from './Styled';

const SideBar = () => {
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
              <StyledTypography variant="h4">Users</StyledTypography>
            </StyledListItem>
            <StyledListItem>
              <StyledTypography variant="h4">Category</StyledTypography>
            </StyledListItem>
            <StyledListItem>
              <StyledTypography variant="h4">Products</StyledTypography>
            </StyledListItem>
            <StyledListItem>
              <StyledTypography variant="h4">Orders</StyledTypography>
            </StyledListItem>
          </ListStyled>
        </Box>
      </Box>
    </StyledSideDiv>
  );
};

export default SideBar;
