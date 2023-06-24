import React, { useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Typography, Grid, Button } from '@mui/material';
import { StyledImage } from './Styled';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { UserAddToCart } from '../actions/addToCart';

const AddToCart = () => {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const productId = params.id;
  const productQuantity = params.quantity;
  const [cartList, setCartList] = useState([]);

  const productCartItems = useSelector((state) => state.cartReducer.cartItems);
  const userData = useSelector((state) => state.userLoginReducer.loginInfo);

  // const productCartItems = JSON.parse(localStorage.getItem('cartItems'));

  useEffect(() => {
    if (productId && productQuantity) {
      dispatch(UserAddToCart(productId, productQuantity));
    }
  }, [productId, productQuantity]);

  useEffect(() => {
    console.log('heeloooooooooo');
    setCartList(productCartItems);
  }, [productCartItems]);
  const columns = [
    { id: 'photo', label: 'Image', minWidth: 100 },
    { id: 'name', label: 'Name', minWidth: 100 },
    { id: 'description', label: 'Description', minWidth: 170 },
    {
      id: 'price',
      label: 'Price',
      minWidth: 170,
      align: 'right'
    },
    // {
    //   id: 'category',
    //   label: 'Category',
    //   minWidth: 170,
    //   align: 'right'
    // },
    {
      id: 'quantity',
      label: 'Quantity',
      minWidth: 170,
      align: 'right'
    }
  ];

  // const ProductList = [
  //   {
  //     _id: '64848c3722201ad522f22370',
  //     name: 'Boat Headphone',
  //     description: 'Lorem ipsum is cb asbas cbeuc cbduj cbewudc bgcwdeu gcew sauhc ',
  //     price: 40000,
  //     photo: 'bcdjcdsch dc',
  //     category: {
  //       name: 'Accessories'
  //     },
  //     quantity: 20
  //   }
  // ];

  // data structures libraries like ember.js, lodash, immutablejs

  const GetCartAmount = () => {
    return cartList.reduce((currentValue, nextValue) => {
      return currentValue + nextValue.quantity * nextValue.price;
    }, 0);
  };

  const handleRemove = (item) => {
    removeItem(item.id);
  };

  const removeItem = (productId) => {
    let cart = [];
    if (typeof window !== 'undefined') {
      if (localStorage.getItem('cartItems')) {
        cart = JSON.parse(localStorage.getItem('cartItems'));
      }
      cart.map((item, index) => {
        if (item.id === productId) {
          cart.splice(cart[index], 1);
        }
      });
      localStorage.setItem('cartItems', JSON.stringify(cart));
    }
  };

  const handlePush = () => {
    navigate(`/shipping-details/${userData._id}`);
  };

  return (
    <Grid container>
      <Grid item sx={12} md={9}>
        <Paper sx={{ overflow: 'hidden' }}>
          <Typography variant="h3">Shopping Cart</Typography>
          <TableContainer sx={{ maxHeight: 500 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow sx={{ backgroundColor: 'black' }}>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}>
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {cartList &&
                  cartList.map((item) => {
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1} key={item._id}>
                        <TableCell align="left">
                          <StyledImage
                            height="35px"
                            src={`http://localhost:8000/api/product/photo/${item.id}`}
                          />
                        </TableCell>
                        <TableCell align="left">{item.name}</TableCell>
                        <TableCell align="left">{item.description}</TableCell>
                        <TableCell align="right">{item.price}</TableCell>
                        {/* <TableCell align="right">{item.category.name}</TableCell> */}
                        <TableCell align="right">{item.quantity}</TableCell>
                        <TableCell>
                          <DeleteIcon
                            onClick={() => handleRemove(item)}
                            sx={{ cursor: 'pointer' }}
                          />
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Grid>
      <Grid sx={{ marginTop: '10px' }} item md={3}>
        <Typography variant="h5">Total Amount: Rs{GetCartAmount()}</Typography>
        <Button sx={{ margin: '20px' }} onClick={handlePush} variant="contained">
          Add your Shipping details
        </Button>
      </Grid>
    </Grid>
  );
};

export default AddToCart;
