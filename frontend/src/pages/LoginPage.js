import React from 'react';
import Header from '../components/Header';
import {Typography, CardContent,CardActions,Button, TextField, FormControl } from '@mui/material';
import {StyledCard, StyledDiv, StyledFormDiv} from './Styled';


const LoginPage = () => {
    return (
        <div>
            <Header buttonName="Signup" />
            <StyledDiv>
            <StyledCard>
            <CardContent>
                <Typography variant="h4" sx={{marginBottom: '10px'}}>Login</Typography>
                <StyledFormDiv>
           <FormControl>
           <TextField
            required
            id="outlined-required"
            label="Enter your email"
        />
           </FormControl>

           <FormControl sx={{marginTop: '20px'}}>
           <TextField
            required
            id="outlined-required"
            label="Enter your Password"
        />
           </FormControl>
           </StyledFormDiv>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" sx={{marginLeft: '10px'}}>Login</Button>
      </CardActions>
            </StyledCard>
            </StyledDiv>
        </div>
    )
}

export default LoginPage;