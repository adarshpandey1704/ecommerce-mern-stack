import styled from '@emotion/styled';
import { Card, Box } from '@mui/material';

export const StyledCard = styled(Card)`
  width: 50%;
`;

export const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

export const StyledFormDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledBox = styled(Box)`
  margin-top: 20px;
`;

export const UserLinkBox = styled(Box)`
  border: 1px solid black;
  background: cadetblue;
  display: flex;
  flex-direction: column;
  .styledLink {
    height: 25px;
    padding: 5px;
    color: white;
    margin-left: 10px;
    border-bottom: 1px solid white;
  }
`;
export const AdminDashboardWrapper = styled.div`
  padding: 20px;
  background-color: #ffe6e6;
`;
